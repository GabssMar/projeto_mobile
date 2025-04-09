import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Conta({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.botaoBack} onPress={() => navigation.goBack()}>
                    <Image 
                        source={{ uri: 'https://img.icons8.com/?size=100&id=40217&format=png&color=ffffff' }} 
                        style={styles.iconeBack} 
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Conta</Text>
            </View>

            <Image 
                source={{ uri: 'https://img.icons8.com/?size=100&id=85147&format=png&color=ffffff' }} 
                style={styles.iconeConta} 
            />
            <Text style={styles.texto}>Nome do Agente</Text>

            <View style={styles.dadosContainer}>
                <View style={styles.dadosAgente}>
                    <View>
                        <Text style={styles.textoLabel}>E-mail</Text>
                        <Text style={styles.textoValor}>teste.agente@dsin.com.br</Text>
                    </View>
                    <Image 
                        source={{ uri: 'https://img.icons8.com/?size=100&id=71201&format=png&color=ffffff' }} 
                        style={styles.iconeEdit} 
                    />
                </View>

                <View style={styles.dadosAgente}>
                    <View>
                        <Text style={styles.textoLabel}>Senha</Text>
                        <Text style={styles.textoValor}>senha.dsin123</Text>
                    </View>
                    <Image 
                        source={{ uri: 'https://img.icons8.com/?size=100&id=71201&format=png&color=ffffff' }} 
                        style={styles.iconeEdit} 
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.botaoSair} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textoSair}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38454D',
        alignItems: 'center',
        padding: 16,
    },
    headerContainer: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        top: 20,
        marginBottom: 150,
    },
    botaoBack: {
        position: 'absolute',
        left: 16,
        zIndex: 10,
    },
    iconeBack: {
        width: 30,
        height: 30,
        tintColor: '#fff',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconeConta: {
        width: 120,
        height: 120,
        tintColor: '#fff',
        marginBottom: 10,
        marginTop: 20,
    },
    texto: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 20,
    },
    dadosContainer: {
        width: '100%',
        paddingHorizontal: 20,
        
    },
    dadosAgente: {
        backgroundColor: '#2C3E50',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
    },
    textoLabel: {
        color: '#aaa',
        fontSize: 16,
        marginBottom: 4,
    },
    textoValor: {
        color: '#fff',
        fontSize: 18,
    },
    iconeEdit: {
        width: 24,
        height: 24,
        tintColor: '#fff',
    },
    botaoSair: {
        backgroundColor: '#ff6347',
        borderRadius: 8,
        marginTop: 50,
        paddingVertical: 12,
        paddingHorizontal: 32,
    },
    textoSair: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});