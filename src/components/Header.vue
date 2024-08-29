<template>
  <header class="header">
    <img src="/logos.png" alt="School Logo" class="logo" />
    <nav class="nav-links">
      <router-link to="/studentdashboard" class="nav-link">Home</router-link>
      <router-link to="/reservations" class="nav-link">My Reservations</router-link>
      <router-link to="/profile" class="nav-link">Profile</router-link>
      <router-link to="/studentchat" class="nav-link">Chat</router-link>
      <router-link to="/quickactions" class="nav-link">Quick Actions</router-link>
      <router-link to="/notifications" class="nav-link">
        <span class="material-icons" @click="navigateToNotifications">notifications</span>
      </router-link>
    </nav>
    <div class="search-bar">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Search..." 
        @input="handleSearch" 
      />
      <button @click="handleSearch">Search</button>
    </div>
    <button @click="logout" class="logout-btn">Logout</button>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      searchQuery: '', // Holds the value of the search input
    };
  },
  methods: {
    logout() {
      // Logout logic here
      this.$router.push('/');
    },
    navigateToNotifications() {
      this.$router.push('/notifications');
    },
    handleSearch() {
      console.log('Search query:', this.searchQuery);
      // Add your search logic here, such as navigating to a search results page
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

/* Navigation styles */
.nav-links {
  display: flex;
  align-items: center;
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

/* Search bar styles */
.search-bar {
  display: flex;
  align-items: center;
}

.search-bar input {
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 10px;
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
