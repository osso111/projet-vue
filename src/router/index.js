import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/HomeView.vue';
import BookDetails from '../views/BookDetails.vue';
import AddBookForm from '../components/AddBookForm.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',  // Enables clean URLs
  routes: [
    { path: '/', component: Home },                        // Home page
    { path: '/add-book', component: AddBookForm },         // Add new book page
    { path: '/book/:id', component: BookDetails, props: true },  // Book details page
  ],
});
