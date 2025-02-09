import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import movieService from '@/services/movieService';
import { Movie } from '@/types/movie';

export default function MovieDetailScreen() {
  const { id } = useLocalSearchParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (typeof id === 'string') {
        const movieData = await movieService.getMovieById(id);
        setMovie(movieData);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.poster_link }} style={styles.poster} />
      <Text style={styles.title}>{movie.series_title}</Text>
      <Text style={styles.subtitle}>Year: {movie.released_year}</Text>
      <Text style={styles.subtitle}>Director: {movie.director}</Text>
      <Text style={styles.subtitle}>Starring: {movie.star_one}, {movie.star_two}, {movie.star_three}, {movie.star_four}</Text>
      <Text style={styles.genre}>Genre: {movie.genre}</Text>
      <Text style={styles.rating}>IMDB Rating: {movie.imdb_rating}</Text>
      <Text style={styles.rating}>Metascore Rating: {movie.meta_score}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
      <Text style={styles.runtime}>Runtime: {movie.runtime}</Text>
      <Text style={styles.gross}>Estimated Gross: {movie.gross}$</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  poster: {
    width: 200,
    height: 300,
    resizeMode: "cover",
    borderRadius: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 4,
  },
  genre: {
    fontSize: 17,
    marginVertical: 4,
    fontWeight: "bold",
    color: "red",
  },
  rating: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gold",
    marginVertical: 4,
  },
  overview: {
    fontSize: 16,
    marginVertical: 4,
  },
  runtime: {
    fontSize: 15,
    marginVertical: 9,
  },
  gross: {
    fontSize: 15,
    color: "green",
  }
});
