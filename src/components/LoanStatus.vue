<template>
  <div class="loan-status-page">
    <Header />

    <main class="main-content">
      <div class="loan-status-container">
        <h1>Loan Status</h1>

        <!-- Display the loan status message -->
        <div class="loan-status">
          <p>
            <span class="material-icons cancel-icon">cancel</span>
            <span class="on-loan-text">On loan</span> - Maturity date: <strong>{{ formattedDueDate }}</strong>
          </p>
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
      // The due date for the item
      dueDate: new Date('2024-11-04T00:00:00'),
    };
  },
  computed: {
    // Format the due date for display
    formattedDueDate() {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return this.dueDate.toLocaleDateString('en-US', options);
    },
  },
};
</script>

<style scoped>
/* Overall Page Styling */
.loan-status-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f4f4f9;
}

.main-content {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Loan Status Section */
.loan-status-container {
  text-align: center;
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 500px;
}

.loan-status-container h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
}

.loan-status {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.loan-status p {
  font-size: 1.2rem;
  color: #555;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loan-status .cancel-icon {
  font-size: 24px;
  color: #e10e49;
  margin-right: 10px;
}

.on-loan-text {
  color: #e10e49; /* Red color for "On loan" text */
  font-weight: bold;
}

.loan-status strong {
  color: #333;
  font-weight: bold;
}
</style>
