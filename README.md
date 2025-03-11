# Aplicativo de Gerenciamento de Tarefas (TypeScript)

Este é um aplicativo de gerenciamento de tarefas desenvolvido com React Native, Expo e TypeScript. O app permite aos usuários listar, adicionar e gerenciar tarefas de forma simples e eficiente.

## Funcionalidades

- Listar tarefas
- Adicionar uma nova tarefa
- Alterar o status de uma tarefa (pendente/concluído)
- Limpar tarefas concluídas
- Persistência de dados usando AsyncStorage

## Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- Context API
- AsyncStorage

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
- Node.js (versão 12 ou superior)
- npm ou yarn
- Expo CLI

## Como Instalar e Rodar o Projeto

1. Clone este repositório:

```bash
git  clone https://github.com/jvict/vertem-react-native.git

```

2. Navegue até a pasta do projeto:

```bash

cd vertem-react-native
```


3. Instale as dependências:

```bash
npm install
```
ou se você usa yarn:

```bash
yarn install
```

4. Inicie o projeto:

```bash

npx expo start 

```
ou 

```bash
yarn start

```
ou

```bash
npm run start

```


5. Use um emulador ou o aplicativo Expo Go em seu dispositivo para visualizar o app.


## Componentes Principais

- `TaskItem`: Renderiza uma tarefa individual na lista.
- `CustomButton`: Botão reutilizável customizado.
- `TaskContext`: Gerencia o estado global das tarefas usando Context API.
- `TaskListScreen`: Tela principal que exibe a lista de tarefas.
- `AddTaskScreen`: Tela para adicionar uma nova tarefa.
- `AppNavigator`: Configura a navegação entre as telas.