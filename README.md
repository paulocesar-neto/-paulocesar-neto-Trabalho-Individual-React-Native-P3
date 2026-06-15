# Aventura 1: O Ataque dos Clones 🛸

Nome: Paulo cesar Ferreira Vale Neto
Turma: 37 - Nova Friburgo
Professor: Fred
Matéria: React Native

Este projeto foi desenvolvido como parte de um desafio acadêmico com o objetivo de clonar a interface de um aplicativo real utilizando **React Native** com **TypeScript**. O aplicativo escolhido para a clonagem foi o **Nubank**, mas com um leve *easter egg*: uma versão personalizada para o Bruce Wayne (que aparentemente está devendo a Liga da Justiça).

## 🎯 Objetivos do Desafio

* Clonar páginas de um aplicativo à escolha (Interface do Nubank).
* Aplicar conceitos de componentização e estilização fiel ao app original.

## 📜 Regras Cumpridas

- [x] **Trabalho Individual**
- [x] **Uso de TypeScript** (Estrutura de arquivos `.tsx`)
- [x] **Componentes nativos utilizados:** `View`, `Text`, `Image`, `ScrollView`, `TouchableOpacity`.
- [x] **Estilização Separada:** Uso do `StyleSheet.create` isolado no arquivo `styles.ts`.
- [x] **Imagens de Referência:** Imagem do app original inclusa no repositório para comparação.

---

## 🛠️ Tecnologias Utilizadas

* [React Native](https://reactnative.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* Expo (ou ambiente React Native CLI)

---

## 🚀 Funcionalidades Implementadas

* **Header Customizado:** Barra superior com foto de perfil e ícones de navegação rápida.
* **Toggle de Visibilidade do Saldo:** Ao clicar no ícone de "olho", o saldo e as faturas alternam entre ocultos (`••••••••`) e visíveis, revelando o status financeiro do Batman.
* **Carrossel Horizontal de Atalhos:** Lista de ações rápidas (Área Pix, Pagar, Pegar Emprestado, etc.) com rolagem horizontal fluida (`ScrollView horizontal`).
* **Seções Detalhadas:** Área de cartão de crédito, empréstimos, seguros e investimentos seguindo o design pattern do Nubank.

---

## 📱 Demonstração & Comparativo

> 💡 **Nota:** Lembre-se de salvar a imagem do app original e um print do seu clone na pasta `assets` (ou na raiz) e atualizar os caminhos abaixo!

| App Original | Clone Desenvolvido |
| :---: | :---: |
| <img src="./assets/original_screenshot.png" width="300" alt="App Original"/> | <img src="./assets/clone_screenshot.jpeg" width="300" alt="Clone"/> |

---

## 📦 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/paulocesar-neto/-paulocesar-neto-Trabalho-Individual-React-Native-P3.git]
2. **Entre na pasta do projeto:**
   ```cd
    -paulocesar-neto-Trabalho-Individual-React-Native-P3.git
3. **Instale as dependências:**
   ```
    npm install
    # ou
    yarn install
4. **Inicie o projeto:**
   ``` npx expo start
    # ou o comando correspondente ao seu ambiente (ex: npm run android / ios)
