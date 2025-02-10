import React, { useEffect, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import movieService from "@/services/movieService";
import { Movie } from "@/types/movie";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface MovieListProps {
  HeaderComponent: React.ComponentType;
}

export default function MovieList({ HeaderComponent }: MovieListProps) {
  const router = useRouter();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movieData = await movieService.getAllMovies();

        if (isMounted) {
          console.log("Movies fetched successfully:", movieData?.length);
          setMovies(movieData);
        }
      } catch (err) {
        if (isMounted) {
          console.log("Error fetching movies:", err);
          setError("Unable to load movies");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchMovies();
    return () => {
      isMounted = false;
    };
  }, []);

  const renderMovie = ({ item }: { item: Movie }) => (
    <TouchableOpacity
      style={styles.movieItem}
      onPress={() => router.push(`/movies/${item.id}` as any)}
    >
      <ThemedText style={styles.title}>{item.series_title}</ThemedText>
      <ThemedText style={styles.subtitle}>
        Year: {item.released_year}
      </ThemedText>
    </TouchableOpacity>
  );

  if (error) {
    return (
      <ThemedView style={styles.centerContainer}>
        <ThemedText style={styles.errorText}>{error}</ThemedText>
      </ThemedView>
    );
  }

  return (
    <FlatList
      data={movies}
      renderItem={renderMovie}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={HeaderComponent}
      ListEmptyComponent={() => (
        <ThemedView style={styles.centerContainer}>
          <ThemedText>
            {isLoading ? "Loading movies..." : "No movies available"}
          </ThemedText>
        </ThemedView>
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  listContainer: {
    flexGrow: 1,
  },
  movieItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 4,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});
