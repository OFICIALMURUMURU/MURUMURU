# Murumuru Database


<br/>
<p align="center">
  <img src="mysql.png" alt="Imagem" width="80px" height="80px"/>
  &nbsp;&nbsp;&nbsp;
  <img src="4.png" alt="Imagem" width="180px" height="180px"/>
  &nbsp;&nbsp;&nbsp;
  <img src="Proa.png" alt="Imagem" style="border-radius: 50%;" width="80px" height="80px"/>
</p>
<br/>
<p align="center">
Trabalho realizado no @Instituto Proa
</p>
Este repositório contém o código para a criação do banco de dados "Murumuru Database", que foi desenvolvido para armazenar informações relacionadas a projetos de obras, usuários, anúncios de ajudantes, anúncios de pedreiros e parceiros.

## Tabelas

1. Tabela `tipo_projetos`:
   - Descrição: Armazena os diferentes tipos de projetos.
   - Colunas:
     - `id_tp_projetos`: Identificador único para cada tipo de projeto (chave primária).
     - `tipo_projeto`: Descrição do tipo de projeto.

2. Tabela `tamanho_obra`:
   - Descrição: Armazena os diferentes tamanhos de obra.
   - Colunas:
     - `id_obra`: Identificador único para cada tamanho de obra (chave primária).
     - `obra_escopo`: Descrição do escopo da obra.

3. Tabela `comentarios`:
   - Descrição: Armazena os comentários relacionados aos projetos.
   - Colunas:
     - `id_comentarios`: Identificador único para cada comentário (chave primária).
     - `autor_comentario`: Autor do comentário.
     - `comentario`: Conteúdo do comentário.
     - `dt_comentario`: Data do comentário.

4. Tabela `projetos`:
   - Descrição: Armazena informações sobre os projetos de obras.
   - Colunas:
     - `id_projetos`: Identificador único para cada projeto (chave primária).
     - `titulo_projeto`: Título do projeto.
     - `dt_projeto`: Data do projeto.
     - `desc_projetos`: Descrição do projeto.
     - `status_projetos`: Status do projeto (booleano).
     - `dt_publicacao`: Data de publicação do projeto.
     - `curtidas`: Número de curtidas do projeto.
     - `fotos`: Caminho das fotos relacionadas ao projeto.
     - `id_obra`: ID do tamanho da obra associado (chave estrangeira referenciando `tamanho_obra`).
     - `id_tp_projetos`: ID do tipo de projeto associado (chave estrangeira referenciando `tipo_projetos`).
     - `id_comentarios`: ID do comentário relacionado (chave estrangeira referenciando `comentarios`).

5. Tabela `localidade`:
   - Descrição: Armazena informações sobre as localidades.
   - Colunas:
     - `id_localidade`: Identificador único para cada localidade (chave primária).
     - `regiao`: Nome da região.
     - `estado`: Nome do estado.
     - `cidade`: Nome da cidade.
     - `rua`: Nome da rua.
     - `cep`: CEP (Código de Endereçamento Postal) da localidade.

6. Tabela `experiencia`:
   - Descrição: Armazena as diferentes experiências relacionadas aos usuários.
   - Colunas:
     - `id_exp`: Identificador único para cada experiência (chave primária).
     - `nv_exp`: Descrição da experiência.

7. Tabela `pedreiro`:
   - Descrição: Armazena as diferentes categorias de pedreiros.
   - Colunas:
     - `id_ped`: Identificador único para cada categoria de pedreiro (chave primária).
     - `nv_ped`: Descrição da categoria.

8. Tabela `funcao`:
   - Descrição: Armazena as diferentes funções relacionadas aos usuários.
   - Colunas:
     - `id_funcao`: Identificador único para cada função (chave primária).
     - `tp_func`: Descrição da função.

9. Tabela `habilidades`:
   - Descrição: Armazena as diferentes habilidades relacionadas aos usuários.
   - Colunas:
     - `id_habilidades`: Identificador único para cada habilidade (chave primária).
     - `tipo_habilidades`: Descrição da habilidade.

10. Tabela `termos`:
    - Descrição: Armazena os termos relacionados aos anúncios de ajudantes.
    - Colunas:
      - `id_termos`: Identificador único para cada termo (chave primária).
      - `descricao_termo`: Descrição do termo.

