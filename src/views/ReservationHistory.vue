<!-- src/components/ReservationHistory.vue -->
<template>
    <div class="reservation-history">
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
        <span :class="{ highlighted: currentStatus === 'Booked' }" @click="navigateToMyReservation('Booked')">Booked</span>
        <span :class="{ highlighted: currentStatus === 'Received' }" @click="currentStatus = 'Received'">Received</span>
        <span :class="{ highlighted: currentStatus === 'Returned' }" @click="navigateToReturnedItem('Returned')">Returned</span>
      </div>
    </section>

    <div class="top-search-section">
        
      <div class="top-search-section">
      <div class="top-search-item" @click="goToBookedItem(1)">
        <img src="@/assets/Raspberry_Pi_B+_illustration.svg.png" alt="Raspberry Pi" class="top-search-image" />
        <div class="top-search-content">
          <h3>Raspberry Pi</h3>
          <p>From: Chukwuemeka Obanya</p>
          <p>Note: I’ll be letting this out ...</p>
        </div>
      </div>
          
        </div>
        <div class="top-search-item">
          <img src="@/assets/Syringe-Pack.png" alt="Syringe Pack" class="top-search-image" />
          <div class="top-search-content">
            <h3>Syringe Pack</h3>
            <p>From: Chukwuemeka Obanya</p>
            <p>Note: I’ll be letting this out ...</p>
          </div>
          
        </div>
        <div class="top-search-item">
          <img src="@/assets/Defibrillator.jpg" alt="Defibrillator" class="top-search-image" />
          <div class="top-search-content">
            <h3>Defibrillator</h3>
            <p>From: Chukwuemeka Obanya</p>
            <p>Note: I’ll be letting this out ...</p>
          </div>
         
        </div>
        <div class="top-search-item">
          <img src="@/assets/chemlabkit.jpg" alt="chemlabkit" class="top-search-image" />
          <div class="top-search-content">
            <h3>Chemistry Lab Kit</h3>
            <p>From: Chukwuemeka Obanya</p>
            <p>Note: I’ll be letting this out ...</p>
          </div>
          
        </div>
        
        <div class="top-search-item">
          <img src="@/assets/Cable-Tester.png" alt="Cable-Tester" class="top-search-image" />
          <div class="top-search-content">
            <h3>Cable Tester</h3>
            <p>From: Chukwuemeka Obanya</p>
            <p>Note: I’ll be letting this out ...</p>
          </div>
          
        </div>
        <div class="top-search-item">
          <img src="@/assets/Nursing Simulation Manikin.png" alt="Nursing Simulation Manikin" class="top-search-image" />
          <div class="top-search-content">
            <h3>Nursing Simulation Manikin</h3>
            <p>From: Chukwuemeka Obanya</p>
            <p>Note: I’ll be letting this out ...</p>
          </div>
         
        </div>
        <div class="top-search-item">
          <img src="@/assets/Blood-Pressure-Monitor.png" alt="Blood Pressure Monitor" class="top-search-image" /> 
          <div class="top-search-content">
            <h3>Blood Pressure Monitor</h3>
            <p>From: Chukwuemeka Obanya</p>
            <p>Note: I’ll be letting this out ...</p>
          </div>
          
        </div>
        <div class="top-search-item">
          <img src="@/assets/Arduino-Uno-Kit.png" alt="Arduino Uno Kit" class="top-search-image" /> 
          <div class="top-search-content">
            <h3>Arduino Uno Kit</h3>
            <p>From: Chukwuemeka Obanya</p>
            <p>Note: I’ll be letting this out ...</p>
          </div>
          
        </div>
        <div class="top-search-item">
          <img src="@/assets/Network-Switch.png" alt="Network Switch" class="top-search-image" /> 
          <div class="top-search-content">
            <h3>Network Switch</h3>
            <p>From: Chukwuemeka Obanya</p>
            <p>Note: I’ll be letting this out ...</p>
          </div>
          
        </div>
        <div class="top-search-item">
          <img src="@/assets/Stethoscope.jpeg" alt="Stethoscope" class="top-search-image" /> 
          <div class="top-search-content">
            <h3>Stethoscope</h3>
            <p>From: Chukwuemeka Obanya</p>
            <p>Note: I’ll be letting this out ...</p>
          </div>
          
        </div>


      </div>

    <!-- Current Reservations Section -->
    <section>
      <h2>Current Reservations</h2>
      <ul v-if="currentReservations.length === 0">
        <li class="empty-message">You have no current reservations.</li>
      </ul>
      <ul v-else>
        <li v-for="reservation in currentReservations" :key="reservation.id" class="reservation-item">
          <div>
            <strong>Locker Number:</strong> {{ reservation.lockerNumber }}<br />
            <strong>Item:</strong> {{ reservation.item }}<br />
            <strong>Reservation Date:</strong> {{ reservation.reservationDate }}<br />
            <strong>Return Deadline:</strong> {{ reservation.returnDeadline }}
          </div>
          <div class="barcode">
            <svg :id="'barcode-' + reservation.lockerNumber"></svg>
          </div>
        </li>
      </ul>
    </section>

    <!-- Reservation History Section -->
    <section>
      <h2>Reservation History</h2>
      <ul v-if="reservationHistory.length === 0">
        <li class="empty-message">No reservation history available.</li>
      </ul>
      <ul v-else>
        <li v-for="reservation in reservationHistory" :key="reservation.id" class="reservation-item">
          <div>
            <strong>Locker Number:</strong> {{ reservation.lockerNumber }}<br />
            <strong>Item:</strong> {{ reservation.item }}<br />
            <strong>Reservation Date:</strong> {{ reservation.reservationDate }}<br />
            <strong>Return Date:</strong> {{ reservation.returnDate }}
          </div>
          <div class="barcode">
            <svg :id="'barcode-' + reservation.lockerNumber"></svg>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'; 
