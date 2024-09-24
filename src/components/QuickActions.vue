<template>
  <div class="profile">
    <Header class="header" />

    <div class="profile-container">
      <div class="buttons">
        <button @click="viewAllReservations" class="action-button">View All Reservations</button>
        <button @click="toggleEditProfile" class="action-button">Update Profile</button>
        <button @click="openNotificationsModal" class="action-button">Manage Notifications</button>
      </div>
    </div>

    <!-- Notifications Modal -->
    <!-- Same modal code as before -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'; 

export default {
  name: 'QuickActions',
  components: {
    Header, 
  },
  data() {
    return {
      showNotificationsModal: false,
    };
  },
  methods: {
    viewAllReservations() {
      this.$router.push({ name: 'ReservationHistory' });
    },
    toggleEditProfile() {
      // Navigate to the profile page and enable edit mode by setting ?edit=true
      this.$router.push({ name: 'StudentProfile', query: { edit: true } });
    },
    openNotificationsModal() {
      this.showNotificationsModal = true;
    },
    closeNotificationsModal() {
      this.showNotificationsModal = false;
    },
  },
};
</script>


<style scoped>
/* Profile container styling */
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
  box-sizing: border-box;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.action-button {
  background-color: #007bff;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #0056b3;
}

/* Notifications Modal Styling */
.notifications-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.notifications-modal {
  background: white;
  padding: 30px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-header h2 {
  font-size: 24px;
}

.close-modal-x {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.filter-options {
  margin-bottom: 20px;
  text-align: center;
}

.filter-options button {
  background-color: #f0f0f0;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.filter-options button:hover {
  background-color: #007bff;
  color: white;
}

.filter-options button.active {
  background-color: #007bff;
  color: white;
}

.notifications-list {
  list-style: none;
  padding: 0;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
}

.notification-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ccc;
}

.notification-item p {
  margin: 0;
}

.notification-actions {
  display: flex;
  gap: 10px;
}

.mark-read-btn,
.delete-btn {
  background-color: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
}

.mark-read-btn:hover,
.delete-btn:hover {
  color: #0056b3;
}

/* Close Modal Button */
.close-modal-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
}

.close-modal-button:hover {
  background-color: #c0392b;
}
</style>
