<template>
    <nav id="navigation-panel">
        <div class="floating">
            <div id="title">
                <h1><a href="index.html">Photo Scout</a></h1>

                <searchbar></searchbar>

                <keywords></keywords>
            </div>
            <categories></categories>
            <guidedisplay></guidedisplay>
        </div>
    </nav>
</template>

<script>
import searchbar from './SearchBar.vue'
import categories from './Categories.vue'
import keywords from './Keywords.vue'
import guidedisplay from './GuideDisplay.vue'


export default {
  name: 'navbar',
  components:{
    searchbar,
    categories,
    keywords,
    guidedisplay
  },
}
</script>

<style lang="scss">
#navigation-panel {
    width: 15%;
    height: 100vh;
    border-right: 1px solid black;
    position: relative;
    display: block;

    .floating {
        position: fixed;
        display: block;
        width: inherit;
    }

    #title {
        position: relative;
        display: block;
        width: 100%;
    }

    #title {
        border-bottom: 1px solid #111;

        h1 {
            width: 100%;
            font-weight: 300;
            text-align: center;
            padding: 2em 0 0 0;
            margin: 0;
        }
    }
}
</style>
