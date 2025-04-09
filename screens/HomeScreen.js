import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Cabecalho from './Cabecalho';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Cabecalho title="Central de Multas" navigation={navigation}/>

      <Text style={styles.texto}>Bem-vindo ao Sistema de Multas</Text>
      
      <TouchableOpacity style={styles.botaoMultas} onPress={() => navigation.navigate('Multas')}>
        <Text style={styles.textoBotao}>Multas Aplicadas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoAvisos} onPress={() => navigation.navigate('Avisos')}>
        <Text style={styles.textoBotao}>Avisos Aplicados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.novaMulta} onPress={() => navigation.navigate('NovaMulta')}>
        <Text style={styles.textoBotao}>Nova Multa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.novoAviso} onPress={() => navigation.navigate('NovoAviso')}>
        <Text style={styles.textoBotao}>Novo Aviso</Text>
      </TouchableOpacity>
    </View>
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
  texto: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#ff6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 100,
  },
  textoBotao: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botaoMultas: {
    backgroundColor: '#EA6D31',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  botaoAvisos: {
    backgroundColor: '#F1D020',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 30,
},
  novaMulta: {
    backgroundColor: '#3051F5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 30,
},
  novoAviso: {
    backgroundColor: '#5ADB14',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 30,
},
});
