const app = require('../src/app');
const knex = require('knex');
const dummydata = require('./dummy_data');

describe('App Test', () => {
  let db;
  const testFolders = dummydata.MakeDummyFolders();
  before('make knex instance',() => {
    db = knex({
      client: 'pg',
      connection: {
        host: '127.0.0.1',
        user: 'brahyt',
        password: 'brahyt',
        database: 'notful_test'
      }
    });
    app.set('db', db)
  });
  before('insert folders', () => {
    return db
      .into('folders')
      .insert(testFolders)
  })
  after('disconnect from db', ()=> db.destroy());

  describe('Folders Endpoints', () => {
    afterEach('clear db', () => db.raw('TRUNCATE TABLE folders CASCADE'))
    it('GET /folders responds with 200 and 3 folders', () => {
      return supertest(app)
        .get('/api/folders')
        .expect(res => {
          expect(res.body).to.have.length(3)
        });
    });
    it('POST /folders posts folder', () => {
      return supertest(app)
        .post('/api/folders')
        .send({folder_name: "new folder"})
        .expect(res => {
          expect(res.body).to.contain({folder_name: "new folder"})
        });
    });
  });

  describe('Notes Endpoints', () => {
    it('GET /notes responds with 200 containing Hello world', () => {
      return supertest(app)
        .get('/api/notes')
        .expect(200);
    });
  });

});


