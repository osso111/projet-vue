<template>
  <form @submit.prevent="submitForm" class="add-book-form">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" v-model="newBook.title" required class="form-input" />
    </div>
    <div class="form-group">
      <label for="author">Author</label>
      <input type="text" v-model="newBook.author" required class="form-input" />
    </div>
    <div class="form-group">
      <label for="publishDate">Publish Date</label>
      <input type="date" v-model="newBook.publishDate" required class="form-input" />
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea v-model="newBook.description" class="form-textarea"></textarea>
    </div>
    <div class="form-group">
      <label for="coverImage">Cover Image</label>
      <input type="file" @change="handleFileUpload" class="form-input" />
    </div>
    <button type="submit" class="submit-btn">Add Book</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newBook: {
        title: '',
        author: '',
        publishDate: '',
        description: '',
        coverImage: '',
        id: Date.now().toString(), // Generate a unique ID based on timestamp
      }
    };
  },
  methods: {
    submitForm() {
      this.$store.commit('addBook', this.newBook); // Add book to Vuex store
      this.$router.push('/'); // Redirect to home after adding the book
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.newBook.coverImage = e.target.result;  // Set the cover image URL
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style scoped>
.add-book-form {
  background-color: #f3e6ff; /* Light purple background */
  border-radius: 12px; /* Rounded corners */
  padding: 30px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-size: 1.1rem;
  color: #6a1b9a; /* Dark purple */
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #9c27b0; /* Purple border */
  margin-top: 5px;
  background-color: #fff;
  color: #4a148c; /* Dark purple text */
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  border-color: #6a1b9a; /* Darker purple on focus */
  box-shadow: 0 0 5px rgba(106, 27, 154, 0.4); /* Purple glow on focus */
  outline: none;
}

.form-textarea {
  height: 120px;
}

.submit-btn {
  background-color: #9c27b0; /* Purple background */
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
}

.submit-btn:hover {
  background-color: #6a1b9a; /* Darker purple on hover */
}
</style>
