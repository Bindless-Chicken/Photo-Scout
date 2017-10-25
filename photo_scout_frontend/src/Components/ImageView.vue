<template>
    <div v-masonry transition-duration="0.3s" item-selector=".item">
        <div v-masonry-tile class="item" v-for="(image, index) in images" v-bind:key="index">
            <image-tile v-bind:image.sync="image" v-bind:selection="selection[index]"></image-tile>
        </div>
    </div>
</template>

<script>
import imageTile from './ImageTile.vue'
import Vue from 'vue'
import {VueMasonryPlugin} from 'vue-masonry';

Vue.use(VueMasonryPlugin)

export default {
    name: 'imageview',
    components:{
        imageTile
    },
    data () {
        return {
            images: [],
            selection: []
        }
    },

    mounted: function () {
        var url = new URL(location.href);
        var c = url.searchParams.get("keywords");
        this.$http.get('http://127.0.0.1:5000/results?keywords=' + c.replace(" ", "+")).then(response => {

            // get body data
            this.images =  response.body;

        }, response => {
            // error callback
        });
    }
}
</script>

<style lang="scss">
    .item {
        width: 33.3%;
        margin: 0;
        background-color: #111;
    }
</style>
