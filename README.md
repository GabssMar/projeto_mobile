# Projeto Mobile - Sistema de Multas

Aplicativo mobile desenvolvido na disciplina de **Fábrica de Projetos Ágeis** do curso de **Análise e Desenvolvimento de Sistemas (UNIMAR)**. O app foi idealizado para **auxiliar agentes de trânsito** na aplicação e gerenciamento de **multas**, promovendo praticidade e eficiência no dia a dia.

---

## Objetivos

- Facilitar o registro e a visualização de infrações de trânsito.
- Agilizar o processo de emissão de **multas** pelos agentes.
- Permitir navegação simples e rápida entre as funcionalidades principais.
- Aplicar conceitos ágeis e práticas modernas de desenvolvimento mobile.

---

## Funcionalidades

- **Autenticação de agentes:** Login por CPF com identificação da empresa.
- **Dashboard:** Tela inicial com atalhos para Multas e Nova Multa.
- **Cadastro de Multas:** Formulário interativo para registrar infrações, com campos como fabricante, modelo, placa, tipo de infração, data, hora, gravidade, pontos e envio de foto.
- **Listagem de Multas:** Visualização das multas aplicadas, com botão para validação de placa via API.
- **Validação de Placa:** Checagem da placa junto ao backend para confirmação.
- **Conta do Agente:** Visualização dos dados do agente logado.
- **Navegação intuitiva:** Cabeçalho com botão de voltar e título dinâmico em todas as telas.

---

## Tecnologias Utilizadas

| Ferramenta           | Descrição                                 |
|----------------------|-------------------------------------------|
| **React Native**     | Framework para desenvolvimento mobile      |
| **JavaScript**       | Linguagem principal do projeto             |
| **Expo**             | Plataforma para build e execução           |
| **React Navigation** | Gerenciamento de rotas                     |
| **Axios**            | Requisições HTTP para o backend            |
| **expo-image-picker**| Seleção e envio de imagens                 |
| **.NET**             | Backend de exemplo (API REST)              |
| **Figma**            | Protótipo da interface                     |
| **Git + GitHub**     | Versionamento de código                    |

---

## Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js (v18+)
- Expo CLI (`npm install -g expo-cli`)
- App **Expo Go** no celular
- Backend rodando e acessível (exemplo: .NET rodando em http://localhost:5163)

### Instruções

```bash
# Clone o repositório
git clone https://github.com/GabssMar/projeto_mobile.git

# Acesse a pasta
cd projeto_mobile

# Instale as dependências
npm install

# Configure a URL do backend em services/api.js
# Exemplo:
# baseURL: 'http://SEU_IP_LOCAL:5163'
# (Troque 'localhost' pelo IP da sua máquina se for testar no celular)

# Inicie o projeto
npx expo start
```

Escaneie o QR Code com o **Expo Go** para visualizar no celular.

---

## Observações Importantes

- **Envio de Imagem:** O envio de fotos funciona apenas no mobile (Android/iOS). No Expo Web, o envio de arquivos pode não funcionar corretamente.
- **Validação de Placa:** Na tela de Multas, use o botão "Validar Multa" para checar a placa via API (`/validar-placa?placa=PLACA`).
- **Backend:** Certifique-se de que o backend está rodando e aceitando requisições do app.

---

## Estrutura do Projeto

```
projeto_mobile/
├── App.js
├── screens/
│   ├── LoginScreen.js
│   ├── HomeScreen.js
│   ├── Multas.js
│   ├── NovaMulta.js
│   └── Conta.js
├── components/
│   └── Cabecalho.js
├── services/
│   └── api.js
└── assets/
```

---

## Desenvolvido por

**Gabriele Martinez**  
Estudante de Análise e Desenvolvimento de Sistemas - UNIMAR  
[GitHub](https://github.com/GabssMar)

---

## 📄 Licença

Projeto acadêmico desenvolvido com fins educacionais.  
© 2025 - Todos os direitos reservados.
