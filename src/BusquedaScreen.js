import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const BusquedaScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (searchText !== '') {
      // Realizar la solicitud a la API utilizando Axios
      axios.get(`http://52.86.133.104/peliculas`)
        .then(response => {
          const data = response.data;
          const filteredResults = data.filter(item => item.nombre.toLowerCase().includes(searchText.toLowerCase()));
          setSearchResults(filteredResults);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchText]);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleClearSearch = () => {
    setSearchText('');
    setSearchResults([]);
    setSelectedResult(null);
  };

  const handleResultSelect = (result) => {
    setSelectedResult(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          value={searchText}
          onChangeText={handleSearch}
        />
        {searchText !== '' && (
          <MaterialCommunityIcons
            name="close"
            size={24}
            color="#888"
            onPress={handleClearSearch}
          />
        )}
      </View>
      {searchResults && searchResults.length > 0 && (
        <FlatList
          data={searchResults}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.resultItem}
              onPress={() => handleResultSelect(item)}
            >
              <Text style={styles.title}>{item.nombre}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id ? item._id.toString() : ''}
        />
      )}
      {selectedResult !== null && (
        <View style={styles.selectedResult}>
          <Text style={styles.selectedResultTitle}>{selectedResult.nombre}</Text>
          <Text style={styles.selectedResultDescription}>{selectedResult.descripcion}</Text>
          <Image source={{ uri: selectedResult.urlimagen }} style={styles.image} />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Peliculas',{ serie: selectedResult })}>
            <Text style={styles.buttonText}>Ver Detalles</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    paddingTop: 30,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#888',
    borderWidth: 1,
    marginRight: 10,
    color: 'white',
  },
  resultItem: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    color: 'white',
  },
  selectedResult: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  selectedResultTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  selectedResultDescription: {
    color: 'white',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 5,
    width: 150,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default BusquedaScreen;
