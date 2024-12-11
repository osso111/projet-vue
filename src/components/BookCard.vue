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

<style>
.book-card {
  cursor: pointer;
  margin: 20px;
  padding: 15px;
  border: 1px solid #ddd;
}
</style>
