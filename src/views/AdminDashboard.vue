<template>
    <div class="admin-dashboard">
      
  
      <!-- Summary Section -->
      <div class="summary-section">
        <h2>Summary</h2>
        <div class="summary-cards">
          <div class="card">
            <h3>Pending Borrow Requests</h3>
            <p>{{ pendingBorrowRequests }}</p>
          </div>
          <div class="card">
            <h3>Loaded Items</h3>
            <p>{{ loadedItems }}</p>
          </div>
          <div class="card">
            <h3>Returned Items</h3>
            <p>{{ returnedItems }}</p>
          </div>
        </div>
      </div>
  
      <!-- Notifications Section -->
      <div class="notifications-section">
        <h2>Important Notifications</h2>
        <ul>
          <li v-for="notification in notifications" :key="notification.id">
            {{ notification.message }}
          </li>
        </ul>
      </div>
  
      <!-- Quick Links Section -->
      <div class="quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li><router-link to="/item-management">Item Management</router-link></li>
          <li><router-link to="/borrow-requests">Borrow Requests</router-link></li>
          <li><router-link to="/loading-list">Loading List</router-link></li>
          <li><router-link to="/reserved-list">Reserved List</router-link></li>
          <li><router-link to="/returned-list">Returned List</router-link></li>
          <li><router-link to="/unloaded-list">Unloaded List</router-link></li>
          <li><router-link to="/adminprofile">Profile</router-link></li> 
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminDashboard',
    data() {
      return {
        // Mock data for the summary section
        pendingBorrowRequests: 20,
        loadedItems: 25,
        returnedItems: 18,
        
        // Mock notifications
        notifications: [
          { id: 1, message: 'Locker maintenance scheduled for Friday.' },
          { id: 2, message: 'New items have been added to the inventory.' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .admin-dashboard {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .summary-section {
    margin-bottom: 40px;
  }
  
  .summary-cards {
    display: flex;
    justify-content: space-between;
  }
  
  .card {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    width: 30%;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 18px;
    color: #333;
  }
  
  .notifications-section {
    margin-bottom: 40px;
  }
  
  .notifications-section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .notifications-section li {
    background-color: #ffefef;
    border-left: 4px solid #e83e8c;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .quick-links ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }
  
  .quick-links li {
    background-color: #f1f1f1;
    border-radius: 4px;
    margin: 5px;
    padding: 10px;
    text-align: center;
    flex: 1 1 30%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .quick-links li a {
    text-decoration: none;
    color: #007bff;
    font-size: 16px;
    display: block;
  }
  </style>
  