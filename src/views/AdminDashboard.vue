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
            <input type="text" class="search-bar" placeholder="Search...">
            
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
              <th>Locker Number</th>
              <th>Borrower</th>
              <th>Issue Date</th>
              <th>Pickup Date</th>
              <th>Return Schedule</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in borrowedItems" :key="item.id">
              <td>{{ item.itemName }}</td>
              <td>{{ item.lockerNumber }}</td>
              <td>{{ item.borrower }}</td>
              <td>{{ item.issueDate }}</td>
              <td>{{ item.pickupDate }}</td>
              <td>{{ item.returnSchedule }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
  data() {
    return {
      selectedTimeFrame: 'this-month', // Default selected time frame
      selectedRecentUpload: 'recent',  // Default selected recent upload
      totalitems: 70,
      availableItems: 55,
      returnedItems: 48,
      // Mock borrowed items data
      borrowedItems: [
        { id: 1, itemName: 'Laptop', lockerNumber: 'L123', borrower: 'John Doe', issueDate: '2024-08-01', pickupDate: '2024-08-02', returnSchedule: '2024-08-10' },
        { id: 2, itemName: 'Projector', lockerNumber: 'L124', borrower: 'Jane Smith', issueDate: '2024-08-03', pickupDate: '2024-08-04', returnSchedule: '2024-08-11' },
        { id: 3, itemName: 'Camera', lockerNumber: 'L125', borrower: 'Alice Johnson', issueDate: '2024-08-05', pickupDate: '2024-08-06', returnSchedule: '2024-08-12' },
        { id: 4, itemName: 'Microphone', lockerNumber: 'L126', borrower: 'Bob Brown', issueDate: '2024-08-07', pickupDate: '2024-08-08', returnSchedule: '2024-08-15' },
        { id: 5, itemName: 'Speaker', lockerNumber: 'L127', borrower: 'Carol White', issueDate: '2024-08-09', pickupDate: '2024-08-10', returnSchedule: '2024-08-20' },
        { id: 6, itemName: 'Projector Screen', lockerNumber: 'L128', borrower: 'David Green', issueDate: '2024-08-11', pickupDate: '2024-08-12', returnSchedule: '2024-08-18' },
        { id: 7, itemName: 'Printer', lockerNumber: 'L129', borrower: 'Emma Wilson', issueDate: '2024-08-13', pickupDate: '2024-08-14', returnSchedule: '2024-08-21' },
        { id: 8, itemName: 'Whiteboard', lockerNumber: 'L130', borrower: 'Frank Harris', issueDate: '2024-08-15', pickupDate: '2024-08-16', returnSchedule: '2024-08-25' },
        { id: 9, itemName: 'Extension Cord', lockerNumber: 'L131', borrower: 'Grace Martinez', issueDate: '2024-08-17', pickupDate: '2024-08-18', returnSchedule: '2024-08-26' },
        { id: 10, itemName: 'Flip Chart', lockerNumber: 'L132', borrower: 'Henry Clark', issueDate: '2024-08-19', pickupDate: '2024-08-20', returnSchedule: '2024-08-27' },
        { id: 11, itemName: 'Tablet', lockerNumber: 'L133', borrower: 'Ivy Lewis', issueDate: '2024-08-21', pickupDate: '2024-08-22', returnSchedule: '2024-08-30' },
        { id: 12, itemName: 'Portable Speaker', lockerNumber: 'L134', borrower: 'Jack Young', issueDate: '2024-08-23', pickupDate: '2024-08-24', returnSchedule: '2024-09-01' },
        { id: 13, itemName: 'Laptop Stand', lockerNumber: 'L135', borrower: 'Kelly King', issueDate: '2024-08-25', pickupDate: '2024-08-26', returnSchedule: '2024-09-05' },
        { id: 14, itemName: 'HDMI Cable', lockerNumber: 'L136', borrower: 'Leo Scott', issueDate: '2024-08-27', pickupDate: '2024-08-28', returnSchedule: '2024-09-07' }
      ],
      notifications: [
        { id: 1, message: 'New item added: Laptop' },
        { id: 2, message: 'Projector was returned' }
      ]
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

.admin-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
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
  margin-top: 40px;
}

.borrowed-items-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.borrowed-items-table th,
.borrowed-items-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

.borrowed-items-table th {
  background-color: #f2f2f2;
}

.borrowed-items-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
