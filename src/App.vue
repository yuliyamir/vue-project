<template>
  <div id="app">

    <h2>Form inputs</h2>

    <select v-model="social">
      <option
        v-for="s in socialsList"
      >{{ s }}</option>
    </select>

    <hr>

    <p>{{ social }}</p>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        social: 'instagram',
        socialsList: ['instagram', 'vk', 'facebook']
      }
    }
  }
</script>

<style lang="scss">
</style>
