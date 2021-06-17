<template>
  <div>
    <h1>Movies  </h1>
    <ul id="array-rendering">
    <li v-for="movie in movies" :key="movie.id">
      {{ movie.title }}
    </li>
  </ul>
  </div>
</template>

<script lang="js">
const pageProps = ['movies']
export default { props: pageProps }
</script>
