import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          source={require('../assets/movie1.jpeg')}
          style={styles.avatar}
        />
        <Text style={styles.profileName}>Nombre de Perfil</Text>
      </View>
      <View style={styles.navigation}>
        {/* Agrega las diferentes secciones de navegación aquí */}
        <Text>Inicio</Text>
        <Text>Series</Text>
        <Text>Películas</Text>
        <Text>Mi lista</Text>
        <Text>Continuar viendo</Text>
      </View>
      <View style={styles.recommendedContent}>
        {/* Agrega el contenido recomendado aquí */}
        <Text>Contenido recomendado</Text>
      </View>
      <View style={styles.profileSettings}>
        {/* Agrega el enlace o ícono de configuración del perfil aquí */}
        <Text>Configuración de perfil</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    padding: 30,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  navigation: {
    marginBottom: 20,
  },
  recommendedContent: {
    marginBottom: 20,
  },
  profileSettings: {
    alignItems: 'flex-end',
  },
});

export default ProfileScreen;
