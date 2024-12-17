<template>
  <div id="app">
    <SnackbarComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import SnackbarComponent from './components/SnackbarComponent.vue'; // Adjust the path accordingly

export default {
  name: 'App',
  components: {
    SnackbarComponent,
  },
};
</script>

<style>
/* Add your global styles here */
</style>