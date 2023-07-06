import React,{ useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const InicioScreen = () => {
  const navigation = useNavigation();

  const [apidata, setApiData] = useState([]);

  useEffect(() => {
    // Realizar la petición a la API al cargar el componente
    axios.get('http://52.86.133.104/peliculas')
      .then(response => {
        // Almacenar los datos en la variable de estado
        setApiData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  const date = [
    { id: 1, title: 'Serie 1', image: require('../assets/movie1.jpeg') },
    { id: 2, title: 'Película 1', image: require('../assets/movie1.jpeg') },
    { id: 3, title: 'Serie 2', image: require('../assets/movie1.jpeg') },
    // Agrega más contenido aquí
  ];

  const windowWidth = Dimensions.get('window').width;

  const renderContentCarrusel = ({ item }) => {
    return (
      <View>
        <Image style={styles.contentImageCarrusel} source={item.image} /> 
      </View>
    );
  };

  const renderContentItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Peliculas',{ serie: item })} style={styles.contentItem}>
        <Image style={styles.contentImage} source={{ uri: item.urlimagen }} />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.sectionTitleCarrusel}>Proximamente</Text>
        <Carousel
          data={date}
          renderItem={renderContentCarrusel}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          layout={'default'}
          loop
          autoplay
          autoplayInterval={3000}
        />
        <Text style={styles.sectionTitle}>Volver a ver</Text>
        <FlatList
          data={apidata}
          keyExtractor={(item) => item._id.toString()}
          renderItem={renderContentItem}
          horizontal
        />
        <Text style={styles.sectionTitle}>Las 10 mas populares en España hoy</Text>
        <FlatList
          data={apidata}
          keyExtractor={(item) => item._id.toString()}
          renderItem={renderContentItem}
          horizontal
        />
        <Text style={styles.sectionTitle}>Inicio</Text>
        <FlatList
          data={apidata}
          keyExtractor={(item) => item._id.toString()}
          renderItem={renderContentItem}
          horizontal
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    paddingTop: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 3,
    color: 'white',
  },
  contentItem: {
    marginRight: 5,
  },
  contentImage: {
    width: 120,
    height: 180,
  },
  //carrusel
  sectionTitleCarrusel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  
  contentImageCarrusel: {
    width: '100%',
    height: 230,
    marginBottom: 10,
  },
  contentTitleCarrusel: {
    marginTop: 5,
  },
});

export default InicioScreen;
