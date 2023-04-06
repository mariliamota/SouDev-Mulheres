CREATE TABLE tb_clientes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

INSERT INT tb_clientes (nome) VALUES ('kelly');

CREATE TABLE tb_enderecos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    endereco VARCHAR(100) NOT NULL,
    clienteID INT,
    FOREIGN KEY (clienteID) REFERENCES tb_clientes(id)
);

INSERT INTO tb_enderecos (endereco, clienteID) VALUES ('Av Dom Luis, 123', 2);

SELECT (tb_clientes.id, tb_clientes.nome, tb_enderecos.endereco, tb_enderecos.id)
FROM tb_clientes

