<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
    width:1920px;
    height:1080px;
    position:relative;
    overflow:hidden;
  }
  .appContainer{
    position:absolute;
    left:0;
    bottom:0;
    right:0;
    top:0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width:1920px;
    height:1080px;
    position:relative;
  }
</style>
