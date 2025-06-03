import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import api from '../services/api';

export default function Multas({ navigation }) {
    const [multas, setMultas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMultas() {
            try {
                const response = await api.get('/multas');
                setMultas(response.data);
            } catch (err) {
                setError('Erro ao buscar multas');
            } finally {
                setLoading(false);
            }
        }
        fetchMultas();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.cardMulta}>
            <Text style={styles.title}>{item.id}</Text>
            <Text style={styles.dados}>Fabricante: {item.fabricante}</Text>
            <Text style={styles.dados}>Modelo: {item.modelo}</Text>
            <Text style={styles.dados}>Placa: {item.placa}</Text>
            <Text style={styles.dados}>Data: {item.data}</Text>
            <View style={styles.botaoStatus}>
                <Text style={styles.status}>Análise pendente</Text>
            </View>
        </View>
    );

    if (loading) {
        return <View style={styles.loading}><ActivityIndicator size="large" color="#fff" /></View>;
    }
    if (error) {
        return <View style={styles.loading}><Text style={{ color: '#fff' }}>{error}</Text></View>;
    }

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
                <FlatList
                    data={multas}
                    keyExtractor={(item, index) => {
                        if (item.id && !isNaN(item.id)) return item.id.toString();
                        if (item.placa && item.data) return `${item.placa}_${item.data}`;
                        return index.toString();
                    }}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
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
    botaoStatus: {
        backgroundColor: '#FFDD00',
        borderRadius: 4,
        padding: 4,
        width: '10%',
        marginTop: 10,
        position: 'absolute',
        right: 16,
    },
    status: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    botaoStatusConcluido: {
        backgroundColor: '#6AA84F',
        borderRadius: 4,
        padding: 4,
        width: '10%',
        marginTop: 10,
        position: 'absolute',
        right: 16,
    },
    statusConcluido: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#38454D',
    },
    scrollContent: {
        paddingBottom: 32,
    },
});
