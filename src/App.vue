<template>
  <div id="app">

    <h2>Form inputs</h2>

   <input type="text" v-model.number="age">

    <p>{{ age }}</p>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        age: 20
      }
    },
    watch: {
      age (value) {
        console.log(value);
      }
    }
  }
</script>

<style lang="scss">
</style>
