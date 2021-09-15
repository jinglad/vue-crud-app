import Vue from 'vue'
import App from './App.vue'
import AddTask from './components/AddTask.vue';
import Todo from './components/Todo.vue';
import Counter from "./components/Counter.vue";

Vue.component('AddTask',AddTask);
Vue.component('Todo',Todo);
Vue.component('Counter',Counter);

new Vue({
  el: '#app',
  render: h => h(App)
})
