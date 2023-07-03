CREATE DATABASE IF NOT EXISTS murumuru_database;
USE murumuru_database;

CREATE TABLE IF NOT EXISTS `tipo_projetos` (
  `id_tp_projetos` int PRIMARY KEY auto_increment,
  `tipo_projeto` varchar(255)
);

CREATE TABLE IF NOT EXISTS `tamanho_obra` (
  `id_obra` int PRIMARY KEY auto_increment,
  `obra_escopo` varchar(255)
);

CREATE TABLE IF NOT EXISTS `comentarios` (
  `id_comentarios` int PRIMARY KEY auto_increment,
  `autor_comentario` varchar(255),
  `comentario` varchar(255),
  `dt_comentario` varchar(255)
);

CREATE TABLE IF NOT EXISTS `projetos` (
  `id_projetos` int PRIMARY KEY auto_increment,
  `titulo_projeto` varchar(255),
  `dt_projeto` date,
  `desc_projetos` varchar(255),
  `status_projetos` boolean,
  `dt_publicacao` date,
  `curtidas` int,
  `fotos` varchar(255),
  `id_obra` int,
  `id_tp_projetos` int,
  `id_comentarios` int,
  FOREIGN KEY (`id_obra`) REFERENCES `tamanho_obra` (`id_obra`),
  FOREIGN KEY (`id_tp_projetos`) REFERENCES `tipo_projetos` (`id_tp_projetos`),
  FOREIGN KEY (`id_comentarios`) REFERENCES `comentarios` (`id_comentarios`)
);

CREATE TABLE IF NOT EXISTS `localidade` (
  `id_localidade` int PRIMARY KEY auto_increment,
  `regiao` varchar(255),
  `estado` varchar(255),
  `cidade` varchar(255),
  `rua` varchar(255),
  `cep` int
);

CREATE TABLE IF NOT EXISTS `experiencia` (
  `id_exp` int PRIMARY KEY auto_increment,
  `nv_exp` varchar(255)
);

CREATE TABLE IF NOT EXISTS `pedreiro` (
  `id_ped` int PRIMARY KEY auto_increment,
  `nv_ped` varchar(255)
);

CREATE TABLE IF NOT EXISTS `funcao` (
  `id_funcao` int PRIMARY KEY AUTO_INCREMENT,
  `tp_func` varchar(255)
);

CREATE TABLE IF NOT EXISTS `habilidades` (
  `id_habilidades` int PRIMARY KEY AUTO_INCREMENT,
  `tipo_habilidades` varchar(255)
);

CREATE TABLE IF NOT EXISTS `termos` (
  `id_termos` int PRIMARY KEY AUTO_INCREMENT,
  `descricao_termo` varchar(255)
);

CREATE TABLE IF NOT EXISTS `anuncio_ajudante` (
  `id_anucio_ajudante` int,
  `id_usuario` int,
  `nome` varchar(255),
  `interesse_obras` varchar(255),
  `preco_por_dia` varchar(255),
  `estrelas` int,
  `id_termos` int,
  `id_comentarios` int,
  FOREIGN KEY (`id_termos`) REFERENCES `termos` (`id_termos`),
  FOREIGN KEY (`id_comentarios`) REFERENCES `comentarios` (`id_comentarios`)
);

CREATE TABLE IF NOT EXISTS `anuncio_pedreiro` (
  `id_anuncio_pedreiro` int PRIMARY KEY AUTO_INCREMENT,
  `nome` varchar(255),
  `interesse_obras` varchar(255),
  `projeto_exemplo` int,
  `id_usuario` int,
  `id_comentarios` int,
  FOREIGN KEY (`id_comentarios`) REFERENCES `comentarios` (`id_comentarios`)
);

CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int PRIMARY KEY AUTO_INCREMENT,
  `nome` varchar(255),
  `sobrenome` varchar(255),
  `email` varchar(255),
  `cpf` bigint,
  `dt_nascimento` date,
  `id_habilidades` int,
  `id_funcao` int,
  `id_ped` int,
  `id_exp` int,
  `id_localidade` int,
  `id_projetos` int,
  FOREIGN KEY (`id_habilidades`) REFERENCES `habilidades` (`id_habilidades`),
  FOREIGN KEY (`id_funcao`) REFERENCES `funcao` (`id_funcao`),
  FOREIGN KEY (`id_ped`) REFERENCES `pedreiro` (`id_ped`),
  FOREIGN KEY (`id_exp`) REFERENCES `experiencia` (`id_exp`),
  FOREIGN KEY (`id_localidade`) REFERENCES `localidade` (`id_localidade`),
  FOREIGN KEY (`id_projetos`) REFERENCES `projetos` (`id_projetos`)
);

INSERT INTO `usuario` (`nome`, `sobrenome`, `email`, `cpf`, `dt_nascimento`, `id_habilidades`, `id_funcao`, `id_ped`, `id_exp`, `id_localidade`, `id_projetos`) 
VALUES ('João', 'Silva', 'joao@example.com', 12345678901, '2000-01-01', null, null, null, null, null, null);

INSERT INTO `usuario` (`nome`, `sobrenome`, `email`, `cpf`, `dt_nascimento`, `id_habilidades`, `id_funcao`, `id_ped`, `id_exp`, `id_localidade`, `id_projetos`) 
VALUES ('Maria', 'Santos', 'maria@example.com', 9876543210, '1995-05-10', null, null, null, null, null, null);

CREATE TABLE IF NOT EXISTS `tipo_parceiros` (
  `id_tp_parceiros` int PRIMARY KEY auto_increment,
  `tipo_parceiro` varchar(255)
);

CREATE TABLE IF NOT EXISTS `gps_var` (
  `id_gps` int PRIMARY KEY auto_increment,
  `regiao` varchar(255),
  `estado` varchar(255),
  `cidade` varchar(255),
  `cep` int
);

CREATE TABLE IF NOT EXISTS `parceiros` (
  `id_parceiros` int PRIMARY KEY auto_increment,
  `descricao` int,
  `curtidas` int,
  `imagem` varchar(255),
  `nome_parceiro` varchar(255),
  `nome_item` varchar(255),
  `endereco` varchar(255),
  `id_tp_parceiros` int,
  `id_gps` int,
  FOREIGN KEY (`id_gps`) REFERENCES `gps_var` (`id_gps`),
  FOREIGN KEY (`id_tp_parceiros`) REFERENCES `tipo_parceiros` (`id_tp_parceiros`)
);