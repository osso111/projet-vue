<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="title">Title</label>
      <input type="text" v-model="newBook.title" required />
    </div>
    <div>
      <label for="author">Author</label>
      <input type="text" v-model="newBook.author" required />
    </div>
    <div>
      <label for="publishDate">Publish Date</label>
      <input type="date" v-model="newBook.publishDate" required />
    </div>
    <div>
      <label for="description">Description</label>
      <textarea v-model="newBook.description"></textarea>
    </div>
    <div>
      <label for="coverImage">Cover Image</label>
      <input type="file" @change="handleFileUpload" />
    </div>
    <button type="submit">Add Book</button>
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
