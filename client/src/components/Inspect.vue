<template>
  <div>
    <h1>Inspect</h1>

    <input
      type="url"
      name="url"
      v-model="url"
      placeholder="url to inspect"/>
    <br>
    <button
      @click="inspect">Inspect</button>
    <br>
    <h2>Results :</h2>
    <p>URL : {{ url }}</p>
    <p>Status : {{ status }} </p>
    <br>
    <p>{{ dataLayer }}</p>

  </div>
</template>

<script>
  import PageInspectorService from '@/services/PageInspectorService'
  export default {
    data () {
      return {
        url: 'http://www.example.com',
        msg: '',
        status: '',
        dataLayer: ''
      }
    },
    methods: {
      async inspect () {
        const response = await PageInspectorService.inspect({
          url: this.url
        })
        this.status = response.data.response_status
        this.url = response.data.url
        this.dataLayer = response.data.dataLayer
        console.log(response.data)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
