-- Para fazer atualização de um registro (nunca esquecer de usar o WHERE) --
UPDATE tb_aluno SET
    matricula='1234567'
WHERE
    id='8'; --(a pessoa q tiver o id=8 receberá a nova matricula 1234567)--
____________________________________________________________________________________________________
-- | Antes de fazer um     | --  
-- | delete fazer um       | --
-- | select                | --
-- |_______________________| --
____________________________________________________________________________________________________
-- criando uma nova tabela --
CREATE TABLE tb_escola (
    id INT  AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR(100)
);
____________________________________________________________________________________________________
-- inserindo dados na tabela --
INSERT INTO tb_escola
    (nome, endereco)
VALUES
    ('Digital College Sul', 'Av. Washington Soares, 3663 - Edson Queiroz');
____________________________________________________________________________________________________
-- modificar as escolas do aluno --
UPDATE tb_aluno SET
escola_id=3 -- quem tem a escola igual 3 --
WHERE
escola_id=30; -- terá uma nova escola equivalente a 30 --
--outra forma--
UPDATE tb_aluno SET 
escola_id=1
BETWEEN 20 AND 21 -- o between é tudo entre 20 e 21 --
--segunda forma--
UPDATE tb_aluno SET
escola_id=2
WHERE
escola_id=12 OR escola_id=13 OR escola_id=17
____________________________________________________________________________________________________
-- relacionamentos --
SELECT -- selecione
    tb_aluno.nome as aluno, -- o as nesse caso é sinonimo de recebe
    tb_escola.nome as escola -- o as nesse caso é sinonimo de recebe
FROM -- para
    tb_aluno INNER JOIN tb_escola
ON -- onde for igual
    tb_aluno.escola_id = tb_escola.id
LIMIT 10;

SELECT 
    tb_aluno.id, tb_aluno.nome, tb_escola.nome
FROM
    tb_aluno
INNER JOIN tb_escola ON tb_aluno.escola_id = tb_escola.id LIMIT 10;
____________________________________________________________________________________________________
