# Projeto Mobile de Multas - UNIMAR

## Descrição

Aplicativo mobile desenvolvido para a disciplina de **Fábrica de Projetos Ágeis** do curso de **Análise e Desenvolvimento de Sistemas** da **UNIMAR - Universidade de Marília**. O app permite o registro, consulta e validação de multas de trânsito, com envio de evidências (imagens) e gerenciamento de agentes.

## Funcionalidades Principais

- **Login:** Autenticação do agente de trânsito.
- **Home:** Navegação para Multas, Nova Multa e Conta do agente.
- **Multas Aplicadas:** Lista de multas registradas, com botão para validar a placa via API.
- **Nova Multa:** Cadastro de nova multa, com preenchimento de dados do veículo, infração, envio de foto e comentários.
- **Conta:** Visualização dos dados do agente logado.

## Tecnologias Utilizadas

- **Linguagem:** JavaScript
- **Framework:** React Native (Expo)
- **Gerenciamento de Estado:** useState, useEffect
- **API:** Axios
- **Envio de Imagem:** expo-image-picker
- **Backend:** .NET (exemplo de URL padrão)

## Como Rodar o Projeto

### Pré-requisitos
- Node.js (recomendado 18.x ou superior)
- Expo Go (instale no seu celular via Google Play/App Store)
- Backend rodando e acessível (exemplo: .NET rodando em http://localhost:5163)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/[usuario]/[nome-do-repositorio].git
   cd [nome-do-repositorio]
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure a URL do backend em `services/api.js`:
   ```js
   baseURL: 'http://SEU_IP_LOCAL:5163', // Use o IP da sua máquina se for testar no celular
   ```
   > **Dica:** Para testar no celular físico, troque 'localhost' pelo IP da sua máquina na mesma rede Wi-Fi.

4. Inicie o projeto:
   ```bash
   npx expo start
   ```
   Escaneie o QR Code com o app Expo Go no seu celular.

## Observações Importantes
- **Envio de Imagem:** O envio de fotos funciona apenas no mobile (Android/iOS). No Expo Web, o envio de arquivos pode não funcionar corretamente.
- **Validação de Placa:** Na tela de Multas, use o botão "Validar Multa" para checar a placa via API (`/validar-placa?placa=PLACA`).
- **Backend:** Certifique-se de que o backend está rodando e aceitando requisições do app.

## Estrutura de Telas
- `LoginScreen.js`: Tela de login do agente
- `HomeScreen.js`: Tela inicial com navegação
- `Multas.js`: Lista de multas e validação
- `NovaMulta.js`: Cadastro de nova multa com envio de imagem
- `Conta.js`: Dados do agente logado

## Licença
Projeto acadêmico - UNIMAR
