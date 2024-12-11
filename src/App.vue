<template>
  <div id="app">
    <h1>Catalogue De liver</h1>
    <nav>
      <router-link to="/">Home</router-link> |  
      <router-link to="/add-book">Add a New Book</router-link>
    </nav>
    <router-view></router-view> <!-- This displays the current view based on the route -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 10px;
}
#app {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f4f4f4;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

header h1 {
  font-size: 2.5em;
  color: #333;
}

nav {
  margin-top: 10px;
}

.nav-link {
  font-size: 1.2em;
  margin: 0 15px;
  text-decoration: none;
  color: #007BFF;
}

.nav-link:hover {
  text-decoration: underline;
}

footer {
  text-align: center;
  margin-top: 30px;
  font-size: 1em;
  color: #888;
}
</style>
