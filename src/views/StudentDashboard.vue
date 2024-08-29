<template>
  <div class="dashboard">
    <Header /> <!-- The Header component with the search bar -->

    <main class="main-content">
      <div class="welcome-section">
        <h1>Welcome, {{ studentName }}!</h1>
        <p>Student ID: {{ studentId }}</p>
      </div>

      <!-- Category Section -->
      <div class="categories">
        <h5>Category</h5>
        <div class="category-container">
          <div
            class="category"
            v-for="category in categories"
            :key="category.name"
            @click="filterByCategory(category.name)"
          >
            <span class="material-icons">{{ category.icon }}</span>
            <span class="category-name">{{ category.name }}</span>
          </div>
        </div>
      </div>

      <!-- Top Search Section -->
      <div class="top-search-section">
        <h5>Top Search</h5>
        <div class="top-search-item" v-for="item in filteredTopSearchItems" :key="item.title">
          <img :src="require(`@/assets/${item.imageSrc}`)" :alt="item.title" class="top-search-image" />
          <div class="top-search-content">
            <h3>{{ item.title }}</h3>
            <p>From: {{ item.from }}</p>
            <p>Note: {{ item.note }}</p>
          </div>
          <button class="book-now-btn" @click="goToReservations">Book Now</button>
        </div>
      </div>
      
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      studentName: 'John Doe',
      studentId: '123456',
      selectedCategory: null, // Track the selected category
      categories: [
        { name: 'Technology', icon: 'memory' },
        { name: 'Nursing', icon: 'medical_services' },
        { name: 'Business', icon: 'business_center' },
        { name: 'Engineering', icon: 'engineering' },
        { name: 'Chemistry', icon: 'science' },
      ],
      topSearchItems: [
        { title: 'Raspberry Pi', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...', category: 'Technology', imageSrc: 'Raspberry_Pi_B+_illustration.svg.png' },
        { title: 'Syringe Pack', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...', category: 'Nursing', imageSrc: 'Syringe-Pack.png' },
        { title: 'Defibrillator', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...', category: 'Nursing', imageSrc: 'Defibrillator.jpg' },
        { title: 'Chemistry Lab Kit', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...', category: 'Chemistry', imageSrc: 'chemlabkit.jpg' },
        { title: 'SAP TOOL', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...', category: 'Business', imageSrc: 'sap.png' },
        { title: 'Cable Tester', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...', category: 'Technology', imageSrc: 'Cable-Tester.png' },
        { title: 'Nursing Simulation Manikin', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...', category: 'Nursing', imageSrc: 'Nursing Simulation Manikin.png' },
        { title: 'Blood Pressure Monitor', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...', category: 'Nursing', imageSrc: 'Blood-Pressure-Monitor.png' },
        { title: 'Engineering Tools', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...', category: 'Engineering', imageSrc: 'enginner.jpeg' },
        { title: 'Financial Management', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...', category: 'Business', imageSrc: 'Finance.jpeg' },
        { title: 'Arduino Uno Kit', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...', category: 'Technology', imageSrc: 'Arduino-Uno-Kit.png' },
        { title: 'Network Switch', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...', category: 'Technology', imageSrc: 'Network-Switch.png' },
        { title: 'Stethoscope', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...', category: 'Nursing', imageSrc: 'Stethoscope.jpeg' }
      ],
    };
  },
  computed: {
    filteredTopSearchItems() {
      if (!this.selectedCategory) return this.topSearchItems;
      return this.topSearchItems.filter(item => item.category === this.selectedCategory);
    },
  },
  methods: {
    filterByCategory(categoryName) {
      this.selectedCategory = categoryName;
    },
    goToReservations() {
      this.$router.push('/booked-item');
    },
  },
};
</script>


<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f4f4f9;
}

.header {
  width: 100%;
}

.main-content {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.welcome-section {
  text-align: center;
  margin-bottom: 30px;
}

.welcome-section h1 {
  font-size: 2.5rem;
  color: #333;
}

.welcome-section p {
  font-size: 1.2rem;
  color: #666;
}

/* Category Section */
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

/* Top Search Section */
.top-search-section {
  margin-top: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.top-search-section h5 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 15px;
}

.top-search-item {
  display: flex;
  align-items: flex-start;
  padding: 15px;
  border-radius: 8px;
  transition: background-color 0.3s;
  position: relative;
}

.top-search-item:hover {
  background-color: #f9f9f9;
}

.top-search-image {
  width: 120px; /* Increased size */
  height: auto;
  margin-right: 20px;
}

.top-search-content {
  flex-grow: 1;
}

.top-search-content h3 {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}

.top-search-content p {
  margin: 5px 0;
  font-size: 1rem;
  color: #666;
}

.book-now-btn {
  background-color: #e10e49;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: absolute;
  bottom: 15px;
  right: 15px;
}

.book-now-btn:hover {
  background-color: #c00e3c;
}
</style>
