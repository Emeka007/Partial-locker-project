<template>
    <div class="reservation-page">
      <Header />
      <main class="reservation-content">
        <h1>Reservation Details</h1>
        <div class="reservation-item">
          <img :src="require(`@/assets/${itemImage}`)" :alt="itemName" class="reservation-image" />
          <div class="reservation-info">
            <h2>{{ itemName }}</h2>
            <p><strong>From:</strong> {{ itemFrom }}</p>
            <p><strong>Description:</strong> {{ itemDescription }}</p>
          </div>
        </div>
  
        <!-- Form Section -->
        <form @submit.prevent="confirmBooking" class="reservation-form">
          <div class="form-group">
            <label for="fromDate">From Date:</label>
            <input type="date" id="fromDate" v-model="fromDate" required />
          </div>
          
          <div class="form-group">
            <label for="toDate">To Date:</label>
            <input type="date" id="toDate" v-model="toDate" required />
          </div>
          
          <div class="form-group">
            <label for="note">Note:</label>
            <textarea id="note" v-model="note" placeholder="Add any notes" rows="4"></textarea>
          </div>
  
          <!-- Submit Button -->
          <button class="confirm-booking-btn" type="submit">Confirm Booking</button>
        </form>
      </main>
    </div>
  </template>
  
  <script>
import Header from '@/components/Header.vue';
import axios from 'axios';  // Import Axios for HTTP requests

export default {
  components: {
    Header,
  },
  data() {
    return {
      itemId: this.$route.params.itemId,
      itemName: this.$route.query.itemName,
      itemImage: this.$route.query.itemImage,
      itemDescription: this.$route.query.itemDescription,
      itemFrom: this.$route.query.itemFrom || 'Unknown',
      fromDate: '',
      toDate: '',
      note: '',
      userId: '3fa85f64-5717-4562-b3fc-2c963f66afa6', // Hardcoded User ID
      status: 'Pending', // Hardcoded Status
      statusDescription: 'Awaiting approval', // Hardcoded Status Description
    };
  },
  methods: {
    async confirmBooking() {
      // Prepare the request body
      const requestBody = {
        equipmentId: this.itemId,
        userId: this.userId,
        fromDate: this.fromDate,
        toDate: this.toDate,
        status: this.status,
        statusDescription: this.statusDescription,
        note: this.note,
      };

      try {
        // Send the POST request to the API
        const response = await axios.post('https://localhost:7075/api/Reservations', requestBody);
        
        // Handle the response (success message or further action)
        console.log('Reservation Confirmed:', response.data);
        alert('Reservation confirmed successfully!');
      } catch (error) {
        // Handle error (e.g., network issues, server errors)
        console.error('Error confirming reservation:', error);
        alert('There was an error confirming your reservation. Please try again.');
      }
    },
  },
};
</script>

<style scoped>
.reservation-page {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  color: #333;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #2c3e50;
}

.reservation-content {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.reservation-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 20px;
}

.reservation-image {
  max-width: 200px;
  border-radius: 8px;
  margin-right: 20px;
}

.reservation-info {
  flex: 1;
}

.reservation-info h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.reservation-info p {
  margin: 5px 0;
  font-size: 1rem;
  line-height: 1.5;
}

.reservation-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #2c3e50;
}

input[type="date"],
textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
}

button.confirm-booking-btn {
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button.confirm-booking-btn:hover {
  background-color: #2980b9;
}

/* Responsive Design */
@media (max-width: 768px) {
  .reservation-item {
    flex-direction: column;
    text-align: center;
  }
  
  .reservation-image {
    margin-bottom: 15px;
    max-width: 100%;
  }
}
</style>
  