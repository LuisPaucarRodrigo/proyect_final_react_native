import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, StyleSheet,Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../Firebase/firebaselogin';
import { getDatabase, ref, push } from 'firebase/database';


const LoginScreen = () => {
  const navigation = useNavigation();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const app =  initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);

  const handleLogin = () => {
    // Lógica de inicio de sesión
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      console.log(user.email);
      // const profile = user.email

      // const user = {
      //   name: 'John Doe',
      //   email: 'johndoe@example.com',
      //   age: 25,
       
      // };

      // saveUserToFirebase(profile);
      navigation.navigate('Navigator')
      // const resetAction = StackActions.reset({
      //   index: 0,
      //   actions: [Navigation.navigate({ routeName: 'Navigator' })],
      // });

      // navigation.dispatch(resetAction);
      
    })
    .catch(error => {
      console.log(error);
      Alert.alert("Credenciales Incorrectas")
    })
    
  };

  const handleRegister = () => {
    navigation.navigate('Register')
  };

  // const saveUserToFirebase = (user) => {
  //   push(ref(database, 'users'), user)
  //     .then(() => {
  //       console.log('Usuario guardado exitosamente');
  //     })
  //     .catch((error) => {
  //       console.log('Error al guardar el usuario:', error);
  //     });
  // };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/netflix-logo.png')}
        style={styles.logo}
      />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#b3b3b3"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#b3b3b3"
          secureTextEntry
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.RegisterButton} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 260,
    height: 80,
    marginBottom: 50,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  loginButton: {
    backgroundColor: '#e50914',
    paddingVertical: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  RegisterButton: {
    marginTop:16,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 16,
    borderRadius: 8,
  },
});

export default LoginScreen;
