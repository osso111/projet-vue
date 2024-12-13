<!--  /views/BookDetails -->
<template>
  <div class="book-details-container">
    <template v-if="!isEditing">
      <h1>{{ book.title }}</h1>
      <p><strong>Author:</strong> {{ book.author }}</p>
      <p><strong>Publication Date:</strong> {{ book.publishDate }}</p>
      <p><strong>category:</strong> {{ book.category }}</p>
      <img :src="book.coverImage" alt="Cover Image" class="cover-image" />

      <div class="button-container">
        <button @click="deleteBook" class="delete-button">Delete Book</button>
        <button @click="startEditing" class="edit-button">Edit Book</button>
      </div>
    </template>

    <template v-else>
      <h2>Edit Book</h2>
      <form @submit.prevent="updateBook">
        <label for="title">Title:</label>
        <input v-model="editableBook.title" id="title" required v-focus />

        <label for="author">Author:</label>
        <input v-model="editableBook.author" id="author" required v-highlight:author />

        <label for="publishDate">Publication Date:</label>
        <input type="date" v-model="editableBook.publishDate" id="publishDate" required />

        <label for="category">Category</label>
        <select v-model="editableBook.category">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>

        <label for="coverImage">Cover Image URL:</label>
        <input v-model="editableBook.coverImage" id="coverImage" />

        <div class="button-container">
          <button type="submit" class="update-button">Update Book</button>
          <button @click="cancelEditing" type="button" class="cancel-button">Cancel</button>
        </div>
      </form>
    </template>
  </div>
</template>

<script>
import Vue from 'vue';

// Global directive for focusing on an element
Vue.directive('focus', {
  inserted(el) {
    el.focus();
  },
});

export default {
  props: ['id'],
  data() {
    return {
      categories: ['Fiction', 'Non-Fiction', 'Science', 'History', 'Biography'],
      book: null,
      isEditing: false, // Toggle between view and edit modes
      editableBook: null, // Stores a copy of the book data for editing
    };
  },
  created() {
    this.fetchBookDetails();
  },
  watch: {
    editableBook: {
      handler(newVal) {
        console.log('Editable book updated:', newVal);
      },
      deep: true, // Watch nested properties
    },
  },
  directives: {
    highlight: {
      bind(el) {
        el.style.transition = 'background-color 0.5s'; // Removed 'binding' from here as it's not needed
      },
      update(el, binding) {
        el.style.backgroundColor = binding.value === binding.arg ? '#ffeb3b' : '';
        setTimeout(() => (el.style.backgroundColor = ''), 1000);
      },
    },
  },
  methods: {
    fetchBookDetails() {
      this.book = this.$store.state.books.find(book => book.id === this.id);
    },
    deleteBook() {
      this.$store.commit('deleteBook', this.id);
      this.$router.push('/'); // Redirect to home after deletion
    },
    startEditing() {
      // Copy book data for editing
      this.editableBook = { ...this.book };
      this.isEditing = true;
    },
    cancelEditing() {
      this.isEditing = false; // Exit edit mode without saving changes
    },
    updateBook() {
      // Commit the changes to the store
      this.$store.commit('updateBook', this.editableBook);
      this.book = { ...this.editableBook }; // Update the local book data
      this.isEditing = false; // Exit edit mode
    },
  },
};
</script>

<style scoped>
.book-details-container {
  background-color: #f9f0ff; /* Light lavender background */
  padding: 30px;
  border: 2px solid #d1c4e9; /* Subtle purple border */
  border-radius: 15px;
  max-width: 800px;
  margin: 20px auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-family: 'Comic Sans MS', cursive, sans-serif; /* Fun and cute font */
  color: #6a1b9a; /* Dark purple text */
}

h1, h2 {
  text-align: center;
  color: #8e44ad; /* Purple for headings */
  text-shadow: 1px 1px #d1c4e9; /* Soft text shadow */
}

.cover-image {
  max-width: 300px; /* Smaller size for the cover image */
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

p {
  font-size: 1.2em;
  margin: 10px 0;
}

label {
  font-weight: bold;
  color: #7b1fa2;
}

input, textarea, select{
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #d1c4e9;
  border-radius: 10px;
  font-size: 1em;
  background-color: #f3e5f5; /* Light purple input background */
}

textarea {
  resize: none;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1em;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, background-color 0.3s;
}

.edit-button {
  background-color: #ba68c8; /* Light purple */
}

.delete-button {
  background-color: #e57373; /* Soft red */
}

.update-button {
  background-color: #4caf50; /* Green for update */
}

.cancel-button {
  background-color: #9e9e9e; /* Gray for cancel */
}

button:hover {
  transform: translateY(-3px);
}
</style>
