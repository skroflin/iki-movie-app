import React, { useEffect, useState } from "react";
import { Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import movieService from "@/services/movieService";
import { Movie } from "@/types/movie";
import { useRouter } from "expo-router";

export default function MovieList() {
  const router = useRouter();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await movieService.getAllMovies();
      setMovies(movieData);
    };
    fetchMovies();
  }, []);

  const renderMovie = ({ item }: { item: Movie }) => (
    <TouchableOpacity
      style={styles.movieItem}
      onPress={() => router.push(`/movies/${item.id}` as any)}
    >
      <Text style={styles.title}>{item.series_title}</Text>
      <Text style={styles.subtitle}>Year: {item.released_year}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={movies}
      renderItem={renderMovie}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  movieItem: {
    padding: 10,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
  },
});
