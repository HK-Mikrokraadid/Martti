DROP SCHEMA todos;

CREATE SCHEMA todos;

USE todos;

-- Users tabel

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(10) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL
);

-- TODOS tabel

CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    is_done TINYINT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL
);

-- Users andmed

INSERT INTO users (firstName, lastName, email, password, role) VALUES
('Admin', 'Admin', 'admin@admin.ee', '$2b$10$YtX0jAxzwouT37mydNHwjOs5.qzc.s5lrMMYrOHZgVosal1bYpXBC', 'admin'),
('Admin', 'Admin', 'user@user.ee', '$2b$10$J7xTk5m97yK4agISAYBTxe2VVVVM6rP7kEhl679IW8/OBYYRCl/sq', 'user');


-- TODOS andmed

INSERT INTO todos (user_id, title, description, is_done) VALUES
(1, 'Buy groceries', 'Milk, Bread, Butter, and Eggs', 0),
(1, 'Fix the leaking faucet', 'Replace the old faucet with a new one', 0),
(1, 'Read a book', 'Finish reading "To Kill a Mockingbird"', 0),
(1, 'Pay electricity bill', 'Pay the bill online before the due date', 1),
(1, 'Call mom', 'Weekly call to check in', 1),
(1, 'Plan weekend trip', 'Book hotel and plan itinerary', 0),
(1, 'Clean the garage', 'Organize and clean the garage', 0),
(1, 'Complete project report', 'Finish and submit the project report', 0),
(1, 'Attend yoga class', 'Join the evening yoga session', 1),
(1, 'Update resume', 'Add latest project experience to resume', 0),
(1, 'Prepare dinner', 'Cook pasta and salad for dinner', 0),
(1, 'Water the plants', 'Water all the indoor plants', 1),
(1, 'Finish coding assignment', 'Complete the JavaScript coding task', 0),
(1, 'Go for a run', 'Run 5 kilometers in the morning', 1),
(1, 'Write blog post', 'Write a new blog post about React hooks', 0),
(1, 'Organize desk', 'Tidy up and organize the office desk', 0),
(1, 'Buy birthday gift', 'Get a present for Johns birthday', 0),
(1, 'Schedule doctor appointment', 'Book an appointment with the dentist', 1),
(1, 'Attend meeting', 'Join the team meeting on Zoom', 0),
(1, 'Check emails', 'Respond to all pending emails', 1),
(1, 'Refill water bottle', 'Ensure water bottle is filled and ready', 0),
(1, 'Watch a movie', 'Watch the new Marvel movie on Netflix', 0),
(1, 'Order takeout', 'Order pizza for dinner from the local pizzeria', 1),
(1, 'Set up new phone', 'Transfer data to the new smartphone', 0),
(1, 'Plan work schedule', 'Organize tasks for the upcoming week', 0),
(2, 'Clean kitchen', 'Wipe down counters and mop the floor', 0),
(2, 'Take dog for a walk', 'Walk the dog around the park', 1),
(2, 'Read news articles', 'Catch up on the latest news online', 1),
(2, 'Buy groceries', 'Pick up vegetables and fruits from the store', 0),
(2, 'Fix bike tire', 'Repair the flat tire on the bike', 0),
(2, 'Prepare lunch', 'Make a sandwich and salad for lunch', 1),
(2, 'Study for exams', 'Review notes and practice past papers', 0),
(2, 'Schedule car service', 'Book a service for the car next week', 0),
(2, 'Write a poem', 'Compose a new poem about nature', 0),
(2, 'Visit the museum', 'Explore the new art exhibition', 0),
(2, 'Exercise at the gym', 'Complete the workout routine at the gym', 1),
(2, 'Plan budget', 'Organize expenses and set a budget for the month', 0),
(2, 'Cook breakfast', 'Prepare pancakes and coffee for breakfast', 0),
(2, 'Call grandma', 'Have a chat with grandma over the phone', 1),
(2, 'Paint the fence', 'Repaint the backyard fence', 0),
(2, 'Attend webinar', 'Join the online seminar about web development', 0),
(2, 'Meditate', 'Spend 20 minutes meditating in the morning', 1),
(2, 'Refill prescriptions', 'Order medication refills online', 0),
(2, 'Buy new shoes', 'Purchase a pair of running shoes', 0),
(2, 'Plan weekend getaway', 'Arrange a short trip to the countryside', 0),
(2, 'Declutter closet', 'Sort and organize clothes in the closet', 0),
(2, 'Volunteer at shelter', 'Help out at the local animal shelter', 0),
(2, 'Host a dinner party', 'Invite friends over for a dinner party', 0);


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

UPDATE users SET firstName = 'John', lastName = 'Doe' WHERE id = 1;

-- Kasutaja taastamine

UPDATE users SET deleted_at = NULL WHERE id = 2;




-- BLOG

DROP SCHEMA blog;

CREATE SCHEMA blog;

USE blog;

