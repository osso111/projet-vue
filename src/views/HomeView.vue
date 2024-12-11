<!-- src/views/Home.vue -->

<template>
  <div>
    <h2>Gestion du Catalogue De liver</h2>

    <!-- Search Bar -->
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search by title or author..."
    />

    <!-- List of Books -->
    <div v-if="filteredBooks.length">
      <div v-for="book in filteredBooks" :key="book.id" class="book-card" @click="goToBookDetails(book.id)">
        <h3>{{ book.title }}</h3>
        <p><strong>Author:</strong> {{ book.author }}</p>
        <p><strong>Publication Date:</strong> {{ book.publishDate }}</p>
        <img :src="book.coverImage" alt="Cover Image" class="cover-image" />
      </div>
    </div>

    <p v-else>No books found.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
    filteredBooks() {
      return this.books.filter((book) => {
        return (
          book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    },
  },
  created() {
    this.$store.dispatch('fetchBooks');
  },
  methods: {
    goToBookDetails(id) {
      this.$router.push(`/book/${id}`);
    },
  },
};
</script>

<style scoped>
.book-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-card h3 {
  margin: 0;
}

.cover-image {
  width: 100px;
  height: 150px;
  object-fit: cover;
  margin-top: 10px;
}
</style>
