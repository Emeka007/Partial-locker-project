<template>
  <div class="dashboard">
    <Header /> <!-- Use the Header component -->
    <main class="main-content">
      <div class="welcome-section">
        <h1>Welcome, {{ studentName }}!</h1>
        <p>Student ID: {{ studentId }}</p>
      </div>
      <section class="reservations-section">
        <CurrentReservations />
      </section>
      <section class="filter-section">
        <FilterReservations />
      </section>
      <section class="deadlines-section">
        <UpcomingDeadlines />
      </section>
      <section class="history-section">
        <ReservationHistory />
      </section>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'; 
import CurrentReservations from '@/components/CurrentReservations.vue';
import FilterReservations from '@/components/FilterReservations.vue';
import UpcomingDeadlines from '@/components/UpcomingDeadlines.vue';
import ReservationHistory from '@/components/ReservationHistory.vue';

export default {
  components: {
    Header, 
    CurrentReservations,
    FilterReservations,
    UpcomingDeadlines,
    ReservationHistory,
  },
  data() {
    return {
      studentName: 'John Doe',
      studentId: '123456',
    };
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

section {
  margin-bottom: 40px;
}
</style>
