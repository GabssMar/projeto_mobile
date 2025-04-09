import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function DetalhesMulta({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <TouchableOpacity style={styles.botaoBack} onPress={() => navigation.goBack()}>
                    <Image 
                        source={{ uri: 'https://img.icons8.com/?size=100&id=40217&format=png&color=FFFFFF' }} 
                        style={styles.iconeBack} />
                </TouchableOpacity>
                <Text style={styles.titleCabecalho}>Informações</Text>
            </View>
            <Text style={styles.tituloMulta}>Multa 00001</Text>
            <View style={styles.informacoesContainer}>
                <View style={styles.cardDados}>
                    <Text style={styles.tituloCard}>Fabricante</Text>
                    <Text style={styles.dadosCard}>Fiat</Text>
                </View>
                <View style={styles.cardDados}>
                    <Text style={styles.tituloCard}>Modelo</Text>
                    <Text style={styles.dadosCard}>Palio</Text>
                </View>
                <View style={styles.cardDados}>
                    <Text style={styles.tituloCard}>Placa</Text>
                    <Text style={styles.dadosCard}>MNL-6126</Text>
                </View>
                <View style={styles.cardDados}>
                    <Text style={styles.tituloCard}>Infração</Text>
                    <Text style={styles.dadosCard}>Excesso de velocidade.</Text>
                </View>
                <View style={styles.cardDados}>
                    <Text style={styles.tituloCard}>Estado</Text>
                    <Text style={styles.dadosCard}>São Paulo</Text>
                </View>
                <View style={styles.cardDados}>
                    <Text style={styles.tituloCard}>Cidade</Text>
                    <Text style={styles.dadosCard}>Marília</Text>
                </View>
                <TouchableOpacity style={styles.botaoImagem} onPress={() => navigation.navigate('ImagemMulta')}>
                    <Image
                        source ={{ uri: 'https://img.icons8.com/?size=100&id=86821&format=png&color=000000' }}
                        style={styles.iconeImagem} />
                    <Text style={styles.textoImagem}>Imagem</Text>
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
    tituloMulta: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 20,
    },
    cardDados: {
        backgroundColor: '#2C3E50',
        fexlDiresction: 'column',
        borderRadius: 8,
        width: '100%',
        padding: 16,
        marginBottom: 12,
    },
    tituloCard: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3,
        top: 0,
    },
    dadosCard: {
        color: '#fff',
        fontSize: 14,
    },
    botaoImagem: {
        backgroundColor: '#F1D020',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconeImagem: {
        width: 20,
        height: 20,
        tintColor: '#000',
        marginRight: 8,
    },
    textoImagem: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
    },
});