<template>
  <div v-if="book">
    <h1>{{ book.title }}</h1>
    <p><strong>Author:</strong> {{ book.author }}</p>
    <p><strong>Publication Date:</strong> {{ book.publishDate }}</p>
    <p><strong>Description:</strong> {{ book.description }}</p>
    <img :src="book.coverImage" alt="Cover Image" />

    <button @click="deleteBook">Delete Book</button>
    <button @click="editBook">Edit Book</button>
  </div>
  <p v-else>Loading...</p>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      book: null,
    };
  },
  created() {
    this.fetchBookDetails();
  },
  methods: {
    fetchBookDetails() {
      this.book = this.$store.state.books.find(book => book.id === this.id);
    },
    deleteBook() {
      this.$store.commit('deleteBook', this.id);
      this.$router.push('/');  // Redirect to home after deletion
    },
    editBook() {
      // For simplicity, we'll redirect to the Add Book form with the existing book data
      this.$router.push({ path: '/add-book', query: { id: this.id } });
    },
  },
};
</script>
