const supertest = require('supertest');
const { Server } = require('./server');
const app = new Server().getApp();
const API = supertest(app);
var token = '';



/**
userRoutes.post("/api/v1/usuario", createUser);
userRoutes.post("/api/v1/login", login);
userRoutes.get("/api/v1/usuario", auth, getAllUsers);
userRoutes.put("/api/v1/usuario/:id", auth, updateUser);
userRoutes.delete("/api/v1/usuario/:id", auth, deleteUser);
 */
describe('Usuarios Endpoints', () => {
    it.skip('Criando Usuario', async () => {
        const res = await API
            .post('/api/v1/usuario')
            .send({
                name: 'Teste',
                email: 'email@dominio.comb',
                password: 'Alone1983@'
            })
            .expect(201);

    }
    );
    it('Logando Usuario', async () => {
        const res = await API
            .post('/api/v1/login')
            .send({
                name: 'Teste',
                email: 'chavetasoft@gmail.com',
                password: 'Alone1983@'
            })
            .expect(200);
        expect(res.body).toHaveProperty('token');
        token = res.body.token;
    }
    );

    it('Listando Usuarios com token', async () => {

        const res = await API
            .get('/api/v1/usuario')
            .set('Authorization', `${token}`)
            .expect(200);
        expect(res.body).toBeInstanceOf(Array);
    }
    );
    it('Listando Usuarios sem token', async () => {

        await API
            .get('/api/v1/usuario')
            .expect(401);
    }
    );
});