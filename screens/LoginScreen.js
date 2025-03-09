import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function TelaLogin({ navigation }) {
    const [texto, setTexto] = useState('');
    const [senha, setSenha] = useState('');
    
    const handleLogin = () => {
        navigation.navigate('Home');
    }

    return (
      <SafeAreaView style={styles.container}>
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtD9Zs8ZFJYB3fUBt8re83HEZdmqGzhA78Xw&s' }} style={styles.image} />
        <Text style={styles.texto}>Digite seu código</Text>
        <TextInput style={styles.input} onChangeText={setTexto} value={texto} placeholderTextColor="#aaa" />
        <Text style={styles.texto}>Digite sua senha</Text>
        <TextInput style={styles.input} onChangeText={setSenha} value={senha} secureTextEntry={true} placeholderTextColor="#aaa" />
        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#38454D',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 100,
      marginBottom: 16,
    },
    texto: {
      color: '#fff',
      fontSize: 16,
      marginBottom: 10,
      textAlign: 'left',
    },
    input: {
      height: 40,
      width: 200,
      borderColor: 'gray',
      borderWidth: 1,
      color: '#fff',
      textAlign: 'center',
      marginBottom: 16,
      borderRadius: 5,
      
    },
    botao: {
      backgroundColor: '#FFC80B',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 10,
    },
    textoBotao: {
      color: '#38454D',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  