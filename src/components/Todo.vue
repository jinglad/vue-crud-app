<template>
  <div class="container">
    <h3>Task List component</h3>
    <div class="box">
        <p>First Task</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo"
};
</script>

<style scoped>
  .container {
    max-width:960px;
    margin: 0 auto;
  }

  h3 {
    text-align: center;
  }

  .box {
      padding:2rem;
      margin-top:2rem;
      background:lightgray;
      border-radius:10px;
      width:500px;
      margin:auto;
  }
</style>
