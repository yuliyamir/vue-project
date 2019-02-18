<template>
  <div id="app">
    <h2 v-colored:background="'green'">{{ title }}</h2>
    <h2 v-colored:color="'blue'">{{ title }}</h2>

  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      title: 'Hello I am Vue!'
    }
  }
}
</script>

<style lang="scss">

</style>
