import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import movieService from '../services/movieService';
import { Movie } from '../types/movie';

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await movieService.getAllMovies();
      setMovies(movieData);
    };
    
    fetchMovies();
  }, []);

  const renderMovie = ({ item }: { item: Movie }) => (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text><h1>{item.series_title}</h1></Text>
      <Text><h2>Year: {item.released_year}</h2></Text>
    </View>
  );

  return (
    <FlatList
      data={movies}
      renderItem={renderMovie}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
