create database projetoIndividual;
use projetoIndividual;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
);

create table quiz(
idQuiz int primary key auto_increment,
nome varchar(45)
) auto_increment = 1000;

insert into quiz values
(null, 'quizLoL'),
(null, 'quizR6');

create table formulario(
idFormulario int primary key auto_increment,
nome varchar(45),
idade int,
genero varchar(20),
jogou char(3),
qtdJogou int,
jogoFav varchar(45),
cenarioCompetitivo char(3),
acompanha char(3),
qualOrgTorce varchar(45),
fkUsuario int unique,
constraint foreign key(fkUsuario) references usuario(idUsuario),
constraint check(jogou in('sim','nao')), 
constraint check(cenarioCompetitivo in('sim','nao')),
constraint check(acompanha in('sim','nao'))
) auto_increment = 1000000;

create table tentativa(
idTentativa int auto_increment,
fkUsuario int,
fkQuiz int,
primary key(idTentativa, fkUsuario, fkQuiz),
constraint foreign key (fkUsuario) references usuario(idUsuario),
constraint foreign key (fkQuiz) references quiz(idQuiz),
numeroTentativa int
);

create table pontuacao(
idPontuacao int auto_increment,
fkQuiz int,
fkUsuario int,
fkTentativa int,
primary key(idPontuacao, fkQuiz, fkUsuario, fkTentativa),
pontuacao int
);