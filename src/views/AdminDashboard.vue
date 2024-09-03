<template>
  <div class="admin-dashboard">
    <!-- Quick Links Section -->
    <div class="quick-links">
      <ul>
        <li><router-link to="/admindashboard"><i class="fas fa-tachometer-alt"></i> Dashboard</router-link></li>
        <li><router-link to="/item-management"><i class="fas fa-box"></i> Item Management</router-link></li>
        <li><router-link to="/borrow-requests"><i class="fas fa-handshake"></i> Borrow Requests</router-link></li>
        <li><router-link to="/reserved-items"><i class="fas fa-calendar-check"></i> Reservation List</router-link></li>
        <li><router-link to="/unloaded-list"><i class="fas fa-truck"></i> Unloaded Items</router-link></li>
        <li><router-link to="/adminprofile"><i class="fas fa-user"></i> Profile</router-link></li>
        <li><router-link to="/admin-settings"><i class="fas fa-cog"></i> Settings</router-link></li>
        <li><a href="#" @click="handleLogout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
      </ul>
    </div>

    <div class="content-section">
      <!-- Summary Section -->
      <div class="summary-section">
        <div class="header">
          <div class="dashboard-welcome">
            <h3>Dashboard</h3>
            <p class="welcome-text">Welcome Chukwuemeka!</p>
          </div>
          <div class="header-right">
            <input type="text" class="search-bar" placeholder="Search..." />
            <router-link to="/upload-pop">
              <button class="upload-button">Upload new item</button>
            </router-link>
          </div>
        </div>
        <div class="summary-filter">
          <select v-model="selectedTimeFrame" class="timeframe-dropdown">
            <option value="this-month">This Month</option>
            <option value="this-week">This Week</option>
            <option value="two-weeks-ago">Two Weeks Ago</option>
            <option value="six-months-ago">Six Months Ago</option>
          </select>
          <div class="summary-cards">
            <div class="card">
              <h3>Total items</h3>
              <p>{{ totalitems }}</p>
            </div>
            <div class="card">
              <h3>Available Items</h3>
              <p>{{ availableItems }}</p>
            </div>
            <div class="card">
              <h3>Returned Items</h3>
              <p>{{ returnedItems }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Notifications Section -->
      <div class="notifications-section">
        <div class="notifications-header">
          <h3>Your activity</h3>
          <div class="recent-upload-dropdown">
            <select v-model="selectedRecentUpload" class="recent-upload-select">
              <option value="recent">Recent Upload</option>
              <option value="upload1">Upload 1</option>
              <option value="upload2">Upload 2</option>
            </select>
            <span class="see-all">See All</span>
          </div>
        </div>
        <ul>
          <li v-for="notification in notifications" :key="notification.id">
            {{ notification.message }}
          </li>
        </ul>
      </div>

      <!-- Borrowed Items Section -->
      <div class="borrowed-items-section">
        <table class="borrowed-items-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Category</th>
              <th>Reservable</th>
              <th>Description</th>
              <th>Created By</th>
              <th>Created Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in borrowedItems" :key="item.id">
              <td>{{ item.itemName }}</td>
              <td>{{ item.category }}</td>
              <td>{{ item.reservable }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.createdBy }}</td>
              <td>{{ item.createdDate }}</td>
              
              <td>
                <button @click="editItem(item.id)" class="edit-button">Edit</button>
                <button @click="deleteItem(item.id)" class="delete-button">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AdminDashboard',
  computed: {
    ...mapState(['borrowedItems']),
  },
  data() {
    return {
      selectedTimeFrame: 'this-month',
      selectedRecentUpload: 'recent',
      totalitems: 70,
      availableItems: 55,
      returnedItems: 48,
      // Updated borrowed items data
      borrowedItems: [
        { id: 1, itemName: 'Raspberry Pi', category: 'Technology', reservable: 'Yes', description: 'Single-board computer', createdBy: 'Admin', createdDate: '2024-08-01' },
        { id: 2, itemName: 'Syringe Pack', category: 'Nursing', reservable: 'Yes', description: 'Pack of syringes', createdBy: 'Admin', createdDate: '2024-08-03' },
        { id: 3, itemName: 'Defibrillator', category: 'Nursing', reservable: 'No', description: 'Portable defibrillator', createdBy: 'Admin', createdDate: '2024-08-05' },
        { id: 4, itemName: 'Chemistry Lab Kit', category: 'Chemistry', reservable: 'Yes', description: 'Kit for chemistry experiments', createdBy: 'Admin', createdDate: '2024-08-07' },
        { id: 5, itemName: 'SAP TOOL', category: 'Business', reservable: 'Yes', description: 'Software for business management', createdBy: 'Admin', createdDate: '2024-08-09' },
        { id: 6, itemName: 'Cable Tester', category: 'Technology', reservable: 'No', description: 'Device for testing cables', createdBy: 'Admin', createdDate: '2024-08-11' },
        { id: 7, itemName: 'Nursing Simulation Manikin', category: 'Nursing', reservable: 'Yes', description: 'Manikin for nursing simulations', createdBy: 'Admin', createdDate: '2024-08-13' },
        { id: 8, itemName: 'Blood Pressure Monitor', category: 'Nursing', reservable: 'Yes', description: 'Device for monitoring blood pressure', createdBy: 'Admin', createdDate: '2024-08-15' },
        { id: 9, itemName: 'Engineering Tools', category: 'Engineering', reservable: 'Yes', description: 'Set of engineering tools', createdBy: 'Admin', createdDate: '2024-08-17' },
        { id: 10, itemName: 'Financial Management', category: 'Business', reservable: 'No', description: 'Software for financial management', createdBy: 'Admin', createdDate: '2024-08-19' },
        { id: 11, itemName: 'Arduino Uno Kit', category: 'Technology', reservable: 'Yes', description: 'Microcontroller kit', createdBy: 'Admin', createdDate: '2024-08-21' },
        { id: 12, itemName: 'Network Switch', category: 'Technology', reservable: 'Yes', description: 'Device for network management', createdBy: 'Admin', createdDate: '2024-08-23' },
        { id: 13, itemName: 'Stethoscope', category: 'Nursing', reservable: 'No', description: 'Medical stethoscope', createdBy: 'Admin', createdDate: '2024-08-25' }
      ],

      notifications: [
        { id: 1, message: 'New item added: Raspberry Pi' },
        { id: 2, message: 'Defibrillator was returned' },
      ],
    };
  },
  methods: {
    handleLogout() {
      // Handle logout functionality
      console.log('Logout');
    }
  }
};
</script>

