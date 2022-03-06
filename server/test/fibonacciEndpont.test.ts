import supertest from 'supertest'
import app from '../src/index'

const api = supertest(app)

test('Response returned as json', async () => {
  await api
    .get('/api/fibonacci/5')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('Response for 6', async () => {
    const response = await api
      .get('/api/fibonacci/6')
     const {result} = response.body
     expect(result).toBe(8)
  })

  afterAll((done) => {
    done()
  })
