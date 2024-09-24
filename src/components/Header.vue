<template>
  <header class="header">
    <img src="/logos.png" alt="School Logo" class="logo" />

    <!-- Mobile Nav Bar at the bottom -->
    <nav class="mobile-nav">
      <router-link to="/studentdashboard" class="mobile-nav-link">
        <i class="fas fa-home"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/reservations" class="mobile-nav-link">
        <i class="fas fa-calendar-alt"></i>
        <span>My Reservations</span>
      </router-link>
      <router-link to="/profile" class="mobile-nav-link">
        <i class="fas fa-user"></i>
        <span>Profile</span>
      </router-link>
      <router-link to="/studentchat" class="mobile-nav-link">
        <i class="fas fa-comments"></i>
        <span>Chat</span>
      </router-link>
      <router-link to="/quickactions" class="mobile-nav-link">
        <i class="fas fa-bolt"></i>
        <span>Quick Actions</span>
      </router-link>
    </nav>

    <div class="search-bar-container">
      <div class="search-bar">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search..." 
          @input="handleSearch" 
        />
        <i class="fas fa-search search-icon"></i>
        <button @click="handleSearch">Search</button>
      </div>

      <div class="icon-container">
        <!-- Profile Image -->
        <img src="@/assets/john.jpg" alt="Profile" class="profile-image" />

        <!-- Notification Bell Icon -->
        <div class="notification-bell" @click="toggleNotificationPopup">
          <i class="fas fa-bell"></i>
          <!-- Unread notification badge -->
          <span v-if="unreadCount" class="badge">{{ unreadCount }}</span>
        </div>

        <!-- Notification Popup -->
        <div v-if="showNotifications" class="notification-popup">
          <ul v-if="notifications.length">
            <li v-for="notification in notifications" :key="notification.id">
              <a :href="notification.link">{{ notification.message }}</a>
            </li>
          </ul>
          <div v-else>No unread notifications.</div>
        </div>

        <!-- Logout Button -->
        <button @click="logout" class="logout-btn">
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      searchQuery: '', // Holds the value of the search input
      showNotifications: false, // Controls notification popup visibility
      unreadCount: 2, // Number of unread notifications
      notifications: [
        { id: 1, message: 'You have a new reservation.', link: '#' },
        { id: 2, message: 'Upcoming deadline for locker 101.', link: '#' },
      ], // Example notifications
    };
  },
  methods: {
    toggleNotificationPopup() {
      this.showNotifications = !this.showNotifications; // Toggle notification popup
    },
    logout() {
      // Logout logic here
      this.$router.push('/');
    },
    handleSearch() {
      console.log('Search query:', this.searchQuery);
      // Add your search logic here, such as navigating to a search results page
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
  background-color: #e10e49;
}

.logo {
  height: 75px;
  width: auto;
  margin-bottom: 20px;
}

.mobile-nav {
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #e10e49;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}

.mobile-nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-decoration: none; /* Ensure no underline */
  font-size: 12px;
}

.mobile-nav-link i {
  font-size: 24px;
  margin-bottom: 5px;
}

.mobile-nav-link:hover {
  color: #555; /* Change color on hover */
  text-decoration: none; /* Ensure no underline on hover */
}

/* Search Bar & Icons */
.search-bar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  margin: 20px 0;
}

.search-bar {
  display: flex;
  align-items: center;
  position: relative;
  flex-grow: 1;
}

.search-bar input {
  padding: 5px 30px 5px 30px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 10px;
  width: 100%;
}

.search-bar .search-icon {
  position: absolute;
  left: 10px;
  color: #aaa;
}

.search-bar button {
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #0056b3;
}

/* Icon container to arrange profile, bell, and logout */
.icon-container {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.profile-image {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 20px;
}

/* Notification Bell Icon */
.notification-bell {
  position: relative;
  cursor: pointer;
  margin-right: 20px;
}

.notification-bell i {
  font-size: 24px;
  color: white;
}

.badge {
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
}

/* Notification Popup */
.notification-popup {
  position: absolute;
  top: 40px;
  right: 0;
  background-color: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 300px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 2000;
  border-radius: 8px;
  padding: 10px;
}

.notification-popup ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.notification-popup li {
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}

.notification-popup a {
  color: #007bff;
  text-decoration: none;
}

.notification-popup a:hover {
  text-decoration: underline;
}

/* Logout Button */
.logout-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.logout-btn i {
  font-size: 24px;
  color: white;
}

.logout-btn:hover i {
  color: #555;
}
</style>
