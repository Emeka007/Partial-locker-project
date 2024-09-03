<template>
  <div class="profile">
    <Header class="header" />
    <div class="profile-container">
      <div class="buttons">
        <button @click="viewAllReservations" class="action-button">View All Reservations</button>
        <button @click="updateProfile" class="action-button">Update Profile</button>
        <button @click="manageNotifications" class="action-button">Manage Notifications</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'; // Import the Header component

export default {
  name: 'QuickActions',
  components: {
    Header, // Register the Header component
  },
  methods: {
    viewAllReservations() {
      // Navigate to the reservations page using the correct route name or path
      this.$router.push({ name: 'ReservationHistory' });
    },
    updateProfile() {
      // Navigate to the update profile page
      this.$router.push({ name: 'StudentProfile' });
    },
    manageNotifications() {
      // Navigate to the manage notifications page
      this.$router.push({ name: 'ManageNotifications' });
    }
  }
};
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.header {
  width: 100%;
}

.profile-container {
  padding: 20px;
  width: 100%;
  box-sizing: border-box; /* Ensure padding is included in the element's total width and height */
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.action-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.action-button:hover {
  background-color: #0056b3;
}
</style>
