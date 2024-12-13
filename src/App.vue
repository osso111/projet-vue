<!--  /App -->
<template>
  <div id="app">
    <header>
      <h1>Catalogue De Livre</h1>
    </header>

    <nav>
      <button class="nav-button" @click="$router.push('/')">Home</button>
      <button class="nav-button" @click="$router.push('/add-book')">Add a New Book</button>
    </nav>

    <router-view></router-view> <!-- This displays the current view based on the route -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#app {
  font-family: 'Comic Sans MS', cursive, sans-serif; /* Fun and cute font */
  padding: 20px;
  background-color: #f9f0ff; /* Light lavender background */
  border: 2px solid #d1c4e9; /* Subtle border for the app */
  border-radius: 15px;
  max-width: 800px;
  margin: 0 auto; /* Center the app */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Soft shadow */
}

header {
  text-align: center;
  margin-bottom: 20px;
}

header h1 {
  font-size: 2.5em;
  color: #8e44ad; /* Purple for header */
  text-shadow: 2px 2px #d1c4e9; /* Soft shadow for the text */
  font-family: 'Pacifico', cursive; /* Updated cute font for the title */
}

nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.nav-button {
  font-size: 1.2em;
  padding: 10px 20px;
  background-color: #ba68c8; /* Purple button background */
  color: #fff; /* White text */
  border: none;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Button shadow */
  transition: all 0.3s ease;
}

.nav-button:hover {
  background-color: #9c27b0; /* Darker purple on hover */
  transform: translateY(-2px); /* Slight lift effect */
}

.nav-button:active {
  background-color: #7b1fa2; /* Even darker purple on click */
  transform: translateY(0); /* Return to normal */
}

footer {
  text-align: center;
  margin-top: 30px;
  font-size: 1em;
  color: #888;
}
</style>
