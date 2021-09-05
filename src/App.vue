<template>
  <Header />
  <router-view />
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
</style>
