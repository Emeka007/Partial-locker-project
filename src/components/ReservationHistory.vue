<!-- src/components/ReservationHistory.vue -->
<template>
    <div class="reservation-history">
      <h2>Reservation History</h2>
      <FilterReservations
        :reservations="reservations"
        :updateFilteredReservations="updateFilteredReservations"
      />
      <table>
        <thead>
          <tr>
            <th>Locker #</th>
            <th>Item</th>
            <th>Category</th>
            <th>Reservation Date</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="reservation in filteredReservations" :key="reservation.id">
            <td>{{ reservation.lockerNumber }}</td>
            <td>{{ reservation.item }}</td>
            <td>{{ reservation.category }}</td>
            <td>{{ reservation.reservationDate }}</td>
            <td>{{ reservation.returnDate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import FilterReservations from './FilterReservations.vue';
  
  export default {
    components: {
      FilterReservations,
    },
    data() {
      return {
        reservations: [
          {
            id: 1,
            lockerNumber: '101',
            item: 'Raspberry Pi',
            category: 'Electronics',
            reservationDate: '2024-05-20',
            returnDate: '2024-05-25',
          },
          {
            id: 2,
            lockerNumber: '202',
            item: 'Syringe Kit',
            category: 'Medical',
            reservationDate: '2024-04-19',
            returnDate: '2024-04-24',
          },
        ],
        filteredReservations: [],
      };
    },
    mounted() {
      this.filteredReservations = this.reservations;
    },
    methods: {
      updateFilteredReservations(filtered) {
        this.filteredReservations = filtered;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  