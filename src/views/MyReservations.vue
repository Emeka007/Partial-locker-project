<template>
  <div class="reservations">
    <Header />

    <!-- Category Section -->
    <div class="categories">
      <h5>Your interest</h5>
      <div class="category-container">
        <div class="category" v-for="category in categories" :key="category.name">
          <span class="material-icons">{{ category.icon }}</span>
          <span class="category-name">{{ category.name }}</span>
        </div>
      </div>
    </div>

    <!-- New Section with Booked, Received, Returned -->
    <section class="status-section">
      <div class="status">
        <span :class="{ highlighted: currentStatus === 'Booked' }" @click="currentStatus = 'Booked'">Booked</span>
        <span :class="{ highlighted: currentStatus === 'Received' }" @click="navigateToReservationHistory('Received')">Received</span>
        <span :class="{ highlighted: currentStatus === 'Returned' }" @click="navigateToReturnedItem('Returned')">Returned</span>
      </div>
    </section>

    <!-- Top Search Section -->
    <div class="top-search-section">
      

      <!-- Top Search Items from Data -->
      <div 
        class="top-search-item" 
        v-for="item in topSearchItems" 
        :key="item.id"
            >
        <img :src="require(`@/assets/${item.imageSrc}`)" :alt="item.altText" class="top-search-image" />
        <div class="top-search-content">
          <h3>{{ item.title }}</h3>
          <p>From: {{ item.from }}</p>
          <p>Note: {{ item.note }}</p>
        </div>
        <div class="barcode">
          <svg :id="'barcode-topsearch-' + item.id"></svg>
        </div>
      </div>
    </div>

    

  
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import JsBarcode from 'jsbarcode';

export default {
  components: { Header },
  data() {
    return {
      currentStatus: 'Booked',
      categories: [
      { name: 'Technology', icon: 'memory' },
      { name: 'Nursing', icon: 'medical_services' },
      { name: 'Business', icon: 'business_center' },
      { name: 'Engineering', icon: 'engineering' },
      { name: 'Chemistry', icon: 'science' },

      ],
      topSearchItems: [
        { id:  '847362509418', imageSrc: 'Raspberry_Pi_B+_illustration.svg.png', altText: 'Raspberry Pi', title: 'Raspberry Pi', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...' },
        { id: '905731642820', imageSrc: 'Syringe-Pack.png', altText: 'Syringe Pack', title: 'Syringe Pack', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...' },
        { id: '264839750194', imageSrc: 'Defibrillator.jpg', altText: 'Defibrillator', title: 'Defibrillator', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...' },
        { id: '398275610947', imageSrc: 'chemlabkit.jpg', altText: 'Chemistry Lab Kit', title: 'Chemistry Lab Kit', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...' },
        { id: '476290351826', imageSrc: 'Cable-Tester.png', altText: 'Cable Tester', title: 'Cable Tester', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...' },
        { id: '582761403297', imageSrc: 'Nursing Simulation Manikin.png', altText: 'Nursing Simulation Manikin', title: 'Nursing Simulation Manikin', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...' },
        { id: '738154920684', imageSrc: 'Blood-Pressure-Monitor.png', altText: 'Blood Pressure Monitor', title: 'Blood Pressure Monitor', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...' },
        { id: '619204837105', imageSrc: 'Arduino-Uno-Kit.png', altText: 'Arduino Uno Kit', title: 'Arduino Uno Kit', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...' },
        { id: '294750386172', imageSrc: 'Network-Switch.png', altText: 'Network Switch', title: 'Network Switch', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...' },
        { id: '847216539780', imageSrc: 'Stethoscope.jpeg', altText: 'Stethoscope', title: 'Stethoscope', from: 'Chukwuemeka Obanya', note: 'I’ll be letting this out ...' }
      ],
      currentReservations: [],
      reservationHistory: []
    };
  },
  mounted() {
    this.generateBarcodes();
  },
  methods: {
    generateBarcodes(lockerNumber) {
      // Generate barcodes for top search items
      this.topSearchItems.forEach(item => {
        JsBarcode(`#barcode-topsearch-${item.id}`, item.id,lockerNumber, {
          format: 'CODE39',
          displayValue: false,
          lineColor: '#0aa',
          width: 2,
          height: 40
        });
      });
      
      // Generate barcode for each current reservation
      this.currentReservations.forEach(reservation => {
        JsBarcode(`#barcode-${reservation.lockerNumber}`, reservation.lockerNumber, {
          format: 'CODE39',
          displayValue: false,
          width: 2,
          height: 40
        });
      });

      // Generate barcode for each reservation history item
      this.reservationHistory.forEach(reservation => {
        JsBarcode(`#barcode-history-${reservation.id}`, reservation.id, {
          format: 'CODE39',
          displayValue: false,
          lineColor: '#0aa',
          width: 2,
          height: 40
        });
      });
    },
    goToBookedItem(id) {
      // Handle click for booked items
      this.$router.push({ name: 'BookedItem', params: { id } });
    },
    navigateToReservationHistory(status) {
      // Handle click for reservation history
      this.$router.push({ name: 'ReservationHistory', params: { status } });
    },
    navigateToReturnedItem(status) {
      // Handle click for returned items
      this.$router.push({ name: 'ReturnedItem', params: { status } });
    }
  }
};
</script>

<style scoped>
.reservations {
  font-family: Arial, sans-serif;
}

h2, h5 {
  font-size: 24px;
  margin-bottom: 10px;
}

.top-search-section, section {
  margin-bottom: 20px;
}

.category-container {
  display: flex;
  gap: 10px;
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


.material-icons {
  font-size: 24px;
  margin-right: 5px;
}
/* Status Section */
.status-section {
  margin-top: 30px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.status {
  display: flex;
  justify-content: space-around;
}

.status span {
  font-size: 1rem;
  font-weight: 500;
  padding: 10px 20px;
  cursor: pointer;
  transition: color 0.3s, border-bottom 0.3s;
  position: relative;
}

.status span.highlighted {
  color: #0a0; /* Green color for highlighted status */
  border-bottom: 2px solid #0a0; /* Green underline for highlighted status */
}

.status span:not(.highlighted) {
  color: #666;
  border-bottom: 2px solid transparent; /* No underline for non-highlighted status */
}


.highlighted {
  font-weight: bold;
}

.top-search-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.top-search-image {
  width: 100px;
  height: auto;
  margin-right: 10px;
}

.top-search-content {
  flex-grow: 1;
}

.barcode svg {
  margin-left: 10px;
}

.empty-message {
  color: #888;
}

.reservation-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>


