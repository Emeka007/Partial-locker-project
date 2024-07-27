<template>
  <div class="reservations">
    <Header />

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
import Header from '@/components/Header.vue'; // Import the Header component
import JsBarcode from 'jsbarcode'; // Import JsBarcode library

export default {
  components: {
    Header, // Register the Header component
  },
  data() {
    return {
      currentReservations: [
        { id: 1, lockerNumber: '123456843', item: 'Raspberry Pi', reservationDate: '2024-06-25', returnDeadline: '2024-07-25' },
        { id: 2, lockerNumber: '789456123', item: 'Syringe Kit', reservationDate: '2024-06-20', returnDeadline: '2024-07-20' },
      ],
      reservationHistory: [
        { id: 3, lockerNumber: '654321789', item: 'Microscope', reservationDate: '2023-12-15', returnDate: '2024-01-10' },
        { id: 4, lockerNumber: '987654321', item: 'Chemistry Set', reservationDate: '2023-11-30', returnDate: '2024-01-05' },
      ],
    };
  },
  mounted() {
    this.generateBarcodes();
  },
  methods: {
    generateBarcodes() {
      this.currentReservations.forEach(reservation => {
        this.generateBarcode(reservation.lockerNumber);
      });
      this.reservationHistory.forEach(reservation => {
        this.generateBarcode(reservation.lockerNumber);
      });
    },
    generateBarcode(lockerNumber) {
      const element = document.getElementById('barcode-' + lockerNumber);
      if (element) {
        JsBarcode(element, lockerNumber, {
          format: "CODE128",
          lineColor: "#0aa",
          width: 2,
          height: 50,
          displayValue: true
        });
      }
    }
  }
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
</style>
