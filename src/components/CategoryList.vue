<template>
    <div class="categories">
      <h5>Category</h5>
      <div class="category-container">
        <div class="category" v-for="category in categories" :key="category.name">
          <span class="material-icons">{{ category.icon }}</span>
          <span class="category-name">{{ category.name }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: [
          { name: 'Technology', icon: 'memory' },
          { name: 'Nursing', icon: 'medical_services' },
          { name: 'Business', icon: 'business_center' },
          { name: 'Engineering', icon: 'engineering' },
          { name: 'Chemistry', icon: 'science' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .categories {
    padding: 20px;
    background-color: #f4f4f9;
    border-radius: 8px;
  }
  
  .categories h5 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  .category-container {
    display: flex;
    overflow-x: auto;
    padding: 10px 0;
    gap: 15px;
  }
  
  .category {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    min-width: 150px;
    transition: background-color 0.3s, box-shadow 0.3s;
  }
  
  .category:hover {
    background-color: #e10e49;
    color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .category .material-icons {
    font-size: 28px;
    color: #e10e49;
    margin-right: 10px;
  }
  
  .category-name {
    font-size: 1rem;
    font-weight: 500;
  }
  </style>
  