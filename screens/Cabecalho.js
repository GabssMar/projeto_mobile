import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Cabecalho({ title, navigation }) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Menu')} >
        <Image 
          source={{ uri: 'https://img.icons8.com/?size=100&id=3096&format=png&color=000000' }} 
          style={styles.iconMenu} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Conta')} >
        <Image 
          source={{ uri: 'https://img.icons8.com/?size=100&id=85147&format=png&color=000000' }} 
          style={styles.iconConta} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    backgroundColor: '#38454D',
    padding: 10,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconMenu: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  iconConta: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
});
