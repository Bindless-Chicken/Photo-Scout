<template>
    <div class="info" v-on:click="image.Selected = image.Selected?false:true">
        <span class="indicator" :class="image.Selected?'selected':null">
            <i v-if="image.Lat != 0" class="fa fa-map" aria-hidden="true"></i>
        </span>
        <img v-bind:src="image.Url">

        <div class="description">
            <span class="title">{{image.Title}}</span>
            <span class="owner">{{image.Owner}} - all rights reserved</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'image-tile',
    props: ['image', 'selection'],
    data () {
        return {
        }
    }
}
</script>

<style lang="scss">
.info {
    margin: 10px;
    display: block;

    &:hover {
        .description {
            display: block;
            position: absolute;
            margin: 10px;
            left: 0;
            right: 0;
            bottom: 0;
            height: 60px;
            background-color: #4b4b4b;
        }
    }

    .indicator {
        position: absolute;
        margin: 0.2em;
        padding: 0;
        top: 10px;
        right: 10px;
        font-family: FontAwesome;
        font-weight: normal;
        font-style: normal;
        font-size: 2em;
        text-shadow: 2px 2px black;

        &:before {
            content: "\f10c";
            margin-right: 0.2em

        }
        &.selected:before {
            content: "\f111";
        }
    }

    .description {
        display: none;
        position: relative;
        padding: 0.5em;
        font-size: 0.9em;
        font-weight: 300;

        .owner {
            position: absolute;
            font-size: 0.8em;
            bottom: 0.5em;
            right: 0.5em;
        }
    }
}

img {
    width: 100%;
    height: auto;
}
</style>
