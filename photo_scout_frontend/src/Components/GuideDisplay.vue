<template>
    <div id="guide-display">
        <img class="guide-icon" src="src/assets/logod.png">
        <p>Nontron</p>
    </div>
</template>

<script>
export default {
    name: 'guidedisplay',
    components:{
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="scss">
#guide-display {
    position: absolute;
    border-top: 1px solid black;
    padding: 1em;
    width: 100%;

    .guide-icon {
        border-radius: 50%;
        width: 2em;
    }
}
</style>
