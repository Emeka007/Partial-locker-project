<template>
  <header class="header">
    <img src="/logos.png" alt="School Logo" class="logo" />
    <nav>
      <router-link to="/studentdashboard" class="nav-link">Home</router-link>
      <router-link to="/reservations" class="nav-link">My Reservations</router-link>
      <router-link to="/profile" class="nav-link">Profile</router-link>
      <router-link to="/quickactions" class="nav-link">QuickActions</router-link>
      <router-link to="/notifications" class="nav-link">
        <span class="material-icons" @click="navigateToNotifications">notifications</span>
      </router-link>
      
      <button @click="logout" class="logout-btn">Logout</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',

  methods: {
    logout() {
      // Logout logic here
      this.$router.push('/');
    },
    navigateToNotifications() {
      this.$router.push('/notifications');
    },
  },
};
</script>

<style scoped>
/* Header styles */
.header {
  background-color: #e10e49;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* School logo styles */
.logo {
  height: 75px;
  width: auto;
}

/* Navigation link styles */
.nav-link {
  text-decoration: none;
  color: #ffffff;
  padding: 10px;
  margin-right: 10px;
}

.nav-link:hover {
  color: #555;
  background-color: #ddd;
}

/* Material Icons styles */
.material-icons {
  font-size: 24px;
  cursor: pointer;
}

/* Logout button styles */
.logout-btn {
  background-color: #ffffff;
  color: #e10e49;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.logout-btn:hover {
  background-color: #ddd;
}
</style>