<style scoped>
.admin-dashboard {
  display: flex;
  font-family: Arial, sans-serif;
}

.quick-links {
  width: 200px;
  background-color: #f8f9fa;
  padding: 20px;
  color: white;
  position: fixed;
  height: 100%;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.quick-links h2 {
  font-size: 20px;
  margin-bottom: 20px;
  color: #ecf0f1;
}

.quick-links ul {
  list-style-type: none;
  padding: 0;
}

.quick-links li {
  margin-bottom: 15px;
}

.quick-links li a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  display: block;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.quick-links li a:hover {
  background-color: #e9ecef;
}

.content-section {
  margin-left: 270px; /* Adjust based on the quick links width */
  padding: 20px;
  width: calc(100% - 270px);
}

.summary-section {
  margin-bottom: 40px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-right {
  display: flex;
  align-items: center;
}

.search-bar {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 20px;
}

.dashboard-welcome {
  display: flex;
  flex-direction: column;
}

.welcome-text {
  font-size: 16px;
  color: #333;
  text-decoration: underline;
  margin-top: 5px;
}

.upload-button {
  background-color: #90ee90; /* Light green background */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.upload-button:hover {
  background-color: #76c776;
}

.summary-filter {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.timeframe-dropdown {
  margin-right: 20px;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.summary-cards {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
}

.card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  width: 30%; /* Adjusted to fit all three cards */
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

.notifications-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.recent-upload-dropdown {
  display: flex;
  align-items: center;
}

.recent-upload-select {
  margin-right: 10px;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.see-all {
  color: #888;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
}
  
.see-all:hover {
  color: #555;
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

.borrowed-items-section {
  margin-top: 20px;
}

.borrowed-items-table {
  width: 100%;
  border-collapse: collapse;
}

.borrowed-items-table th,
.borrowed-items-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.borrowed-items-table th {
  background-color: #f4f4f4;
}

.borrowed-items-table tr:nth-child(even) {
  background-color: #f9f9f9;
}
.edit-button {
  background-color: #007bff; /* Blue background */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 5px;
  transition: background-color 0.3s ease;
}

.edit-button:hover {
  background-color: #0056b3;
}

.delete-button {
  background-color: #dc3545; /* Red background */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #c82333;
}
</style>
