import React, { useState } from 'react';
import { View,Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../Firebase/firebaselogin';
import { getDatabase, ref, push } from 'firebase/database';

const RegisterScreen = () => {
  const app =  initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);

  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [date, setDate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleRegister = () => {
    if (password == confirmPassword) {
      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log('Registro exitoso');
        saveAdditionalUserData(user.uid);
      })
      .catch(error => {
        console.log(error);
      })
    } else {
      console.log('Password Diferente');
    }
  };

  const saveAdditionalUserData = (userId) => {
    const userData = {
      email: email,
      nombre: nombre,
      apellido: apellido,
      nacimiento: date,
      rol:"user"
    };

    push(ref(database, 'users'),userData )
      .then(() => {
        console.log('Información adicional guardada exitosamente');
      })
      .catch((error) => {
        console.log('Error al guardar la información adicional:', error);
      });

  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/netflix-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#b3b3b3"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombres"
        placeholderTextColor="#b3b3b3"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellidos"
        placeholderTextColor="#b3b3b3"
        value={apellido}
        onChangeText={setApellido}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento"
        placeholderTextColor="#b3b3b3"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#b3b3b3"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        placeholderTextColor="#b3b3b3"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 80,
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
    width: 300,
  },
  button: {
    marginVertical: 20,
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

export default RegisterScreen;
