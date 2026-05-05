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
	FOREIGN KEY (fk_time) REFERENCES time(id)
);


CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE jogador (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	posicao VARCHAR(20),
	pontos_media DECIMAL(5,2),
	assistencias_media DECIMAL(5,2),
	rebotes_media DECIMAL(5,2),
	fk_time INT,
	FOREIGN KEY (fk_time) REFERENCES time(id)
);

CREATE TABLE respostaQuiz (
	id INT PRIMARY KEY AUTO_INCREMENT,
	pergunta VARCHAR(200),
	resposta VARCHAR(100),
	jogador_relacionado VARCHAR(50),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Atlanta Hawks', 'Leste', 'atlanta hawks');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Boston Celtics', 'Leste', 'boston celtics');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Brooklyn Nets', 'Leste', 'brooklyn nets');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Charlotte Hornets', 'Leste', 'charlotte hornets');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Chicago Bulls', 'Leste', 'chicago bulls');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Cleveland Cavaliers', 'Leste', 'cleveland cavaliers');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Detroit Pistons', 'Leste', 'detroit pistons');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Indiana Pacers', 'Leste', 'indiana pacers');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Miami Heat', 'Leste', 'miami heat');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Milwaukee Bucks', 'Leste', 'milwaukee bucks');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('New York Knicks', 'Leste', 'new york knicks');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Orlando Magic', 'Leste', 'orlando magic');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Philadelphia 76ers', 'Leste', 'philadelphia 76ers');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Toronto Raptors', 'Leste', 'toronto raptors');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Washington Wizards', 'Leste', 'washington wizards');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Dallas Mavericks', 'Oeste', 'dallas mavericks');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Denver Nuggets', 'Oeste', 'denver nuggets');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Golden State Warriors', 'Oeste', 'golden state warriors');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Houston Rockets', 'Oeste', 'houston rockets');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Los Angeles Clippers', 'Oeste', 'los angeles clippers');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Los Angeles Lakers', 'Oeste', 'los angeles lakers');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Memphis Grizzlies', 'Oeste', 'memphis grizzlies');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Minnesota Timberwolves', 'Oeste', 'minnesota timberwolves');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('New Orleans Pelicans', 'Oeste', 'new orleans pelicans');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Oklahoma City Thunder', 'Oeste', 'oklahoma city thunder');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Phoenix Suns', 'Oeste', 'phoenix suns');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Portland Trail Blazers', 'Oeste', 'portland trail blazers');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Sacramento Kings', 'Oeste', 'sacramento kings');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('San Antonio Spurs', 'Oeste', 'san antonio spurs');

INSERT INTO time (nome, conferencia, codigo_ativacao)
VALUES ('Utah Jazz', 'Oeste', 'utah jazz');