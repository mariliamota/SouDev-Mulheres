CREATE TABLE tb_banner (
    id INT AUTO_INCREMENT PRIMARY KEY,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at DATETIME NULL,
    titulo VARCHAR (50) NOT NULL,
    descricao VARCHAR (255),
    imagem VARCHAR (255) NOT NULL
);