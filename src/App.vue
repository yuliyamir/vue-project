<template>
  <div id="app">

    <h2>Form inputs</h2>

    <textarea v-model="textarea"></textarea>

    <p>{{textarea}}</p>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        textarea: 'I am initial text'
      }
    }
  }
</script>

<style lang="scss">
  textarea {
    height: 100px;
    width: 400px;
  }

  p {
    white-space: pre;
  }

</style>
