
# Projeto Mobile - Sistema de Multas

Aplicativo mobile desenvolvido na disciplina de **Fábrica de Projetos Ágeis** do curso de **Análise e Desenvolvimento de Sistemas (UNIMAR)**. O app foi idealizado para **auxiliar agentes de trânsito** na aplicação e gerenciamento de **multas e avisos**, promovendo praticidade e eficiência no dia a dia.

---

## Objetivos

- Facilitar o registro e a visualização de infrações de trânsito.
- Agilizar o processo de emissão de **multas** e **avisos** pelos agentes.
- Permitir navegação simples e rápida entre as funcionalidades principais.
- Aplicar conceitos ágeis e práticas modernas de desenvolvimento mobile.

---

## Funcionalidades

- **Autenticação de agentes**: Login por CPF com identificação da empresa.
- **Tela inicial (Dashboard)** com atalhos:
  - 📄 Multas Aplicadas
  - 📨 Avisos Aplicados
  - 🆕 Nova Multa
  - 🆕 Novo Aviso
- **Formulários interativos** para novas infrações:
  - Fabricante, Modelo, Placa, Tipo de infração
- **Detalhamento de Multas** e estrutura de navegação intuitiva.
- **Cabeçalho com botão de voltar** e título dinâmico em todas as telas.
- Navegação controlada via React Navigation.

---

## Tecnologias Utilizadas

| Ferramenta        | Descrição                              |
|-------------------|----------------------------------------|
| **React Native**  | Framework para desenvolvimento mobile  |
| **JavaScript**    | Linguagem principal do projeto         |
| **Expo**          | Plataforma para build e execução       |
| **React Navigation** | Gerenciamento de rotas              |
| **Figma**         | Protótipo da interface                 |
| **Git + GitHub**  | Versionamento de código                |

---

## Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js (v18+)
- Expo CLI (`npm install -g expo-cli`)
- App **Expo Go** no celular

### Instruções

```bash
# Clone o repositório
git clone https://github.com/GabssMar/projeto_mobile.git

# Acesse a pasta
cd projeto_mobile

# Instale as dependências
npm install

# Inicie o projeto
npx expo start
```

Escaneie o QR Code com o **Expo Go** para visualizar no celular.

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
│   └── DetalhesMulta.js
├── components/
│   └── Cabecalho.js
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
