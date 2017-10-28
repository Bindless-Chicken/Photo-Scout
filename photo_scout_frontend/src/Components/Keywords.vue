<template>
    <div id="keyword-list">
        <span v-for="(keyword, index) in keywords" v-bind:key="index" class="keyword">
            {{keyword}}
        </span>
    </div>
</template>

<script>
export default {
    name: 'keywords',
    components:{
    },
    data () {
        var url = new URL(location.href);
        var c = url.searchParams.get("keywords").split(" ");
        return {
            keywords: c
        }
    }
}
</script>

<style lang="scss">
#keyword-list {
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    /// TODO: Check flexbox alignment

    .keyword {
        background-color: #555;
        border-radius: 4px;
        margin: 0.4em;
        padding: 0.3em;
        font-size: 0.8em;
    }
}
</style>
