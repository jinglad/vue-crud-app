<template>
  <div class="container">
    <h3>Counter App</h3>
    <p>Counter : {{ counter }}</p>
    <div class="btn-container">
      <button @click="increase">Increase</button>
      <button @click="decrease">Decrease</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
      return {
          counter: 0
      }
  },
  methods: {
      increase: function() {
          this.counter += 1;
      },
      decrease: function() {
          this.counter -= 1;
      }
  }
};
</script>

<style scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
}

h3 {
  text-align: center;
}

p {
  text-align: center;
}

button{
    margin-right:15px;
}

.btn-container {
    display: flex;
    justify-content: center;
}
</style>
