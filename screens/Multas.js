import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Multa({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <TouchableOpacity style={styles.botaoBack} onPress={() => navigation.goBack()}>
                    <Image 
                        source={{ uri: 'https://img.icons8.com/?size=100&id=40217&format=png&color=000000' }} 
                        style={styles.iconeBack} />
                </TouchableOpacity>
                <Text style={styles.titleCabecalho}>Multas Aplicadas</Text>
            </View>
            
            <View style={styles.listaMulta}>
                <View style={styles.cardMulta}>
                    <Text style={styles.title}>00001</Text>
                    <Text style={styles.dados}>Fabricante: Fiat</Text>
                    <Text style={styles.dados}>Modelo: Palio</Text>
                    <Text style={styles.dados}>Placa: MNL-6126</Text>
                    <Text style={styles.dados}>Data: 10/10/2021</Text>
                    <TouchableOpacity style={styles.botaoInformacoes} onPress={() => navigation.navigate('DetalhesMulta')}>
                        <Image source ={{ uri: 'https://img.icons8.com/?size=100&id=61873&format=png&color=FFFFFF' }} style={styles.iconeInformacoes} />
                    </TouchableOpacity>
                </View>
            </View>
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
    cabecalho: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginBottom: 20,
        top: 20,
    },
    botaoBack: {
        position: 'absolute',
        left: 16,
    },
    iconeBack: {
        width: 30,
        height: 30,
        tintColor: '#fff',
    },
    titleCabecalho: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    listaMulta: {
        width: '100%',
        paddingHorizontal: 20,
    },
    cardMulta: {
        backgroundColor: '#2C3E50',
        flexDirection: 'column',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        width: '100%',
    },
    dados: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 3,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    botaoInformacoes: {
        position: 'relative',
        alignItems: 'flex-end',
    },
    iconeInformacoes: {
        width: 30,
        height: 30,
        tintColor: '#fff',
    },
});
