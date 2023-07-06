import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';

const ProximamenteScreen = () => {
  const movies = [
    {
      id: 1,
      title: 'Película 1',
      description: 'Descripción de la Película 1',
      releaseDate: '10 de Julio, 2023',
      image: require('../assets/movie1.jpeg'),
    },
    {
      id: 2,
      title: 'On My Block:Temporada 1',
      description: 'La historia se centra en Monse, Cesar, Ruby y Jamal, quienes enfrentan los desafíos típicos de la adolescencia, como la amistad, el amor y las expectativas familiares.',
      releaseDate: '15 de Agosto, 2023',
      image: require('../assets/movie1.jpeg'),
    },
    {
      id: 3,
      title: 'Película 3',
      description: 'Descripción de la Película 3',
      releaseDate: '20 de Septiembre, 2023',
      image: require('../assets/movie1.jpeg'),
    },
    // Agrega más películas aquí
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {movies.map((movie) => (
          <View key={movie.id} style={styles.movieContainer}>
            <Image source={movie.image} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text style={styles.movieDescription}>{movie.description}</Text>
            <Text style={styles.movieReleaseDate}>{movie.releaseDate}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    paddingTop: 30,
  },
  movieContainer: {
    marginBottom: 20,
  },
  movieImage: {
    width: '100%',
    height: 210,
    resizeMode: 'cover',
  },
  movieTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  movieDescription: {
    color: '#525353',
    fontSize: 14,
    marginTop: 5,
  },
  movieReleaseDate: {
    color: '#919191',
    fontSize: 14,
    marginTop: 5,
  },
});

export default ProximamenteScreen;
