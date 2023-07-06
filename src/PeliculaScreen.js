import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from 'react-native-vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
import React from 'react'

const PeliculaScreen = ({ route  }) => {
  const { serie } = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: serie.urlpelicula }}
        style={styles.video}
        shouldPlay
        resizeMode="cover"
      />
      <Image source={{ uri: serie.urlimagen }} style={styles.imagen} />
      <Text style={styles.titulo}>{serie.title}</Text>
      <Text style={styles.descripcion}>{serie.descripcion}</Text>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="close" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#131313',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 5,
    color:'white',  
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 10,
  },
  video: {
    width: '100%',
    height: 200,
  },
  imagen: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  descripcion: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
export default PeliculaScreen