import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

export default function NovaMulta({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <TouchableOpacity style={styles.botaoBack} onPress={() => navigation.goBack()}>
                    <Image 
                        source={{ uri: 'https://img.icons8.com/?size=100&id=40217&format=png&color=FFFFFF' }} 
                        style={styles.iconeBack} />
                </TouchableOpacity>
                <Text style={styles.titleCabecalho}>Nova Multa</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Fabricante:</Text>
                <TextInput style={styles.input} placeholder="Digite o fabricante" />
                
                <Text style={styles.label}>Modelo:</Text>
                <TextInput style={styles.input} placeholder="Digite o modelo" />
                
                <Text style={styles.label}>Placa:</Text>
                <TextInput style={styles.input} placeholder="Digite a placa" />
                
                <Text style={styles.label}>Infração:</Text>
                <TextInput style={styles.input} placeholder="Digite a infração" />
                
                <TouchableOpacity style={styles.botaoSalvar} onPress={() => navigation.navigate('DetalhesMulta')}>
                    <Text style={styles.textoSalvar}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38454D',
        padding: 16,
    },
    cabecalho: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    botaoBack: {
        marginRight: 16,
    },
    iconeBack: {
        width: 24,
        height: 24,
    },
    titleCabecalho: {
        fontSize: 24,
        color: '#FFFFFF',
    },
    formContainer: {
        marginTop: 20,
    },
    label: {
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
    },
    botaoSalvar: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        borderRadius: 4,
    },
    textoSalvar: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 18,
    },
    iconeImagem: {
        width: 50,
        height: 50,
        tintColor: '#fff',
    },
})