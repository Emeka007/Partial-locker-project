<template>
  <div class="filter-reservations">
    <div class="search-filters">
      <label for="search-item">Search by Item Name:</label>
      <input id="search-item" type="text" v-model="searchItem" />
      
      <label for="search-category">Search by Category:</label>
      <input id="search-category" type="text" v-model="searchCategory" />
    </div>
    <table class="reservation-table">
      <thead>
        <tr>
          <th>Locker #</th>
          <th>Item</th>
          <th>Category</th>
          <th>Reservation Date</th>
          <th>Deadline</th>
          <th>Barcode</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <!-- Example data; replace with actual data binding -->
        <tr v-for="reservation in reservations" :key="reservation.id">
          <td>{{ reservation.locker }}</td>
          <td>{{ reservation.item }}</td>
          <td>{{ reservation.category }}</td>
          <td>{{ reservation.reservationDate }}</td>
          <td>{{ reservation.deadline }}</td>
          <td>{{ reservation.barcode }}</td>
          <td>{{ reservation.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchItem: '',
      searchCategory: '',
      reservations: [
        // Example data
        { id: 1, locker: '101', item: 'Book', category: 'Education', reservationDate: '2023-06-01', deadline: '2023-06-10', barcode: '123456', status: 'Active' },
        // Add more reservation objects
      ],
    };
  },
};
</script>

<style scoped>
.filter-reservations {
  margin-bottom: 20px;
}

.search-filters {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.search-filters label {
  margin-right: 5px;
}

.reservation-table {
  width: 100%;
  border-collapse: collapse;
}

.reservation-table th,
.reservation-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.reservation-table th {
  background-color: #f2f2f2;
}
</style>
