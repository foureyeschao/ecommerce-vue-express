import http from '../http-common'
class ProductDataService {
  getAll () {
    return http.get('/product')
  }

  get (id) {
    return http.get(`/product/${id}`)
  }

  create (data) {
    return http.post('/product/', data)
  }

  update (id, data) {
    return http.put(`/product/${id}`, data)
  }

  delete (id) {
    return http.delete(`/product/${id}`)
  }

  deleteAll () {
    return http.delete('/product')
  }

  findByType (type) {
    return http.get(`/product?type=${type}`)
  }
}
export default new ProductDataService()
