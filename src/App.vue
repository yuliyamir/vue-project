<template>
  <div id="app">

    <h2>{{ title }}</h2>
    <h2>{{ title | lowercase }}</h2>
    <h2>{{ title | uppercase }}</h2>
    <h2>{{ title | uppercase | lowercase }}</h2>

  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      title: 'Hello I am Vue!'
    }
  },
  filters: {
    lowercase(value) {
      return value.toLowerCase()
    }
  }
}
</script>

<style lang="scss">

</style>
