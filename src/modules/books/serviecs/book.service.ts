import http from 'D:/vue/bookproject/src/modules/books/serviecs/http.service'
import Book from 'D:/vue/bookproject/src/modules/books/models/book'

const bookService = {
  async getList (page: number, limit: number) {
    return http.get(`/books`)
  },

  async getItem (id: string) {
    return http.get(`/books/${id}`)
  },

  async create (book: Book) {
    return http.post(`/books`, book)
  },

  async update (id: string, book: Book) {
    return http.put(`/books/${id}`, book)
  }
}

export default bookService
