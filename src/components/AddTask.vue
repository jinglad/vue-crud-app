<template>
  <div class="container">
    <h1 class="heading">Todo App</h1>
    <div class="input-container">
      <div class="input-box">
        <input type="text" placeholder="Add Todo" />
      </div>
      <button class="button">Add Todo</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTask"
};
</script>

<style>
  .container {
    max-width:960px;
    margin: 0 auto;
  }

  .heading {
    text-align: center;
    margin: 5rem 0;
    font-size:5rem;
  }

  .input-container {
    /* margin: 5rem 0; */
    display: flex;
    width:700px;
    margin:0 auto;
    /* margin-left: 60px; */
  }

  .input-box input {
    margin:0 auto;
    width:500px;
    padding:15px;
    border-radius:10px;
    outline:none;
    border: 1px solid lightgray;
  }

  .button {
    padding:15px;
    background: rgb(57, 57, 212);
    outline:none;
    border:none;
    color:white;
    border-radius:10px;
    margin-left: 10px;
  }
</style>
