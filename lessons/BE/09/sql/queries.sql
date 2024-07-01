-- Päringud

-- Kasutajad

SELECT * FROM users WHERE deleted_at IS NULL;

-- Kasutaja id alusel

SELECT * FROM users WHERE id = 1;

-- Kasutaja emaili alusel

SELECT * FROM users WHERE email = 'admin@admin.ee' AND deleted_at IS NULL;

-- Kasutaja rolli alusel

SELECT * FROM users WHERE role = 'admin' AND deleted_at IS NULL;

-- Kasutaja kustutamine

UPDATE users SET deleted_at = CURRENT_TIMESTAMP WHERE id = 2;

-- Kasutaja uuendamine

UPDATE users SET firstName = 'John', lastName = 'Doe' WHERE id = 2;

-- Kasutaja taastamine

UPDATE users SET deleted_at = NULL WHERE id = 2;


---

-- TODOS

SELECT * FROM todos WHERE deleted_at IS NULL;

-- TODO id alusel

SELECT * FROM todos WHERE id = 1;

-- TODO kasutaja id alusel

SELECT * FROM todos WHERE user_id = 1 AND deleted_at IS NULL;

-- TODO tehtud ülesanded

SELECT * FROM todos WHERE is_done = 1 AND deleted_at IS NULL;

-- TODO kustutamine

UPDATE todos SET deleted_at = CURRENT_TIMESTAMP WHERE id = 2;

-- TODO koos kasutajaga (INNER JOIN)

SELECT users.firstName, users.lastName, todos.title, todos.description, todos.is_done FROM todos
  INNER JOIN users ON todos.user_id = users.id
WHERE todos.deleted_at IS NULL;

-- TODO koos kasutajaga (LEFT JOIN)

SELECT users.firstName, users.lastName, todos.title, todos.description, todos.is_done FROM todos
  LEFT JOIN users ON todos.user_id = users.id
WHERE todos.deleted_at IS NULL;

-- TODO koos kasutajaga (RIGHT JOIN)

SELECT users.firstName, users.lastName, todos.title, todos.description, todos.is_done FROM todos
  RIGHT JOIN users ON todos.user_id = users.id
WHERE todos.deleted_at IS NULL;

