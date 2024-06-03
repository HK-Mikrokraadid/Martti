-- Kasutajate tabeli loomine

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabeli muutmine - veeru lisamine

ALTER TABLE users ADD COLUMN password VARCHAR(255);

-- Tabeli kustutamine

-- DROP TABLE users;

-- Loome tegevuste tabel

CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(50),
    body TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Andmete sisestamine tabelisse

INSERT INTO users (email, password) VALUES ('jane@doe.ee', 'jane');
INSERT INTO users (email, password) VALUES ('john@doe.ee', 'john');
INSERT INTO users (email, password) VALUES ('mati@maasikas.ee', 'mati');


-- Andmete sisestamine tegevuste tabelisse

INSERT INTO todos (user_id, title, body) VALUES (3, 'Tegevus 1', 'Osta piima');
INSERT INTO todos (user_id, title, body) VALUES (1212, 'Tegevus 1', 'Osta piima');

-- Andmete pärimine

SELECT * FROM todos;

-- Tagasta kõik kirjed kõikide veergudega
SELECT * FROM users;

-- Tagasta kõikide kasutajate id ja email
SELECT id, email FROM users;

-- Tagasta kasutaja andmed e-maili alusel
SELECT * FROM users WHERE email = 'jane@doe.ee';

-- Tagasta kasutaja email ja parool id alusel
SELECT email, password FROM users WHERE id = 2;

-- Andmete muutmine
UPDATE users SET password = 'Jane' WHERE id = 1;

-- Andmete muutmine mitut parameetrit kontrollides
UPDATE users SET password = 'Jane' WHERE id = 1 AND email = 'jane@doe.ee';

-- Andmete kustutamine (nii ei maksa teha, sest kustutatakse kõik ära)
DELETE FROM users;

-- Andmete kustutamine id alusel
DELETE FROM users WHERE id = 4 AND email = 'john@doe.ee';
