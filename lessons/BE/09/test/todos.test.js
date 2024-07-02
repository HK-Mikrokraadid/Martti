const request = require('supertest');
const { describe, it } = require('mocha');
const { expect } = require('chai');
const app = require('../app');
const { setupTestDatabase } = require('../testDbSetup'); 

let userToken;
let adminToken;
const nonexistentId = 999999;

const user = {
    email: 'user@user.ee',
    password: 'user',
};

const admin = {
    email: 'admin@admin.ee',
    password: 'admin',
};

const testTodo = {
  title: 'Test Todo',
  description: 'This is a test todo',
  user_id: 2
};

let createdTodoId;

before(async () => {
    await setupTestDatabase();
    const responseUser = await request(app).post('/users/login').send(user);
    userToken = responseUser.body.token;
    const responseAdmin = await request(app).post('/users/login').send(admin);
    adminToken = responseAdmin.body.token;
});


describe('Todos endpoint', async () => {
  describe('POST /todos', () => {
    it('should create a new todo', async () => {
      const response = await request(app)
        .post('/todos')
        .send(testTodo)
        .set('Authorization', `Bearer ${userToken}`);

      expect(response.status).to.equal(201);
      expect(response.body.success).to.be.true;
      expect(response.body.message).to.equal('New todo is created');
      expect(response.body.id).to.be.a('number');
      createdTodoId = response.body.id;
    });

    it('should return 400 if title is missing', async () => {
      const response = await request(app)
        .post('/todos')
        .send({ description: 'Description without title' })
        .set('Authorization', `Bearer ${userToken}`);

      expect(response.status).to.equal(400);
      expect(response.body.success).to.be.false;
      expect(response.body.message).to.equal('Title is required');
    });
  });

  describe('GET /todos', () => {
    it('should return all todos', async () => {
      const response = await request(app)
        .get('/todos')
        .set('Authorization', `Bearer ${userToken}`);

      expect(response.status).to.equal(200);
      expect(response.body.success).to.be.true;
      expect(response.body.message).to.equal('List of all todos');
      expect(response.body.todos).to.be.an('array');
      expect(response.body.todos.length).to.be.at.least(1);
    });
  });

  describe('GET /todos/:id', () => {
    it('should return a specific todo', async () => {
      const response = await request(app)
        .get(`/todos/${createdTodoId}`)
        .set('Authorization', `Bearer ${userToken}`);

      expect(response.status).to.equal(200);
      expect(response.body.success).to.be.true;
      expect(response.body.message).to.equal(`Todo with id: ${createdTodoId}`);
      expect(response.body.todo).to.include(testTodo);
    });
    it('should return 404 if todo not found', async () => {
      const response = await request(app)
        .get(`/todos/${nonexistentId}`)
        .set('Authorization', `Bearer ${userToken}`);

      expect(response.status).to.equal(404);
      expect(response.body.success).to.be.false;
      expect(response.body.message).to.equal(`Todo with id: ${nonexistentId} does not exist`);
    });
    it('should return 403 if user is not the owner of the todo', async () => {
      const response = await request(app)
        .get('/todos/5')
        .set('Authorization', `Bearer ${userToken}`);
      expect(response.status).to.equal(403);
      expect(response.body.success).to.be.false;
      expect(response.body.message).to.equal('You are not authorized to do this operation');
    });
  });

  describe('PATCH /todos/:id', () => {
    it('should update a todo', async () => {
      const updateData = { title: 'Updated Test Todo' };
      const response = await request(app)
        .patch(`/todos/${createdTodoId}`)
        .send(updateData)
        .set('Authorization', `Bearer ${userToken}`);
      expect(response.status).to.equal(200);
      expect(response.body.success).to.be.true;
      expect(response.body.message).to.equal(`Todo with id: ${createdTodoId} updated`);

      const updatedTodo = await request(app)
        .get(`/todos/${createdTodoId}`)
        .set('Authorization', `Bearer ${userToken}`);
      expect(updatedTodo.body.todo.title).to.equal(updateData.title);
    });
    it('should return 404 if todo not found', async () => {
      const response = await request(app)
        .patch(`/todos/${nonexistentId}`)
        .send({ title: 'This should fail' })
        .set('Authorization', `Bearer ${userToken}`);
      expect(response.status).to.equal(404);
      expect(response.body.success).to.be.false;
      expect(response.body.message).to.equal(`Todo with id: ${nonexistentId} does not exist`);
    });
    it('should return 403 if user is not the owner of the todo', async () => {
      const response = await request(app)
        .patch('/todos/5')
        .send({ title: 'This should fail' })
        .set('Authorization', `Bearer ${userToken}`);
      expect(response.status).to.equal(403);
      expect(response.body.success).to.be.false;
      expect(response.body.message).to.equal('You are not authorized to do this operation');
    });
  });

  describe('DELETE /todos/:id', () => {
    it('should delete a todo', async () => {
      const response = await request(app)
        .delete(`/todos/${createdTodoId}`)
        .set('Authorization', `Bearer ${userToken}`);

      expect(response.status).to.equal(200);
      expect(response.body.success).to.be.true;
      expect(response.body.message).to.equal(`Todo with id: ${createdTodoId} deleted`);

      // Verify the deletion
      const deletedTodo = await request(app)
        .get(`/todos/${createdTodoId}`)
        .set('Authorization', `Bearer ${userToken}`);
      expect(deletedTodo.status).to.equal(404);
    });

    it('should return 403 if user is not the owner of the todo', async () => {
      const response = await request(app)
        .delete('/todos/5')
        .set('Authorization', `Bearer ${userToken}`);
      expect(response.status).to.equal(403);
      expect(response.body.success).to.be.false;
      expect(response.body.message).to.equal('You are not authorized to do this operation');
    });

    it('should return 404 if todo not found', async () => {
      const response = await request(app)
        .delete(`/todos/${nonexistentId}`)
        .set('Authorization', `Bearer ${userToken}`);
      expect(response.status).to.equal(404);
      expect(response.body.success).to.be.false;
      expect(response.body.message).to.equal(`Todo with id: ${nonexistentId} does not exist`);
    });
  });
});
