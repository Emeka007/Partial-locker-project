<template>
    <div class="test-component">
      <h2>This is a Test Component</h2>
      <p>Testing component creation and import.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TestComponent',
    mounted() {
      console.log('TestComponent mounted');
    }
  };
  </script>
  
  <style scoped>
  .test-component {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
  }
  </style>
  