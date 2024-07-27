<template>
  <div class="upcoming-reservations">
    <h2>Upcoming Reservations</h2>
    <div class="sort-filter-options">
      <label for="sort-by">Sort by:</label>
      <select v-model="sortBy" @change="sortReservations">
        <option value="new-arrivals">New Arrivals</option>
        <option value="rating">Rating</option>
        <option value="popularity">Popularity</option>
        <option value="a-z">A-Z</option>
      </select>
      
      <label for="category-filter">Filter by :</label>
      <select v-model="categoryFilter" @change="filterReservations">
        <option value="">All Categories</option>
        <option value="IT Students">IT Students</option>
        <option value="Nursing">Nursing</option>
        <option value="IT Helpdesk">IT Helpdesk</option>
      </select>
      
      <button @click="showAddItemModal">Add Item</button>
    </div>

    <div class="reservations-list">
      <div v-for="reservation in filteredAndSortedReservations" :key="reservation.id" class="reservation-card">
        <div class="card-header">
          <h3>{{ reservation.item }}</h3>
          <p>{{ reservation.category }}</p>
        </div>
        <div class="card-body">
          <p><strong>Locker #:</strong> {{ reservation.lockerNumber }}</p>
          <p><strong>Status:</strong> {{ reservation.status }}</p>
          <p><strong>Rating:</strong> {{ reservation.rating }}</p>
          <p><strong>Popularity:</strong> {{ reservation.popularity }}</p>
        </div>
      </div>
    </div>

    <modal v-if="showModal" @close="closeAddItemModal">
      <template v-slot:header>
        <h3>Add New Item</h3>
      </template>
      <template v-slot:body>
        <label for="new-item">Item:</label>
        <input v-model="newItem.item" id="new-item" />

        <label for="new-category">Category:</label>
        <input v-model="newItem.category" id="new-category" />


        <label for="new-status">Status:</label>
        <input v-model="newItem.status" id="new-status" />

        <label for="new-rating">Rating:</label>
        <input v-model="newItem.rating" id="new-rating" type="number" step="0.1" min="0" max="5" />

        <label for="new-popularity">Popularity:</label>
        <input v-model="newItem.popularity" id="new-popularity" type="number" />
      </template>
      <template v-slot:footer>
        
      </template>
    </modal>
  </div>
</template>

