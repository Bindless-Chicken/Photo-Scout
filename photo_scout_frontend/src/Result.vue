<template>
  <div id="result-page">
      <navbar></navbar>
      <div id="content">
          <imageview></imageview>
      </div>
  </div>
</template>

<script>
import navbar from './Components/Navbar.vue'
import imageview from './Components/ImageView.vue'

export default {
  name: 'search',
  components:{
    navbar,
    imageview
  },
  data () {
    return {
      // {selected: "photo"}
    }
  }
}
</script>

<style lang="scss">
@import "styles/global.scss";

#result-page {
  display: flex;
  background-color: #333;
}

#content {
  width: 85%;
  background-color: #111;
  position: relative;
  display: block;
}
</style>
