import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';

const ProximamenteScreen = () => {
  const movies = [
    {
      id: 1,
      title: 'Stranger Things',
      description: 'Una serie de ciencia ficción y horror ambientada en los años 80, donde un grupo de niños de un pequeño pueblo se enfrenta a criaturas aterradoras y a un universo paralelo llamado "Upside Down',
      releaseDate: '15 de julio de 2016',
      image:'https://i.blogs.es/e9b4ee/strangerthings4/1366_2000.jpg',
    },
    {
      id: 2,
      title: 'Game of Thrones',
      description: ' Una épica serie de fantasía basada en las novelas de George R.R. Martin, donde noblezas y familias luchan por el control del Trono de Hierro en el ficticio continente de Westeros.',
      releaseDate: '17 de abril de 2011',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQQoYezTpUKiBM9XNwJtw2sWp-XCnCVBiMqzBxYBiDm3b_l6j0esgnMjfJRygmP1wNf4',
    },
    {
      id: 3,
      title: 'The Shawshank Redemption',
      description: 'Un drama carcelario que narra la amistad entre dos prisioneros, Andy Dufresne y Red, mientras enfrentan los desafíos y la injusticia dentro de la penitenciaría de Shawshank',
      releaseDate: '23 de septiembre de 1994',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxlCjLPVd7RZxLo5SWjiaUIGlRFVvyow5KMw7_3PtdCpx7BESXkFH70fuOGwpPLOGCE5w',
    },
    // Agrega más películas aquí
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {movies.map((movie) => (
          <View key={movie.id} style={styles.movieContainer}>
            <Image source={{ uri: movie.image }} style={styles.movieImage} />
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
