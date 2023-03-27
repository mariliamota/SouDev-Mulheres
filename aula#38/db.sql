-- Para listar os bancos de dados --
SHOW DATABASES;

-- Para criar um banco de dados --
CREATE DATABASE db_escola_soudiva;

-- Para excluir um banco --
DROP DATABASE nome_do_banco;

-- para selecionar/entrar no banco de dados
USE nome_do_banco;

-- TABELAS --

-- Mostrar todas as tabelas do banco --
SHOW TABLES;

-- Criar uma tabela --
CREATE TABLE tb_curso (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    carga_horaria INT(4) NOT NULL,
    descricao VARCHAR(255)
);

-- Detalhar a estrutura de uma tabela --
DESC nome_da_tabela;

-- Para alterar tabela --
ALTER TABLE nome_da_tabela ....

-- Para excluir uma tabela --
DROP TABLE nome_da_tabela;

-- Tabela de Disciplina --
CREATE TABLE Disciplina (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    carga_horaria INT(4) NOT NULL,
    descricao VARCHAR(255)
);

-- Para buscar os dados de uma tabela --
-- Seleciona todas as colunas de todas as linhas/tuplas --
SELECT * FROM tb_curso;

-- Para selecionar apenas algumas colunas de todas as linhas --
SELECT nome, carga_horaria FROM tb_curso;

-- Para selecionar todas as colunas apenas de algumas linhas (filtrar) --
SELECT * FROM tb_curso WHERE  carga_horaria > 100;

-- Para selecionar um numero V de linhas --
SELECT * FROM tb_curso LIMIT 2;

-- Para contar o numero de linhas de uma tabela --
SELECT COUNT(*) FROM tb_curso;


-- Para inserir dados em uma tabela --
INSERT INTO tb_curso
    (nome, carga_horaria, descricao)
VALUES
    ('valor1', 'valor2', 'valor3');

-- Para editar os dados de uma tabela --
UPDATE tb_curso SELECT
coluna1='valor1';

-- Para excluir dados de uma tabela --
DELETE FROM tb_curso;