<script>
import JsBarcode from 'jsbarcode';
export default {
  data() {
    return {
      sortBy: 'new-arrivals',
      categoryFilter: '',
      showModal: false,
      newItem: {
        item: '',
        category: '',
        status: '',
        rating: null,
        popularity: null,
      },
      reservations: [
    { id: 1, lockerNumber: 'A1', item: 'Raspberry Pi', category: 'IT Students', status: 'Available', rating: 4.5, popularity: 100 },
    { id: 2, lockerNumber: 'A2', item: 'Syringe', category: 'Nursing', status: 'Available', rating: 4.0, popularity: 80 },
    { id: 3, lockerNumber: 'A3', item: 'Tools', category: 'IT Helpdesk', status: 'Available', rating: 4.8, popularity: 95 },
    { id: 4, lockerNumber: 'A4', item: 'Textbook', category: 'IT Students', status: 'Available', rating: 3.5, popularity: 45 },
    { id: 5, lockerNumber: 'A5', item: 'Laptop', category: 'IT Students', status: 'Available', rating: 4.7, popularity: 110 },
    { id: 6, lockerNumber: 'A6', item: 'Medical Kit', category: 'Nursing', status: 'Available', rating: 4.2, popularity: 60 },
    { id: 7, lockerNumber: 'A7', item: 'Soldering Iron', category: 'IT Students', status: 'Available', rating: 4.3, popularity: 70 },
    { id: 8, lockerNumber: 'A8', item: 'Stethoscope', category: 'Nursing', status: 'Available', rating: 4.6, popularity: 65 },
    { id: 9, lockerNumber: 'A9', item: 'Network Cable', category: 'IT Helpdesk', status: 'Available', rating: 4.0, popularity: 40 },
    { id: 10, lockerNumber: 'A10', item: 'Injection Kit', category: 'Nursing', status: 'Available', rating: 4.1, popularity: 50 },
    { id: 11, lockerNumber: 'A11', item: 'Projector', category: 'IT Students', status: 'Available', rating: 3.8, popularity: 30 },
    { id: 12, lockerNumber: 'A12', item: 'Monitor', category: 'IT Helpdesk', status: 'Available', rating: 4.4, popularity: 75 },
    { id: 13, lockerNumber: 'A13', item: 'Medical Record Sheets', category: 'Nursing', status: 'Available', rating: 4.2, popularity: 55 },
    { id: 14, lockerNumber: 'A14', item: 'Diagnostic Tools', category: 'IT Helpdesk', status: 'Available', rating: 4.0, popularity: 35 },
    { id: 15, lockerNumber: 'A15', item: 'Exam Papers', category: 'IT Students', status: 'Available', rating: 3.7, popularity: 45 },
    { id: 16, lockerNumber: 'A16', item: 'Defibrillator', category: 'Nursing', status: 'Available', rating: 4.9, popularity: 95 },
    { id: 17, lockerNumber: 'A17', item: 'Multimeter', category: 'IT Students', status: 'Available', rating: 4.6, popularity: 60 },
    { id: 18, lockerNumber: 'A18', item: 'Oxygen Mask', category: 'Nursing', status: 'Available', rating: 4.7, popularity: 85 },
    { id: 19, lockerNumber: 'A19', item: 'Breadboard', category: 'IT Students', status: 'Available', rating: 4.3, popularity: 50 },
    { id: 20, lockerNumber: 'A20', item: 'IV Drip', category: 'Nursing', status: 'Available', rating: 4.1, popularity: 60 },
    { id: 21, lockerNumber: 'A21', item: 'Ethernet Switch', category: 'IT Helpdesk', status: 'Available', rating: 4.5, popularity: 100 },
    { id: 22, lockerNumber: 'A22', item: 'Wheelchair', category: 'Nursing', status: 'Available', rating: 4.8, popularity: 90 },
    { id: 23, lockerNumber: 'A23', item: 'Transistor Kit', category: 'IT Students', status: 'Available', rating: 4.6, popularity: 55 },
    { id: 24, lockerNumber: 'A24', item: 'Blood Pressure Monitor', category: 'Nursing', status: 'Available', rating: 4.9, popularity: 80 },
    { id: 25, lockerNumber: 'A25', item: 'Screwdriver Set', category: 'IT Helpdesk', status: 'Available', rating: 4.3, popularity: 70 },
    { id: 26, lockerNumber: 'A26', item: 'Surgical Gloves', category: 'Nursing', status: 'Available', rating: 4.0, popularity: 65 },
    { id: 27, lockerNumber: 'A27', item: 'Microcontroller', category: 'IT Students', status: 'Available', rating: 4.5, popularity: 120 },
    { id: 28, lockerNumber: 'A28', item: 'First Aid Kit', category: 'Nursing', status: 'Available', rating: 4.6, popularity: 100 },
    { id: 29, lockerNumber: 'A29', item: 'Ethernet Cable', category: 'IT Helpdesk', status: 'Available', rating: 4.2, popularity: 85 },
    { id: 30, lockerNumber: 'A30', item: 'Medical Scissors', category: 'Nursing', status: 'Available', rating: 4.4, popularity: 90 },
    { id: 31, lockerNumber: 'A31', item: 'Breadboard', category: 'IT Students', status: 'Available', rating: 4.3, popularity: 75 },
    { id: 32, lockerNumber: 'A32', item: 'Syringe', category: 'Nursing', status: 'Available', rating: 4.1, popularity: 55 },
    { id: 33, lockerNumber: 'A33', item: 'Raspberry Pi', category: 'IT Students', status: 'Available', rating: 4.7, popularity: 80 },
    { id: 34, lockerNumber: 'A34', item: 'Stethoscope', category: 'Nursing', status: 'Available', rating: 4.9, popularity: 70 },
    { id: 35, lockerNumber: 'A35', item: 'Ethernet Cable', category: 'IT Helpdesk', status: 'Available', rating: 4.0, popularity: 60 },
    { id: 36, lockerNumber: 'A36', item: 'Injection Kit', category: 'Nursing', status: 'Available', rating: 4.3, popularity: 85 },
    { id: 37, lockerNumber: 'A37', item: 'Projector', category: 'IT Students', status: 'Available', rating: 4.5, popularity: 110 },
    { id: 38, lockerNumber: 'A38', item: 'Thermometer', category: 'Nursing', status: 'Available', rating: 4.4, popularity: 95 },
    { id: 39, lockerNumber: 'A39', item: 'Server Rack', category: 'IT Helpdesk', status: 'Available', rating: 4.5, popularity: 100 },
    { id: 40, lockerNumber: 'A40', item: 'Bandages', category: 'Nursing', status: 'Available', rating: 4.6, popularity: 90 },
    { id: 41, lockerNumber: 'A41', item: 'Oscilloscope', category: 'IT Students', status: 'Available', rating: 4.8, popularity: 120 },
    { id: 42, lockerNumber: 'A42', item: 'Defibrillator', category: 'Nursing', status: 'Available', rating: 4.9, popularity: 85 },
    { id: 43, lockerNumber: 'A43', item: 'Multimeter', category: 'IT Students', status: 'Available', rating: 4.6, popularity: 75 },
    { id: 44, lockerNumber: 'A44', item: 'Oxygen Mask', category: 'Nursing', status: 'Available', rating: 4.8, popularity: 90 },
    { id: 45, lockerNumber: 'A45', item: 'Breadboard', category: 'IT Students', status: 'Available', rating: 4.3, popularity: 65 },
    { id: 46, lockerNumber: 'A46', item: 'IV Drip', category: 'Nursing', status: 'Available', rating: 4.2, popularity: 55 },
    { id: 47, lockerNumber: 'A47', item: 'Ethernet Switch', category: 'IT Helpdesk', status: 'Available', rating: 4.5, popularity: 100 },
    { id: 48, lockerNumber: 'A48', item: 'Wheelchair', category: 'Nursing', status: ' Available ', rating: 4.7, popularity: 90 },
        { id: 49, lockerNumber: 'A49', item: 'Transistor Kit', category: 'IT Students', status: ' Available ', rating: 4.6, popularity: 75 },
        { id: 50, lockerNumber: 'A50', item: 'Blood Pressure Monitor', category: 'Nursing', status: ' Available ', rating: 4.8, popularity: 85 },
        { id: 51, lockerNumber: 'A51', item: 'Screwdriver Set', category: 'IT Helpdesk', status: ' Available ', rating: 4.2, popularity: 80 },
        { id: 52, lockerNumber: 'A52', item: 'Surgical Gloves', category: 'Nursing', status: ' Available ', rating: 4.4, popularity: 95 },
        { id: 53, lockerNumber: 'A53', item: 'Microcontroller', category: 'IT Students', status: ' Available ', rating: 4.5, popularity: 100 },
        { id: 54, lockerNumber: 'A54', item: 'First Aid Kit', category: 'Nursing', status: ' Available ', rating: 4.7, popularity: 85 },
        { id: 55, lockerNumber: 'A55', item: 'Ethernet Cable', category: 'IT Helpdesk', status: 'Available', rating: 4.1, popularity: 90 },
      ],
    };
  },
  computed: {
    filteredAndSortedReservations() {
      let filteredReservations = this.reservations;
      if (this.categoryFilter) {
        filteredReservations = filteredReservations.filter(reservation => reservation.category === this.categoryFilter);
      }
      return filteredReservations.sort((a, b) => {
        if (this.sortBy === 'new-arrivals') {
          return new Date(b.reservationDate) - new Date(a.reservationDate);
        } else if (this.sortBy === 'rating') {
          return b.rating - a.rating;
        } else if (this.sortBy === 'popularity') {
          return b.popularity - a.popularity;
        } else if (this.sortBy === 'a-z') {
          return a.item.localeCompare(b.item);
        }
      });
    }
  },
  methods: {
    sortReservations() {
      // This method will be triggered when the sort-by select box is changed
    },
    filterReservations() {
      // This method will be triggered when the category-filter select box is changed
    },
    generateBarcode(data) {
      const canvas = document.createElement('canvas');
      JsBarcode(canvas, data, {
        format: 'CODE128',
        displayValue: true,
      });
      return canvas.toDataURL('image/png');
    },
    showAddItemModal() {
      this.showModal = true;
    },
    closeAddItemModal() {
      this.showModal = false;
      this.newItem = {
        item: '',
        category: '',
        status: '',
        rating: null,
        popularity: null,
      };
    },
    addItem() {
      this.newItem.id = this.reservations.length + 1;
      this.reservations.push({ ...this.newItem });
      this.closeAddItemModal();
    },
  },
};
</script>

<style scoped>
.upcoming-reservations {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sort-filter-options {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.sort-filter-options label {
  margin-right: 10px;
}

.reservations-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.reservation-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: calc(33.333% - 20px);
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  margin-bottom: 10px;
}

.card-header h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.card-header p {
  font-size: 0.9rem;
  color: #666;
}

.card-body p {
  font-size: 0.9rem;
  color: #333;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

modal > div {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
}
</style>

