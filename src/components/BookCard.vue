<!--  /components/BookCard -->
<template>
  <div class="book-card" @click="goToDetailsPage">
    <h3>{{ book.title }}</h3>
    <p>{{ book.author }}</p>
  </div>
</template>

<script>
export default {
  props: ['book'],
  methods: {
    goToDetailsPage() {
      this.$router.push(`/book/${this.book.id}`);  // Navigate to book details page
    }
  }
};
</script>

<style scoped>
.book-card {
  cursor: pointer;
  margin: 12px;
  padding: 12px;
  background-color: #f3e6ff; /* Light purple background */
  border: 1px solid #9c27b0; /* Purple border */
  border-radius: 10px; /* Rounded corners */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
  color: #4a148c; /* Dark purple text color */
  font-family: 'Arial', sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.book-card h3 {
  font-size: 1.5rem;
  color: #6a1b9a; /* Medium purple color for title */
  margin: 0 0 10px 0; /* Space below title */
}

.book-card p {
  font-size: 1rem;
  color: #4a148c; /* Dark purple for author name */
  margin: 0;
}

/* Hover effect */
.book-card:hover {
  transform: translateY(-5px); /* Lift the card slightly on hover */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); /* Darker shadow on hover */
  background-color: #9c27b0; /* Dark purple background on hover */
  color: white; /* Change text color to white on hover */
}

.book-card:hover h3 {
  color: #ffffff; /* White text for title on hover */
}

.book-card:hover p {
  color: #ffffff; /* White text for author on hover */
}
</style>
