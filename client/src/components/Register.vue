<template>
  <div>
    <h1>register</h1>

    <input
      type="text"
      name="email"
      v-model="email"
      placeholder="email"/>
    <br>
    <button
      @click="register">Register</button>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    data () {
      return {
        email: 'emaisdsds'
      }
    },
    methods: {
      async register () {
        const response = await AuthenticationService.register({
          email: this.email
        })
        console.log(response.data)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
