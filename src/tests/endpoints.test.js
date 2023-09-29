const supertest = require('supertest');
const { Server } = require('../server');
const app = new Server().getApp();
const API = supertest(app);
var token = '';
const { verify } = require("jsonwebtoken");
// antes de fazer os testes mudar variavel de ambiente para um banco novo de testes no arquivo .env
// e rodar npx sequelize-cli db:create && npx sequelize-cli db:migrate 



describe('Create Read Update : Usuarios  ', () => {
    it('Criando Usuario', async () => {
        const res = await API
            .post('/api/v1/usuario')
            .send({
                name: 'Teste',
                email: 'email@dominio.com',
                password: 'Alone1983@'
            })
            .expect(201);

    }
    );
    it('Logando Usuario', async () => {
        const res = await API
            .post('/api/v1/login')
            .send({
                email: 'email@dominio.com',
                password: 'Alone1983@'
            })
            .expect(200);
        expect(res.body).toHaveProperty('token');
        token = res.body.token;
        const payload = verify(token, process.env.SECRET_JWT);
        expect(payload).toHaveProperty('id');
        id = payload.id;

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
    it('Atualizando Usuario', async () => {

        const res = await API
            .put('/api/v1/usuario/1')
            .set('Authorization', `${token}`)
            .send({
                name: 'Teste update',
                email: 'email@dominio.com',
                password: 'Alone1983@'
            })
            .expect(200);
        expect(res.body).toBeInstanceOf(Object);

    });
   
});
describe('Create Read Update : Unidades  ', () => {

    it('Criando Unidade', async () => {
        const res = await API
            .post('/api/v1/unidades')
            .set('Authorization', `${token}`)
            .send({
                nickname: 'Unidade X',
                address: 'Teste X',
                brand: 'Marca X',
                model: 'Model X',
                active: true
            })
            .expect(201);
    });
    it('Listando Unidades com token', async () => {

        const res = await API
            .get('/api/v1/unidades')
            .set('Authorization', `${token}`)
            .expect(200);
        expect(res.body).toBeInstanceOf(Object);
    });
    it('Listando Unidades sem token', async () => {

        await API
            .get('/api/v1/unidades')
            .expect(401);
    });
    it('Atualizando Unidade', async () => {

        const res = await API
            .put(`/api/v1/unidades/1`)
            .set('Authorization', `${token}`)
            .send({
                nickname: 'Update Unidade X',
                address: 'Update Teste X',
                brand: 'Update Marca X',
                model: 'Update Model X',
                active: false
            })
            .expect(200);
        expect(res.body).toBeInstanceOf(Object);

    });
   
});
describe('Create Read Update : Geracao ', () => {

    it('Criando Geracao', async () => {
        const res = await API
            .post('/api/v1/geracao')
            .set('Authorization', `${token}`)
            .send({
                unidade_id : '1',
                reference_date : ('2023-01'),
                total_generated : 1000
            })
            .expect(201);
    }
    );
    it('Listando Geracao com token', async () => {

        const res = await API
            .get('/api/v1/geracao')
            .set('Authorization', `${token}`)
            .expect(200);
        expect(res.body).toBeInstanceOf(Array);
    }
    );
    it('Listando Geracao sem token', async () => {

        await API
            .get('/api/v1/geracao')
            .expect(401);
    }
    );
    it('Atualizando Geracao', async () => {

        const res = await API
            .put('/api/v1/geracao/1')
            .set('Authorization', `${token}`)
            .send({
                reference_date : '2023-01',
                total_generated : 2000
            })
            .expect(200);
        expect(res.body).toBeInstanceOf(Object);

    });
  
});

describe('Delete  : Usuario, Unidade , Geracao ', () => {
  
    it('Deletando Geracao', async () => {

        const res = await API
            .delete(`/api/v1/geracao/1`)
            .set('Authorization', `${token}`)
            .expect(204);
        expect(res.body).toBeInstanceOf(Object);

    });


    it('Deletando Unidade', async () => {

        const res = await API
            .delete(`/api/v1/unidades/1`)
            .set('Authorization', `${token}`)
            .expect(200);
        expect(res.body).toBeInstanceOf(Object);

    });
    it('Deletando Usuario', async () => {

        const res = await API
            .delete(`/api/v1/usuario/1`)
            .set('Authorization', `${token}`)
            .expect(204);
        expect(res.body).toBeInstanceOf(Object);

    });
});