11. Tabela `anuncio_ajudante`:
    - Descrição: Armazena informações sobre os anúncios de ajudantes.
    - Colunas:
      - `id_anucio_ajudante`: Identificador do anúncio de ajudante.
      - `id_usuario`: ID do usuário associado (chave estrangeira referenciando `usuario`).
      - `nome`: Nome do ajudante.
      - `interesse_obras`: Interesses em obras.
      - `preco_por_dia`: Preço por dia do ajudante.
      - `estrelas`: Número de estrelas do ajudante.
      - `id_termos`: ID do termo associado (chave estrangeira referenciando `termos`).
      - `id_comentarios`: ID do comentário relacionado (chave estrangeira referenciando `comentarios`).

12. Tabela `anuncio_pedreiro`:
    - Descrição: Armazena informações sobre os anúncios de pedreiros.
    - Colunas:
      - `id_anuncio_pedreiro`: Identificador único para cada anúncio de pedreiro (chave primária).
      - `nome`: Nome do pedreiro.
      - `interesse_obras`: Interesses em obras.
      - `projeto_exemplo`: ID do projeto exemplo relacionado.
      - `id_usuario`: ID do usuário associado (chave estrangeira referenciando `usuario`).
      - `id_comentarios`: ID do comentário relacionado (chave estrangeira referenciando `comentarios`).

13. Tabela `usuario`:
    - Descrição: Armazena informações sobre os usuários.
    - Colunas:
      - `id_usuario`: Identificador único para cada usuário (chave primária).
      - `nome`: Nome do usuário.
      - `sobrenome`: Sobrenome do usuário.
      - `email`: Endereço de e-mail do usuário.
      - `cpf`: CPF (Cadastro de Pessoa Física) do usuário.
      - `dt_nascimento`: Data de nascimento do usuário.
      - `id_habilidades`: ID da habilidade associada (chave estrangeira referenciando `habilidades`).
      - `id_funcao`: ID da função associada (chave estrangeira referenciando `funcao`).
      - `id_ped`: ID da categoria de pedreiro associada (chave estrangeira referenciando `pedreiro`).
      - `id_exp`: ID da experiência associada (chave estrangeira referenciando `experiencia`).
      - `id_localidade`: ID da localidade associada (chave estrangeira referenciando `localidade`).
      - `id_projetos`: ID do projeto associado (chave estrangeira referenciando `projetos`).

14. Tabela `tipo_parceiros`:
    - Descrição: Armazena os diferentes tipos de parceiros.
    - Colunas:
      - `id_tp_parceiros`: Identificador único para cada tipo de parceiro (chave primária).
      - `tipo_parceiro`: Descrição do tipo de parceiro.

15. Tabela `gps_var`:
    - Descrição: Armazena informações de GPS relacionadas às localidades.
    - Colunas:
      - `id_gps`: Identificador único para cada localidade do GPS (chave primária).
      - `regiao`: Nome da região.
      - `estado`: Nome do estado.
      - `cidade`: Nome da cidade.
      - `cep`: CEP (Código de Endereçamento Postal) da localidade.

16. Tabela `parceiros`:
    - Descrição: Armazena informações sobre os parceiros.
    - Colunas:
      - `id_parceiros`: Identificador único para cada parceiro (chave primária).
      - `descricao`: Descrição do parceiro.
      - `curtidas`: Número de curtidas do parceiro.
      - `imagem`: Caminho da imagem do parceiro.
      - `nome_parceiro`: Nome do parceiro.
      - `nome_item`: Nome do item relacionado ao parceiro.
      - `endereco`: Endereço do parceiro.
      - `id_tp_parceiros`: ID do tipo de parceiro associado (chave estrangeira referenciando `tipo_parceiros`).
      - `id_gps`: ID do GPS associado (chave estrangeira referenciando `gps_var`).

## Como utilizar

1. Faça o download deste repositório.
2. Execute os comandos SQL fornecidos no arquivo `murumuru_database.sql` para criar o banco de dados e as tabelas.
3. Utilize os comandos SQL para inserir dados nas tabelas de acordo com suas necessidades.
4. Utilize os comandos SQL para executar consultas e manipular os dados no banco de dados.

## Contribuição Projeto Demoday feito em conjunto da Equipe:
MuruMuru = [LinkeTree](https://linktr.ee/MURUMURUoficial?utm_source=linktree_profile_share&ltsid=407d3eca-9e56-4aa5-a840-9270f14de5de)
