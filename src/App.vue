<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <PageHeader heading="Contact Vue App"/>
  <ContactList />
  <footer>Test footer</footer>
</template>

<script>
import PageHeader from "./components/PageHeader.vue"
import ContactList from "./components/ContactList.vue"

export default {
  name: 'App',
  components: {
    PageHeader,
    ContactList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
}
</style>
