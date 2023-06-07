CREATE TABLE `gps_var` (
  `id_gps` int,
  `regiao` varchar(255),
  `estado` varchar(255),
  `cidade` varchar(255),
  `cep` int
);

CREATE TABLE `localidade` (
  `id_localidade` int PRIMARY KEY,
  `regiao` varchar(255),
  `estado` varchar(255),
  `cidade` varchar(255),
  `rua` varchar(255),
  `cep` int
);

CREATE TABLE `experiencia` (
  `id_exp` int PRIMARY KEY,
  `nv_exp` varchar(255)
);

CREATE TABLE `pedreiro` (
  `id_ped` int PRIMARY KEY,
  `nv_ped` varchar(255)
);

CREATE TABLE `funcao` (
  `id_funcao` int PRIMARY KEY,
  `tp_func` varchar(255)
);

CREATE TABLE `habilidades` (
  `id_habiladades` int,
  `tipo_habilidades` varchar(255)
);

CREATE TABLE `comentarios` (
  `id_comentarios` int,
  `autor_comentario` varchar(255),
  `comentario` varchar(255),
  `dt_comentario` varchar(255)
);

CREATE TABLE `usuario` (
  `id_usuario` int PRIMARY KEY,
  `nome` varchar(255),
  `sobrenome` varchar(255),
  `email` varchar(255),
  `cpf` bigint(20),
  `dt_nascimento` date,
  `id_habiladades` int,
  `id_funcao` int,
  `id_ped` int,
  `id_exp` int,
  `id_localidade` int,
  `id_projetos` int
);

CREATE TABLE `anuncio_pedreiro` (
  `id_anuncio_pedreiro` int,
  `nome` varchar(255),
  `interesse_obras` varchar(255),
  `projeto_exemplo` int,
  `id_usuario` int,
  `id_comentarios` int
);

CREATE TABLE `termos` (
  `id_termos` int,
  `descricao_termo` varchar(255)
);

CREATE TABLE `anuncio_ajudante` (
  `id_anucio_ajudante` int,
  `id_usuario` int,
  `nome` varchar(255),
  `interesse_obras` varchar(255),
  `preco_por_dia` varchar(255),
  `estrelas` int,
  `id_termos` int,
  `id_comentarios` int
);

CREATE TABLE `tipo_projetos` (
  `id_tp_projetos` int,
  `tipo_projeto` varchar(255)
);

CREATE TABLE `tamanho_obra` (
  `id_obra` int,
  `obra_escopo` varchar(255)
);

CREATE TABLE `projetos` (
  `id_projetos` int PRIMARY KEY,
  `titulo_projeto` varchar(255),
  `dt_projeto` date,
  `desc_projetos` varchar(255),
  `status_projetos` bolean,
  `dt_publicacao` date,
  `curtidas` int,
  `fotos` varchar(255),
  `id_obra` int,
  `id_tp_projetos` int,
  `id_comentarios` int
);

CREATE TABLE `tipo_parceiros` (
  `id_tp_parceiros` int,
  `tipo_parceiro` varchar(255)
);

CREATE TABLE `parceiros` (
  `id_parceiros` int,
  `descricao` int,
  `curtidas` int,
  `imagem` varchar(255),
  `nome_parceiro` varchar(255),
  `nome_item` varchar(255),
  `endereco` varchar(255),
  `id_tp_parceiros` int,
  `id_gps` int
);

ALTER TABLE `experiencia` ADD FOREIGN KEY (`id_exp`) REFERENCES `usuario` (`id_exp`);

CREATE TABLE `usuario_habilidades` (
  `usuario_id_habiladades` int,
  `habilidades_id_habiladades` int,
  PRIMARY KEY (`usuario_id_habiladades`, `habilidades_id_habiladades`)
);

ALTER TABLE `usuario_habilidades` ADD FOREIGN KEY (`usuario_id_habiladades`) REFERENCES `usuario` (`id_habiladades`);

ALTER TABLE `usuario_habilidades` ADD FOREIGN KEY (`habilidades_id_habiladades`) REFERENCES `habilidades` (`id_habiladades`);


ALTER TABLE `pedreiro` ADD FOREIGN KEY (`id_ped`) REFERENCES `usuario` (`id_ped`);

ALTER TABLE `funcao` ADD FOREIGN KEY (`id_funcao`) REFERENCES `usuario` (`id_funcao`);

ALTER TABLE `localidade` ADD FOREIGN KEY (`id_localidade`) REFERENCES `usuario` (`id_localidade`);

ALTER TABLE `anuncio_pedreiro` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

ALTER TABLE `anuncio_ajudante` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

ALTER TABLE `tamanho_obra` ADD FOREIGN KEY (`id_obra`) REFERENCES `projetos` (`id_obra`);

ALTER TABLE `tipo_projetos` ADD FOREIGN KEY (`id_tp_projetos`) REFERENCES `projetos` (`id_tp_projetos`);

ALTER TABLE `comentarios` ADD FOREIGN KEY (`id_comentarios`) REFERENCES `projetos` (`id_comentarios`);

ALTER TABLE `tipo_parceiros` ADD FOREIGN KEY (`id_tp_parceiros`) REFERENCES `parceiros` (`id_tp_parceiros`);

ALTER TABLE `projetos` ADD FOREIGN KEY (`id_projetos`) REFERENCES `usuario` (`id_projetos`);

ALTER TABLE `gps_var` ADD FOREIGN KEY (`id_gps`) REFERENCES `parceiros` (`id_gps`);

ALTER TABLE `termos` ADD FOREIGN KEY (`id_termos`) REFERENCES `anuncio_ajudante` (`id_termos`);

ALTER TABLE `comentarios` ADD FOREIGN KEY (`id_comentarios`) REFERENCES `anuncio_ajudante` (`id_comentarios`);

ALTER TABLE `comentarios` ADD FOREIGN KEY (`id_comentarios`) REFERENCES `anuncio_pedreiro` (`id_comentarios`);
