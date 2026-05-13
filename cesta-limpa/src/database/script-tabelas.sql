CREATE DATABASE cestaLimpa;

USE cestaLimpa;

CREATE TABLE time (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	conferencia VARCHAR(20),
	codigo_ativacao VARCHAR(50)
);


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_time INT,

	FOREIGN KEY (fk_time)
	REFERENCES time(id)
);

CREATE TABLE jogador (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	posicao VARCHAR(20),
	pontos_media DECIMAL(5,2),
	assistencias_media DECIMAL(5,2),
	rebotes_media DECIMAL(5,2),
	fk_time INT,

	FOREIGN KEY (fk_time)
	REFERENCES time(id)
);

CREATE TABLE favorito (
	id INT PRIMARY KEY AUTO_INCREMENT,
	fk_usuario INT,
	fk_jogador INT,

	FOREIGN KEY (fk_usuario)
	REFERENCES usuario(id),

	FOREIGN KEY (fk_jogador)
	REFERENCES jogador(id)
);


CREATE TABLE resultadoQuiz (
	id INT PRIMARY KEY AUTO_INCREMENT,
	jogador_resultado VARCHAR(50),
	porcentagem_curry DECIMAL(5,2),
	porcentagem_lebron DECIMAL(5,2),
	porcentagem_magic DECIMAL(5,2),
	porcentagem_shaq DECIMAL(5,2),
	fk_usuario INT,

	FOREIGN KEY (fk_usuario)
	REFERENCES usuario(id)
);

/* LESTE */

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES
('Atlanta Hawks', 'Leste', 'atlanta hawks'),
('Boston Celtics', 'Leste', 'boston celtics'),
('Brooklyn Nets', 'Leste', 'brooklyn nets'),
('Charlotte Hornets', 'Leste', 'charlotte hornets'),
('Chicago Bulls', 'Leste', 'chicago bulls'),
('Cleveland Cavaliers', 'Leste', 'cleveland cavaliers'),
('Detroit Pistons', 'Leste', 'detroit pistons'),
('Indiana Pacers', 'Leste', 'indiana pacers'),
('Miami Heat', 'Leste', 'miami heat'),
('Milwaukee Bucks', 'Leste', 'milwaukee bucks'),
('New York Knicks', 'Leste', 'new york knicks'),
('Orlando Magic', 'Leste', 'orlando magic'),
('Philadelphia 76ers', 'Leste', 'philadelphia 76ers'),
('Toronto Raptors', 'Leste', 'toronto raptors'),
('Washington Wizards', 'Leste', 'washington wizards');

/* OESTE */

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES
('Dallas Mavericks', 'Oeste', 'dallas mavericks'),
('Denver Nuggets', 'Oeste', 'denver nuggets'),
('Golden State Warriors', 'Oeste', 'golden state warriors'),
('Houston Rockets', 'Oeste', 'houston rockets'),
('Los Angeles Clippers', 'Oeste', 'los angeles clippers'),
('Los Angeles Lakers', 'Oeste', 'los angeles lakers'),
('Memphis Grizzlies', 'Oeste', 'memphis grizzlies'),
('Minnesota Timberwolves', 'Oeste', 'minnesota timberwolves'),
('New Orleans Pelicans', 'Oeste', 'new orleans pelicans'),
('Oklahoma City Thunder', 'Oeste', 'oklahoma city thunder'),
('Phoenix Suns', 'Oeste', 'phoenix suns'),
('Portland Trail Blazers', 'Oeste', 'portland trail blazers'),
('Sacramento Kings', 'Oeste', 'sacramento kings'),
('San Antonio Spurs', 'Oeste', 'san antonio spurs'),
('Utah Jazz', 'Oeste', 'utah jazz');


SELECT * FROM usuario;
SELECT * FROM time;
SELECT * FROM jogador;
SELECT * FROM favorito;
SELECT * FROM resultadoQuiz;


SELECT 
	resultadoQuiz.id,
	usuario.nome,
	resultadoQuiz.jogador_resultado,
	resultadoQuiz.porcentagem_curry,
	resultadoQuiz.porcentagem_lebron,
	resultadoQuiz.porcentagem_magic,
	resultadoQuiz.porcentagem_shaq
FROM resultadoQuiz
JOIN usuario
	ON resultadoQuiz.fk_usuario = usuario.id;


SELECT
	usuario.nome AS usuario,
	jogador.nome AS jogador_favorito,
	jogador.posicao
FROM favorito
JOIN usuario
	ON favorito.fk_usuario = usuario.id
JOIN jogador
	ON favorito.fk_jogador = jogador.id;


SELECT
	jogador.nome,
	COUNT(favorito.id) AS total_favoritos
FROM favorito
JOIN jogador
	ON favorito.fk_jogador = jogador.id
GROUP BY jogador.nome
ORDER BY total_favoritos DESC;


SELECT
	usuario.nome AS usuario,
	time.nome AS time,
	jogador.nome AS jogador
FROM favorito
JOIN usuario
	ON favorito.fk_usuario = usuario.id
JOIN jogador
	ON favorito.fk_jogador = jogador.id
JOIN time
	ON jogador.fk_time = time.id;