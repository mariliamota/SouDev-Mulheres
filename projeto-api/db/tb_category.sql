CREATE TABLE tb_category (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (30),
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at DATETIME NULL
);

INSERT INTO tb_category (nome)
VALUES ("Tênis");
INSERT INTO tb_category (nome)
VALUES ("Calças");
INSERT INTO tb_category (nome)
VALUES ("Headphones");

SELECT * FROM tb_category;