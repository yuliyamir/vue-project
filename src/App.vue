<template>
  <div id="app">
    <h2 v-colored v-if="visible">{{ title }}</h2>

    <button @click="visible = !visible">Toggle</button>
    <button @click="title = 'New title'">Change title</button>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      title: 'Hello I am Vue!',
      visible: true
    }
  }
}
</script>

<style lang="scss">

</style>
