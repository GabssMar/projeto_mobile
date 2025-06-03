import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ActivityIndicator, Alert } from 'react-native';
import api from '../services/api';
import * as ImagePicker from 'expo-image-picker';

export default function NovaMulta({ navigation }) {
    const [form, setForm] = useState({
        placa: '', modelo: '', fabricante: '', cor: '', ano: '', tipoInfracao: '', local: '', data: '', hora: '', gravidade: '', pontos: '', comentarios: '', foto: null
    });
    const [loading, setLoading] = useState(false);
    const [imagem, setImagem] = useState(null);

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImagem(result.assets[0].uri);
            handleChange('foto', result.assets[0].uri);
        }
    };

    const handleSalvar = async () => {
        setLoading(true);
        try {
            // Monte o objeto conforme o DTO do backend
            const dto = {
                DadosVeiculo: {
                    Placa: form.placa,
                    Modelo: form.modelo,
                    Fabricante: form.fabricante,
                    Cor: form.cor,
                    Ano: form.ano,
                    IdUsuario: 1 // ajuste conforme necessário
                },
                DadosProprietario: {
                    Nome: form.nomeProprietario || '',
                    Cnh: form.cnh || '',
                    Cpf: form.cpf || ''
                },
                DetalhesInfracao: {
                    TipoInfracao: form.tipoInfracao,
                    CodigoInfracao: form.codigoInfracao || '',
                    LocaInfracao: form.local,
                    Data: form.data,
                    Hota: form.hora,
                    Gravidade: form.gravidade,
                    PontosCnh: form.pontos
                },
                Anexos: {
                    Evidencia: form.foto || '',
                    Comentarios: form.comentarios
                }
            };
            await api.post('/multas', dto, {
                headers: { 'Content-Type': 'application/json' },
            });
            Alert.alert('Sucesso', 'Multa cadastrada com sucesso!');
            navigation.navigate('Multas');
        } catch (error) {
            Alert.alert('Erro', 'Erro ao cadastrar multa.');
        } finally {
            setLoading(false);
        }
    };

    const [gravidade, setGravidade] = useState('');

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                style={{ backgroundColor: '#38454D' }}
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.cabecalho}>
                    <TouchableOpacity style={styles.botaoBack} onPress={() => navigation.goBack()}>
                        <Image 
                            source={{ uri: 'https://img.icons8.com/?size=100&id=40217&format=png&color=FFFFFF' }} 
                            style={styles.iconeBack} />
                    </TouchableOpacity>
                    <Text style={styles.titleCabecalho}>Cadastro da Multa</Text>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.titulo}>Dados do carro</Text>
                    <Text style={styles.label}>Placa<Text style={styles.obrigatorio}>*</Text>:</Text>
                    <TextInput style={styles.input} placeholder="Digite a placa" value={form.placa} onChangeText={v => handleChange('placa', v)} />
                    <Text style={styles.label}>Modelo<Text style={styles.obrigatorio}>*</Text>:</Text>
                    <TextInput style={styles.input} placeholder="Digite o modelo" value={form.modelo} onChangeText={v => handleChange('modelo', v)} />
                    <Text style={styles.label}>Fabricante<Text style={styles.obrigatorio}>*</Text>:</Text>
                    <TextInput style={styles.input} placeholder="Digite o fabricante" value={form.fabricante} onChangeText={v => handleChange('fabricante', v)} />
                    <Text style={styles.label}>Cor<Text style={styles.obrigatorio}>*</Text>:</Text>
                    <TextInput style={styles.input} placeholder="Digite a cor" value={form.cor} onChangeText={v => handleChange('cor', v)} />
                    <Text style={styles.label}>Ano<Text style={styles.obrigatorio}>*</Text>:</Text>
                    <TextInput style={styles.input} placeholder="Digite o ano" keyboardType="numeric" value={form.ano} onChangeText={v => handleChange('ano', v)} />

                    <Text style={styles.titulo}>Detalhes da Infração</Text>
                    <Text style={styles.label}>Tipo da Infração<Text style={styles.obrigatorio}>*</Text>:</Text>
                    <TextInput style={styles.input} placeholder="Digite o tipo da infração" value={form.tipoInfracao} onChangeText={v => handleChange('tipoInfracao', v)} />
                    <Text style={styles.label}>Local da infração<Text style={styles.obrigatorio}>*</Text>:</Text>
                    <TextInput style={styles.input} placeholder="Digite o local da infração" value={form.local} onChangeText={v => handleChange('local', v)} />
                    <Text style={styles.label}>Data<Text style={styles.obrigatorio}>*</Text>:</Text>
                    <TextInput style={styles.input} placeholder="DD/MM/AAAA" keyboardType="numeric" value={form.data} onChangeText={v => handleChange('data', v)} />
                    <Text style={styles.label}>Hora<Text style={styles.obrigatorio}>*</Text>:</Text>
                    <TextInput style={styles.input} placeholder="HH:MM" keyboardType="numeric" value={form.hora} onChangeText={v => handleChange('hora', v)} />
                    <Text style={styles.label}>Gravidade<Text style={styles.obrigatorio}>*</Text>:</Text>
                    <View style={styles.selectContainer}>
                        <TouchableOpacity style={[styles.selectOption, gravidade === 'Leve' && styles.selectedOption]} onPress={() => { setGravidade('Leve'); handleChange('gravidade', 'Leve'); }}>
                            <Text style={styles.selectText}>Leve</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.selectOption, gravidade === 'Média' && styles.selectedOption]} onPress={() => { setGravidade('Média'); handleChange('gravidade', 'Média'); }}>
                            <Text style={styles.selectText}>Média</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.selectOption, gravidade === 'Grave' && styles.selectedOption]} onPress={() => { setGravidade('Grave'); handleChange('gravidade', 'Grave'); }}>
                            <Text style={styles.selectText}>Grave</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.selectOption, gravidade === 'Gravíssima' && styles.selectedOption]} onPress={() => { setGravidade('Gravíssima'); handleChange('gravidade', 'Gravíssima'); }}>
                            <Text style={styles.selectText}>Gravíssima</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.label}>Pontos na CNH<Text style={styles.obrigatorio}>*</Text>:</Text>
                    <TextInput style={styles.input} placeholder="Digite os pontos" keyboardType="numeric" value={form.pontos} onChangeText={v => handleChange('pontos', v)} />

                    <Text style={styles.titulo}>Anexo e observações</Text>
                    <Text style={styles.label}>Foto ou evidência:</Text>
                    <TouchableOpacity style={styles.fotoButton} onPress={pickImage}>
                        <Text style={styles.fotoButtonText}>Selecionar foto</Text>
                    </TouchableOpacity>
                    {imagem && (
                        <Image source={{ uri: imagem }} style={styles.fotoPreview} />
                    )}
                    <Text style={styles.label}>Comentários adicionais:</Text>
                    <TextInput style={[styles.input, { height: 80 }]} placeholder="Digite comentários adicionais" multiline value={form.comentarios} onChangeText={v => handleChange('comentarios', v)} />
                    <TouchableOpacity style={styles.botaoSalvar} onPress={handleSalvar} disabled={loading}>
                        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.textoSalvar}>Salvar</Text>}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38454D',
        padding: 16,
    },
    scrollContent: {
        flexGrow: 1,
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
    titulo: {
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 16,
        textAlign: 'center',
    },
    obrigatorio: {
        color: '#FF5252',
    },
    instrucao: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'center',
    },
    selectContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        justifyContent: 'space-between',
    },
    selectOption: {
        flex: 1,
        padding: 10,
        marginHorizontal: 2,
        backgroundColor: '#e0e0e0',
        borderRadius: 4,
        alignItems: 'center',
    },
    selectedOption: {
        backgroundColor: '#007BFF',
    },
    selectText: {
        color: '#333',
        fontWeight: 'bold',
    },
    fotoButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 4,
        marginBottom: 10,
        alignItems: 'center',
    },
    fotoButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    fotoPreview: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'center',
    },
})