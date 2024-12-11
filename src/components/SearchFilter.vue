<template>
  <div>
    <input v-model="searchQuery" placeholder="Rechercher par titre ou auteur" />
    <select v-model="selectedCategory">
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
