// /store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: JSON.parse(localStorage.getItem('books')) || [],  // Load from localStorage
    categories: ['Fiction', 'Non-Fiction', 'Science', 'Fantasy', 'History', 'Biography'],
  },
  mutations: {
    addBook(state, newBook) {
      state.books.push(newBook);
      localStorage.setItem('books', JSON.stringify(state.books));
    },
    deleteBook(state, bookId) {
      state.books = state.books.filter(book => book.id !== bookId);
      localStorage.setItem('books', JSON.stringify(state.books));
    },
    updateBook(state, updatedBook) {
      const index = state.books.findIndex(book => book.id === updatedBook.id);
      if (index !== -1) {
        Vue.set(state.books, index, updatedBook);  // Update the book in the array
        localStorage.setItem('books', JSON.stringify(state.books));
      }
    },
    setBooks(state, books) {
      state.books = books;
    },
  },
  actions: {
    fetchBooks({ commit }) {
      let books = JSON.parse(localStorage.getItem('books')) || [];
      commit('setBooks', books);
    },
  },
});
