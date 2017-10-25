<template>
    <ul id="categories" >
        <li v-for="(cat, index) in categories" :key="index">{{cat.name}}</li>
    </ul>
</template>

<script>

export default {
  name: 'categories',
  data() {
      return {
        categories: [
            {name: "Photo"},
            {name: "Map"},
        ]
      }
  }
}
</script>

<style lang="scss">
    #categories {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            width: 100%;
            margin: 0;
            padding: 1em;

            &:nth-child(odd) {
                background-color: #222;
            }

            &:hover {
                background-color: #111;
            }
        }
    }
</style>
