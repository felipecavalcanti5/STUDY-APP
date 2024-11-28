# STUDY-APP
Projeto de aplicativo móvel que será objeto de avaliação da disciplina "Programação de dispositivos móveis" ministrada pelo prof. Kelson Victor

Firebase: serviço na núvem voltado principalmente para aplictivos de dispositivos móveis;
	--> Comporta os serviços de autenticação, que possibilita o login e gerenciamento de usuários, e também o Firestore Database, que funciona como um banco de dados para o app por meio de coleções. No caso do projeto realizado em sala (study app), cada usuário do firebase tem um UID atrelado a sua cartela de cartões, de modo que as informações de outro usuário não vão ser exibidas na plataforma de um primeiro user.
	
src: pasta onde será organizado o código. Não vem nativa da criação do projeto.

screens (telas): são os componentes de tela do projeto em react native (diferente do reactJS)
	--> Qual a diferença entre arquivos armazenados na pasta screeens dos da pasta context?
	R: A pasta context centraliza a gestão de estado global para a aplicação (como autenticação, preferências de tema, dados compartilhados entre várias telas, etc.). Já a pasta screens organiza os componentes que representam as diferentes telas ou páginas da aplicação, geralmente sendo a entrada para as interações do usuário com a interface da aplicação.
	
useState: gerencia localmente o estado de uma variável do componente
	-->para gerenciar globalmente --> CONTEXT API (pasta contexts)
	
useEffect: gerenciar o "efeito colateral" do que ocorre na tela.	

config: pasta que faz o gerenciamento do meio de campo entre núvem-cliente
	--> firebase config: configurações e chaves para acessar o firebase (forma que o firebase vai 'reconhecer' o projeto)
	--> npm install firebase:
	--> .env: arquivo da máquina local onde será armazenado as chaves do firebase; deve ser listado no gitignore --> npm install react-native.env
	OBS.: pra variáveis "auth" e "db" no firebaseConfig?
	Auth e db será exportado para o context (estado globam para acessar firebase);
	
App.js: componente pai do projeto
babel.config.js
	
No Context: Será realizado o CRUD de cartões: carregar cartões, adicionar cartão, atualizar cartão e excluir cartão
por que eu armazeno as imagens na pasta assets?
R: é onde você armazena recursos estáticos que serão utilizados na aplicação, como imagens, fontes, ícones, sons e vídeos. Esses recursos são geralmente arquivos que são necessários para a interface do usuário ou para o funcionamento da aplicação, mas que não são dinamicamente gerados ou alterados pela aplicação.
[ falar da relevância do ID para editar ou criar um cartão]
lixeirinha e lápis são imagens? R: não, fazem parte de uma biblioteca importada para o projeto
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

telas
