<template>
  <div id="search-page">
    <div id="title-container">
      <div id="title-box">
        <h1>Photo Scout</h1>
        <h2>Where will you go next?</h2>
        <searchbar v-bind:button="true"></searchbar>
      </div>
    </div>
  </div>
</template>

<script>
import searchbar from './Components/SearchBar.vue'

export default {
  name: 'search',
  components:{
    searchbar
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import "styles/global.scss";

#search-page {
    background: url('assets/bg.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    #title-container {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.6) 40%,rgba(0,0,0,0) 100%);
        text-align: center;

        h1, h2 {
            margin: 0em;
        }

        h1 {
            font-weight: 300;
            font-size: 7em;
        }

        h2 {
            font-weight: 100;
            font-size: 3.5em;
        }
    }
}
</style>
