<template>
  <div class="home-container">
    <h2>Gestion du Catalogue De Livres</h2>

    <!-- Search Bar -->
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search by title or author..."
      class="search-bar"
    />

    <!-- List of Books -->
    <div v-if="filteredBooks.length">
      <div
        v-for="book in filteredBooks"
        :key="book.id"
        class="book-card"
        @click="goToBookDetails(book.id)"
      >
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
/* Overall page background */
.home-container {
  background-color: #f3e6ff; /* Light purple background */
  padding: 20px;
  font-family: 'Arial', sans-serif;
  color: #4a148c; /* Dark purple text */
}

/* Heading style */
h2 {
  color: #6a1b9a; /* Medium purple color for heading */
  font-size: 2rem;
  text-align: center;
}

/* Search bar style */
.search-bar {
  width: 100%;
  max-width: 400px;
  padding: 12px;
  margin: 20px 0;
  border: 2px solid #9c27b0; /* Purple border */
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-bar:focus {
  border-color: #ab47bc; /* Lighter purple when focused */
}

/* Book card styles */
.book-card {
  background-color: white;
  border: 1px solid #e1bee7; /* Light purple border */
  padding: 16px;
  margin: 16px 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.book-card:hover {
  transform: translateY(-5px); /* Lift effect on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Book title styles */
.book-card h3 {
  color: #6a1b9a; /* Purple color for title */
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 8px;
}

/* Author and publish date styles */
.book-card p {
  color: #4a148c; /* Dark purple for the text */
  font-size: 1rem;
  margin: 4px 0;
}

/* Cover image style */
.cover-image {
  width: 100px;
  height: 150px;
  object-fit: cover;
  margin-top: 10px;
  border-radius: 5px;
  border: 2px solid #9c27b0; /* Purple border around the image */
}
</style>
