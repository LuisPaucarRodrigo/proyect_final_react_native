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

  const categorias = {
    accion: apidata.filter(item => item.categoria.nombre === 'Accion'),
    drama: apidata.filter(item => item.categoria.nombre === 'Drama'),
    romance: apidata.filter(item => item.categoria.nombre === 'Romance'),
    terror: apidata.filter(item => item.categoria.nombre === 'Terror'),
    comedia: apidata.filter(item => item.categoria.nombre === 'Comedia')
  };

  const date = [
    {
      id: 1,
      title: 'Stranger Things',
      image:'https://i.blogs.es/e9b4ee/strangerthings4/1366_2000.jpg',
    },
    {
      id: 2,
      title: 'Game of Thrones',

      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQQoYezTpUKiBM9XNwJtw2sWp-XCnCVBiMqzBxYBiDm3b_l6j0esgnMjfJRygmP1wNf4',
    },
    {
      id: 3,
      title: 'The Shawshank Redemption',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxlCjLPVd7RZxLo5SWjiaUIGlRFVvyow5KMw7_3PtdCpx7BESXkFH70fuOGwpPLOGCE5w',
    },
    // Agrega más contenido aquí
  ];

  const windowWidth = Dimensions.get('window').width;

  const renderContentCarrusel = ({ item }) => {
    return (
      <View>
        <Image style={styles.contentImageCarrusel} source={{ uri : item.image }} /> 
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
        <Text style={styles.sectionTitle}>Accion</Text>
        <FlatList
          data={categorias.accion}
          keyExtractor={(item) => item._id.toString()}
          renderItem={renderContentItem}
          horizontal
        />
        <Text style={styles.sectionTitle}>Drama</Text>
        <FlatList
          data={categorias.drama}
          keyExtractor={(item) => item._id.toString()}
          renderItem={renderContentItem}
          horizontal
        />
        <Text style={styles.sectionTitle}>Comedia</Text>
        <FlatList
          data={categorias.comedia}
          keyExtractor={(item) => item._id.toString()}
          renderItem={renderContentItem}
          horizontal
        />
        <Text style={styles.sectionTitle}>Terror</Text>
        <FlatList
          data={categorias.terror}
          keyExtractor={(item) => item._id.toString()}
          renderItem={renderContentItem}
          horizontal
        />
        <Text style={styles.sectionTitle}>Romance</Text>
        <FlatList
          data={categorias.romance}
          keyExtractor={(item) => item._id.toString()}
          renderItem={renderContentItem}
          horizontal
        />
        <Text style={styles.sectionTitle}>Mix</Text>
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
