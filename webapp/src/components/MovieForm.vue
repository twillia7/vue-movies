<template>
  <div>
    <form v-on:submit.prevent="getMovies">
      <input v-model="title" type="text" name='title' placeholder="Title"/>
      <button>Search</button>
    </form>
    <ul>
      <li v-for="title in titles" :key="title.id">
        {{ title.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  import properties from '../../properties.json'

  export default {
    data() {
      return {
        title: '',
        titles: [],
      }
    },
    methods: {
      async getMovies(event){
        const res = await fetch(`https://api.themoviedb.org/3/search/keyword?api_key=${properties.API_KEY}&query=${event.target.title.value}`)
        const returnedData = await res.json();
        this.titles = returnedData.results
        console.log(this.titles)
      }
    }
  }
</script>