import JsBarcode from 'jsbarcode';
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router'; 

export default {
  components: {
    Header,
  },
  setup() {
    const route = useRoute();
    const categories = ref([
      { name: 'Technology', icon: 'memory' },
      { name: 'Nursing', icon: 'medical_services' },
      { name: 'Business', icon: 'business_center' },
      { name: 'Engineering', icon: 'engineering' },
      { name: 'Chemistry', icon: 'science' },
    ]);

    const currentReservations = ref([
      { id: 1, lockerNumber: '123456843', item: 'Raspberry Pi', reservationDate: '2024-06-25', returnDeadline: '2024-07-25' },
      { id: 2, lockerNumber: '789456123', item: 'Syringe Kit', reservationDate: '2024-06-20', returnDeadline: '2024-07-20' },
    ]);

    const reservationHistory = ref([
      { id: 3, lockerNumber: '654321789', item: 'Microscope', reservationDate: '2023-12-15', returnDate: '2024-01-10' },
      { id: 4, lockerNumber: '987654321', item: 'Chemistry Set', reservationDate: '2023-11-30', returnDate: '2024-01-05' },
    ]);

    const currentStatus = ref('Booked'); // Default status
    const statusFromQuery = route.query.status;

    watch(() => route.query.status, (newStatus) => {
      currentStatus.value = newStatus || 'Booked';
    });

    const filteredCurrentReservations = computed(() => {
      return currentReservations.value.filter(reservation => reservation.status === currentStatus.value);
    });

    const filteredReservationHistory = computed(() => {
      return reservationHistory.value.filter(reservation => reservation.status === currentStatus.value);
    });


    function navigateToMyReservation(status) {
      currentStatus.value = status;
      router.push({ name: 'ReservationHistory' });
    }

    function navigateToReturnedItem(status) {
      currentStatus.value = status;
      router.push({ name: 'ReturnedItem' });
    }
    function generateBarcodes() {
      filteredCurrentReservations.value.forEach(reservation => {
        generateBarcode(reservation.lockerNumber);
      });
      filteredReservationHistory.value.forEach(reservation => {
        generateBarcode(reservation.lockerNumber);
      });
    }

    function generateBarcode(lockerNumber) {
      const element = document.getElementById('barcode-' + lockerNumber);
      if (element) {
        JsBarcode(element, lockerNumber, {
          format: 'CODE128',
          lineColor: '#0aa',
          width: 2,
          height: 50,
          displayValue: true,
        });
      }
    }

    onMounted(() => {
      generateBarcodes();
    });

    return {
      categories,
      currentReservations,
      reservationHistory,
      currentStatus,
      filteredCurrentReservations,
      filteredReservationHistory,
      navigateToReturnedItem,
      navigateToMyReservation,
    };
  },
};
</script>
<style scoped>
.reservations {
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.empty-message {
  color: #666;
  font-style: italic;
}

ul {
  list-style-type: none;
  padding: 0;
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

/* Reservation Item */
.reservation-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.barcode svg {
  height: 50px; /* Adjust height of barcode */
}
.top-search-section {
  margin-bottom: 20px; /* Keep the existing margin for spacing within the section */
  padding-bottom: 50px; /* Add padding at the bottom to create space */
}

/* Optional: Ensure the padding is responsive by using a media query */
@media (max-width: 768px) {
  .top-search-section {
    padding-bottom: 30px; /* Adjust for smaller screens */
  }
}
</style>

