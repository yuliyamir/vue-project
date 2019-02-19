<template>
  <div id="app">

    <h2>{{ title }}</h2>

    <input type="text" v-model="searchName">

    <ul>
      <li v-for="name of filteredNames">{{name}}</li>
    </ul>
    <hr>
    <app-list></app-list>
  </div>
</template>

<script>

  import ListMixin from './listMixin'

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
    },
    mixins: [ListMixin]
  }
</script>

<style lang="scss">

</style>
