<template>
  <div id="app">

    <h2>Form inputs</h2>

    <input type="text" v-model.lazy="name">

    <p>{{name}}</p>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        name: 'Initial name'
      }
    }
  }
</script>

<style lang="scss">

</style>
