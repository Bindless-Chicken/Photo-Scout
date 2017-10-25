<template>
    <form action="result.html" method="get" :class="button?'has-button':null">
        <input class="text" type="text" name="keywords">
        <input v-if="button" class="button" type="submit" value="Submit">
    </form>
</template>

<script>
export default {
  name: 'searchbar',
  props:['button']
}
</script>

<style lang="scss">
form {
    margin-top: 1em;
    width: 100%;
    display: flex;

    .text {
        width: 85%;
        display: inline-block;
        border: none;
        padding: 7px 7px 7px 27px;
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: 7px 50%;
        background-image: url(https://cdn.dribbble.com/assets/icon-search-7a07ad9f258fc1d8c28a29faa5627b41c2cc353d138b6bc3e987e0719584ce69.png);
        font-family: 'Raleway', sans-serif;
        border-radius: 4px 0 0 4px;
    }

    &:not(.has-button){
        justify-content: center;
        margin: 2em 0;

        .text{
            border-radius: 4px;
            padding: 2px 2px 2px 27px;
            background-color: #555;
            width: 60%;
            color: white;
        }
    }

    .button{
        width: 15%;
        border-radius: 0 4px 4px 0;
        background-color: #eee;
        border: none;

        &:hover {
            background-color: #ccc;
        }
    }
}
</style>
