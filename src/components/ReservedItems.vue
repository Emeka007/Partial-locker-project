<template>
  <div class="reserved-items-page">
    <!-- Quick Links Section -->
    <div class="quick-links">
      <ul>
        <li><router-link to="/admindashboard"><i class="fas fa-tachometer-alt"></i> Dashboard</router-link></li>
        <li><router-link to="/item-management"><i class="fas fa-box"></i> Item Management</router-link></li>
        <li><router-link to="/borrow-requests"><i class="fas fa-handshake"></i> Borrow Requests</router-link></li>
        <li><router-link to="/reserved-items"><i class="fas fa-calendar-check"></i> Reservation List</router-link></li>
        <li><router-link to="/unloaded-list"><i class="fas fa-truck"></i> Unloaded Items</router-link></li>
        <li><router-link to="/adminprofile"><i class="fas fa-user"></i> Profile</router-link></li>
        <li><router-link to="/settings"><i class="fas fa-cog"></i> Settings</router-link></li>
        <li><a href="#" @click="handleLogout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
      </ul>
    </div>

    <div class="content-section">
      <!-- Header Section with Search Bar and Profile Image -->
      <div class="header-section">
        <input type="text" class="search-bar" placeholder="Search..." v-model="searchQuery" @input="filterItems" />
        <img :src="require('@/assets/admin.png')" alt="Admin" class="admin-image">

      </div>

      <!-- Summary Cards Section -->
      <div class="summary-section">
        <div class="summary-cards">
          <div class="card" :class="{ highlighted: activeCard === 'loaded' }" @click="handleCardClick('loaded')">
            <h3>Loaded Items</h3>
          </div>
          <div class="card" :class="{ highlighted: activeCard === 'scheduled' }" @click="handleCardClick('scheduled')">
            <h3>Scheduled Items</h3>
          </div>
          <div class="card" :class="{ highlighted: activeCard === 'pending' }" @click="handleCardClick('pending')">
            <h3>Pending Items</h3>
          </div>
          <div class="card" :class="{ highlighted: activeCard === 'returned' }" @click="handleCardClick('returned')">
            <h3>Returned Items</h3>
          </div>
          <div class="card" :class="{ highlighted: activeCard === 'reserved' }" @click="handleCardClick('reserved')">
            <h3>Reserved Items</h3>
          </div>
        </div>
      </div>

      <!-- Items Table Section for Reserved Items -->
      <div v-if="activeCard === 'reserved'" class="items-table-section">
        <table class="items-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Item Name</th>
              <th>Category</th>
              <th>Reserved Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request in filteredRequests" :key="request.id">
              <td>{{ request.studentName }}</td>
              <td>{{ request.itemName }}</td>
              <td>{{ request.category }}</td>
              <td>{{ request.reservedDate }}</td>
              <td>
                <button @click="cancelReservation(request.id)">Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Student and Item Details Modal -->
      <div v-if="selectedRequest" class="details-modal">
        <div class="modal-content">
          <h2>Reservation Details</h2>
          <p><strong>Student Name:</strong> {{ selectedRequest.studentName }}</p>
          <p><strong>Item Name:</strong> {{ selectedRequest.itemName }}</p>
          <p><strong>Category Name:</strong> {{ selectedRequest.categoryName }}</p>
          <p><strong>Reserved Date:</strong> {{ selectedRequest.reservedDate }}</p>
          <p><strong>Status:</strong> {{ selectedRequest.status }}</p>
          <button @click="closeDetailsModal" class="close-button">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReservedItems',
  data() {
    return {
      activeCard: 'reserved', // Default active card
      selectedRequest: null,
      searchQuery: '', // Added search query data binding
      items: [
        { id: 1, studentName: 'John Doe', itemName: 'Defibrillator', category: 'Medical', reservedDate: '2024-06-20', status: 'RESERVED' },
        { id: 2, studentName: 'Anthony Kipkemboi', itemName: 'Chemistry Lab Kit', category: 'Lab Equipment', reservedDate: '2024-06-22', status: 'RESERVED' },
        { id: 3, studentName: 'Alice Johnson', itemName: 'Nursing Simulation Manikin', category: 'Medical', reservedDate: '2024-07-10', status: 'RESERVED' },
        { id: 4, studentName: 'Angela Yogi', itemName: 'Syringe Pack', category: 'Medical', reservedDate: '2024-07-15', status: 'RESERVED' },
        { id: 5, studentName: 'Saurav Amatya', itemName: 'Raspberry Pi', category: 'Electronics', reservedDate: '2024-07-25', status: 'RESERVED' },
        { id: 6, studentName: 'Ojeabulu Jude', itemName: 'Stethoscope', category: 'Medical', reservedDate: '2024-08-05', status: 'RESERVED' },
        { id: 7, studentName: 'Majeed Babs', itemName: 'Network Switcher', category: 'Electronics', reservedDate: '2024-08-10', status: 'RESERVED' },
        { id: 8, studentName: 'Callistus Obara', itemName: 'Cable Tester', category: 'Electronics', reservedDate: '2024-08-20', status: 'RESERVED' },
        { id: 9, studentName: 'Joy Okonji', itemName: 'SAP Workbook', category: 'Educational', reservedDate: '2024-08-21', status: 'RESERVED' },
        { id: 10, studentName: 'Cliff Akinde', itemName: 'Financial Workbook', category: 'Educational', reservedDate: '2024-08-25', status: 'RESERVED' },
      ],
    };
  },
  computed: {
    filteredRequests() {
      return this.items.filter((item) =>
        item.status === 'RESERVED' &&
        (item.studentName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          item.itemName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(this.searchQuery.toLowerCase()))
      );
    },
  },
  methods: {
    cancelReservation(requestId) {
      const request = this.items.find((req) => req.id === requestId);
      if (request) {
        request.status = 'CANCELLED';
        alert(`Reservation for ${request.itemName} by ${request.studentName} has been cancelled.`);
        this.notifyStudent(request, 'cancelled');
      }
    },
    viewRequestDetails(requestId) {
      this.selectedRequest = this.items.find((req) => req.id === requestId);
    },
    closeDetailsModal() {
      this.selectedRequest = null;
    },
    notifyStudent(request, decision) {
      console.log(`Student ${request.studentName} has been notified that their reservation for ${request.itemName} was ${decision}.`);
    },
    handleCardClick(cardType) {
      this.activeCard = cardType;
    },
    filterItems() {
      // This method will be called on search input change
    },
  },
};
</script>

<style scoped>
.reserved-items-page {
  display: flex;
  font-family: Arial, sans-serif;
}

.quick-links {
  width: 220px;
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
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.quick-links li a:hover {
  background-color: #e9ecef;
}

.quick-links i {
  margin-right: 10px;
}

.content-section {
  margin-left: 250px;
  padding: 20px;
  width: calc(100% - 250px);
}

.header-section {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
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
  width: 18%;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.card.highlighted {
  background-color: #90ee90;
}

h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  color: #333;
}

.items-table-section {
  margin-top: 40px;
}

.items-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.items-table th,
.items-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

.items-table th {
  background-color: #f2f2f2;
}

.items-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.details-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 400px;
  border-radius: 10px;
}

.modal-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.close-button {
  align-self: flex-end;
  padding: 5px 10px;
  background-color: #ff6961;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}
</style>
