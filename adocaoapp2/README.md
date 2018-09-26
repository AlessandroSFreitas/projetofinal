POR FAVOR, LEIA TUDO.............................. OBRIGADO!!!!!!

- Pessoal, criem uma pasta que vcs desejam clonar o projeto na máquina de vcs;

- Depois, abram o git bash que esta instalado na maquina de vcs e naveguem pelo git bash ate
a pasta que vcs desejam fazer o clone desse projeto;

- Em seguida, dentro da pasta desejada no git bash, executem o comando
"git clone https://github.com/qwertyFFF/projetofinal.git"

- Aguardem uns minutos, até finalizar o clone;

- Com o clone finalizado, abram o VS Code e abram o projeto.
IMPORTANTE: Abram o projeto -> adocaoapp2;

- Depois disso, abram o CMD e naveguem até a pasta do projeto -> adocaoapp2;

- Ativem no celular de vcs o modo programador e o modo debug do celular de vcs.
OBS: Tem no curso da Udemy como fazer isso, é bem simples;
OBS2: Tendo em vista que vcs ja instalaram o Android Studio e o SDK e as versoes do Android
compativeis com o celular de vcs cfe. manda a documentacao do
React Native -> https://facebook.github.io/react-native/docs/getting-started.html

- Depois, dentro da pasta do projeto, executem o comando no CMD
"react-native run-android".
ATENCAO: para "buildar" op rojeto, conectem o celular de vcs no PC antes de dar o comando,
assim o React vai ver que vcs possuem um dispositivo conectado para executar o debug;

- Aguardem uns minutos o React executar o debug no celular de vcs;

- Apos isso ele ira instalar o App no celular de vcs  pronto;

---------------------------------------------------------------------------------------------------------------------------------------

- Para executar novamente o App, siga esses passos:

1 => Com o CMD aberto, navegue até a pasta do projeto -> adocaoapp2;

2 => Conecte o celular no PC;

3 => Execute o comando "npm start" assim o React Native vai "buildar"
novamente o app no device;

4 => Aguarde ele carregar novamente o App no celular.

5 => O npm vai fazer a subida do servidor na porta 8081 e vai fazer o bundle (leitura) do
projeto novamente;

7 => Aguarde uns segundos até o npm ler os arquivos e pronto, app no ar novamente;

8 => OLHEM O VIDEO "14. Alternativa passo a passo para execução de apps no emulador ou celular"
DO CURSO DE REACT NATIVE, muitas informações importantes ali;

---------------------------------------------------------------------------------------------------------------------------------------

- Dicas do git bash

1 => SEMPRE!!!!! QUE FOREM PROGRAMAR, ABRAM O GIT BASH E EXECUTEM O COMANDO
"GIT PULL" DENTRO DA PASTA DO PROJETO -> adocaoapp2;
OBS: esse comando vai puxar todos os commits feitos por nós pra dentro do repositório
local de vcs;

2 => Quando forem executar commits na aplicação, descrevam o que vocês estão subindo:
EX: "Melhoria do botão recarregar";

---------------------------------------------------------------------------------------------------------------------------------------

Config. portas entre PC e Device executar o comando no CMD: adb reverse tcp:8081 tcp:8081

Executar o reload entre PC e Device executar o comando no CMD: adb shell input keyevent 46 46
