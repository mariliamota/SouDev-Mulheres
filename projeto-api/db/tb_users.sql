CREATE TABLE tb_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (100) NOT NULL,
    senha VARCHAR (20),
    token VARCHAR (50) NULL
);

//para adicionar uma nova coluna na tabela
ALTER TABLE tb_users
ADD COLUMN email VARCHAR(100);

//modificando uma coluna da tabela
ALTER TABLE tb_users
MODIFY senha VARCHAR (255) NULL;

//sim foi um DELETE sem WHERE
 DELETE FROM tb_users;