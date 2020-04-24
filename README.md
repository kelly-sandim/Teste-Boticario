# Teste Boticario
Teste de desenvolvedor Mobile para o grupo Boticário, em linguagem React Native, desenvolvido utilizando o Expo

Primeiramente, muito obrigada pela oportunidade que me deram em participar desse processo seletivo. Aprendi muitas coisas enquanto fazia esse desafio, então, mesmo que eu não seja aprovada, agradeço muito tudo o que foi poossível aprender nessa semana.



**OBS:** UI do Twitter foi feita utilizando esse repositório como base: https://github.com/gbxnga/Twitter-React-Native

### **O que é necessário para fazer o código funcionar?**

* Ter o Expo e o NodeJs instalados na máquina (mais informações sobre como configurar e links de download aqui: https://docs.expo.io/)
* Ter o app Expo instalado ou no iOS (https://itunes.com/apps/exponent) ou no Android (https://play.google.com/store/apps/details?id=host.exp.exponent), dependendo do modelo do seu smartphone
* Garantir que tanto a máquina que está rodando o servidor Expo quanto o smartphone estão na mesma rede

### **Instruções de uso**

1. Abrir a pasta contendo o código via terminal ou prompt de comando
2. Rodar o comando ```yarn install``` para instalar todas as libs necessárias para o funcionamento do código
3. Rodar o comando ```expo start ```


### **Observações**

* Se, por acaso, der o erro ```Unable to resolve "@expo/vector-icons/Fontisto" from "node_modules/native-base/dist/src/basic/IconNB.js"``` vai ser necessário dar _downgrade_ na biblioteca ```native-base``` com o comando ```yarn add native-base@2.13.8 --save-exact```

### **Lista do que foi e do que não foi implementado**

Como essa é uma das primeiras vezes em que realmente mexo com ReactNative por conta própria, eu tive bastante dificuldade para fazer algumas coisas, então, infelizmente não deu para implementar tudo.

O que deu para ser implementado está nessa lista:
- [x] Tela de splash screen com informações sobre você, fique à vontade pra
apresentar seu nome, e-mail uma foto divertida sua. Mas se quiser só colocar
uma logo do seu produto, tá valendo ;) (**OBS:** A tela screen só possui o logo. As minhas informações eu resolvi deixar em uma _view_ que simulava um perfil do _Twitter_)
- [x] Tela de login para informar e-mail e senha;
- [x] Tela de cadastro de um novo usuário solicitando nome, email e senha;
- [x] Tela para listar postagens de até 280 caracteres, exibindo nome da pessoa que
postou, data do post e texto do post;
- [x] Tela para fazer um novo post solicitando apenas um campo de texto;
- [x] Ao logar no app, na tela inicial, deverá trazer alguns posts (fake) de seus
colegas;
- [ ] Possibilidade de editar e excluir um post próprio que foi publicado.

**OBS:** Tentei implementar boas práticas da arquitetura DDD, assim como _Clean Code_

### **Algumas Screenshots**
![Tela de Splash](https://i.imgur.com/PcmywSw.jpg)
![Tela de Login](https://i.imgur.com/FDdfteR.jpg)
![Tela de Registro](https://i.imgur.com/B1FaeSw.jpg)
![HomeScreen](https://i.imgur.com/q6BJeuh.jpg)
![Tela de Perfil](https://i.imgur.com/M6Nx72B.jpg)
![Tela de Novo Tweet](https://i.imgur.com/A2rJDzs.jpg)
![Validação de Email](https://i.imgur.com/9YVOyz3.jpg)
![Validação de campos](https://i.imgur.com/FnYAbD7.jpg)

