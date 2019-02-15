<template>
    <div class="car">
      <h3>Name: {{ carName }} \ {{ reverseName }}</h3>
      <p>Year: {{ carYear }}</p>
      <button @click="changeName">Change name</button>
      <button @click="changeFunc()">Change from parent</button>
    </div>
</template>

<script>
    export default {
      name: "Car",
      // props: ['carName', 'carYear'],
      // props: {
      //   carName: String,
      //   carYear: Number
      // },
      props: {
        carName: {
          type: String,
          required: true,
          default: 'Default name'
        },
        carYear: Number,
        changeFunc: Function
      },
      methods: {
        changeName() {
          this.carName = 'Mazda';
          this.$emit('nameChanged', this.carName)
        }
      },
      computed: {
        reverseName() {
          return this.carName.split('').reverse().join('')
        }
      }
    }
</script>

<style scoped>
  .car {
    border: 2px solid #e1d5a8;
    padding: 10px 20px;
  }
</style>
