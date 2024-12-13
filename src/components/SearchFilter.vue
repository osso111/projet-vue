<!--  /components/SearchFilter -->
<template>
  <div class="search-filter">
    <input 
      v-model="searchQuery" 
      placeholder="Rechercher par titre ou auteur" 
      class="search-input"
    />
    <select 
      v-model="selectedCategory" 
      class="category-select"
    >
      <option value="">Toutes les catégories</option>
      <option>Roman</option>
      <option>Science-Fiction</option>
      <option>Biographie</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      selectedCategory: "",
    };
  },
  watch: {
    searchQuery() {
      this.$emit("search", this.searchQuery);
    },
    selectedCategory() {
      this.$emit("filter", this.selectedCategory);
    },
  },
};
</script>

<style scoped>
.search-filter {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Add space between the input and select elements */
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f3e6ff; /* Light purple background */
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
}

/* Style for the search input */
.search-input {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #9c27b0; /* Purple border */
  border-radius: 8px; /* Rounded corners */
  outline: none;
  color: #4a148c; /* Dark purple text */
  background-color: #fff; /* White background */
  transition: border 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
}

/* Focus effect on input */
.search-input:focus {
  border: 1px solid #6a1b9a; /* Slightly darker purple on focus */
  box-shadow: 0 0 5px rgba(106, 27, 154, 0.4); /* Purple shadow on focus */
}

/* Style for the category select */
.category-select {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #9c27b0; /* Purple border */
  border-radius: 8px; /* Rounded corners */
  color: #4a148c; /* Dark purple text */
  background-color: #fff; /* White background */
  transition: border 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
}

/* Focus effect on select */
.category-select:focus {
  border: 1px solid #6a1b9a; /* Slightly darker purple on focus */
  box-shadow: 0 0 5px rgba(106, 27, 154, 0.4); /* Purple shadow on focus */
}
</style>
