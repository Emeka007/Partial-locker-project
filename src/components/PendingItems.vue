<template>
  <div class="pending-items-page">
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
      <!-- Summary Cards Section -->
<div class="summary-section">
        <div class="summary-cards">
          <div class="card " @click="handleCardClick('loaded')">
            <h3>Loaded Items</h3>
          </div>
          <div class="card" @click="handleCardClick('scheduled')">
            <h3>Scheduled Items</h3>
          </div>
          <div class="card highlighted " @click="handleCardClick('pending')">
            <h3>Pending Items</h3>
          </div>
          <div class="card" @click="handleCardClick('returned')">
            <h3>Returned Items</h3>
          </div>
          <div class="card" @click="handleCardClick('reserved')">
            <h3>Reserved Items</h3>
          </div>
          </div>
      </div>

      <!-- Items Table Section for Pending Items -->
      <div v-if="activeCard === 'pending'" class="items-table-section">
        <table class="items-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Item Name</th>
              <th>Category</th>
              <th>Requested Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request in filteredRequests" :key="request.id">
              <td>{{ request.studentName }}</td>
              <td>{{ request.itemName }}</td>
              <td>{{ request.category }}</td>
              <td>{{ request.requestedDate }}</td>
              <td>
                <button @click="approveRequest(request.id)">Approve</button>
                <button @click="rejectRequest(request.id)">Reject</button>
                <button @click="viewRequestDetails(request.id)">View Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Student and Item Details Modal -->
      <div v-if="selectedRequest" class="details-modal">
        <div class="modal-content">
          <h2>Request Details</h2>
          <p><strong>Student Name:</strong> {{ selectedRequest.studentName }}</p>
          <p><strong>Item Name:</strong> {{ selectedRequest.itemName }}</p>
          <p><strong>Category Name:</strong> {{ selectedRequest.categoryName }}</p>
          <p><strong>Requested Date:</strong> {{ selectedRequest.requestedDate }}</p>
          <p><strong>Status:</strong> {{ selectedRequest.status }}</p>
          <button @click="closeDetailsModal" class="close-button">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PendingItems',
  data() {
    return {
      activeCard: 'pending', // Default active card
      selectedRequest: null,
      items: [
        { id: 1, studentName: 'John Doe', itemName: 'Defibrillator', category: 'Medical', requestedDate: '2024-06-20', status: 'PENDING' },
        { id: 2, studentName: 'Anthony Kipkemboi', itemName: 'Chemistry Lab Kit', category: 'Lab Equipment', requestedDate: '2024-06-22', status: 'PENDING' },
        { id: 3, studentName: 'Alice Johnson', itemName: 'Nursing Simulation Manikin', category: 'Medical', requestedDate: '2024-07-10', status: 'PENDING' },
        { id: 4, studentName: 'Angela Yogi', itemName: 'Syringe Pack', category: 'Medical', requestedDate: '2024-07-15', status: 'PENDING' },
        { id: 5, studentName: 'Saurav Amatya', itemName: 'Raspberry Pi', category: 'Electronics', requestedDate: '2024-07-25', status: 'PENDING' },
        { id: 6, studentName: 'Ojeabulu Jude', itemName: 'Stethoscope', category: 'Medical', requestedDate: '2024-08-05', status: 'PENDING' },
        { id: 7, studentName: 'Majeed Babs', itemName: 'Network Switcher', category: 'Electronics', requestedDate: '2024-08-10', status: 'PENDING' },
        { id: 8, studentName: 'Callistus Obara', itemName: 'Cable Tester', category: 'Electronics', requestedDate: '2024-08-20', status: 'PENDING' },
        { id: 9, studentName: 'Joy Okonji', itemName: 'SAP Workbook', category: 'Educational', requestedDate: '2024-08-21', status: 'PENDING' },
        { id: 10, studentName: 'Cliff Akinde', itemName: 'Financial Workbook', category: 'Educational', requestedDate: '2024-08-25', status: 'PENDING' },
      ],
    };
  },
  computed: {
    filteredRequests() {
      return this.items.filter((item) => item.status === 'PENDING');
    },
  },
  methods: {
    approveRequest(requestId) {
      const request = this.items.find((req) => req.id === requestId);
      if (request) {
        request.status = 'APPROVED';
        alert(`Request for ${request.itemName} by ${request.studentName} has been approved.`);
        this.notifyStudent(request, 'approved');
      }
    },
    rejectRequest(requestId) {
      const request = this.items.find((req) => req.id === requestId);
      if (request) {
        request.status = 'REJECTED';
        alert(`Request for ${request.itemName} by ${request.studentName} has been rejected.`);
        this.notifyStudent(request, 'rejected');
      }
    },
    viewRequestDetails(requestId) {
      this.selectedRequest = this.items.find((req) => req.id === requestId);
    },
    closeDetailsModal() {
      this.selectedRequest = null;
    },
    notifyStudent(request, decision) {
      console.log(`Student ${request.studentName} has been notified that their request for ${request.itemName} was ${decision}.`);
    },
    handleCardClick(cardType) {
      this.activeCard = cardType;
    },
  },
};
</script>

<style scoped>
.pending-items-page {
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

.sort-add-section {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
}

.sort-by {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 20px;
}

.add-new-button {
  background-color: #90ee90;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.add-new-button:hover {
  background-color: #76e072;
}
/* Styles for Action Buttons */
button {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 10px; /* Space between buttons */
}

button:hover {
  background-color: #ddd; /* General hover effect for all buttons */
}

button:focus {
  outline: none; /* Removes default outline when focused */
}

button:last-child {
  margin-right: 0; /* Remove margin for the last button in a row */
}

/* Approve Button */
button:nth-child(1) {
  background-color: #28a745;
  color: white;
}

button:nth-child(1):hover {
  background-color: #218838;
}

/* Reject Button */
button:nth-child(2) {
  background-color: #dc3545;
  color: white;
}

button:nth-child(2):hover {
  background-color: #c82333;
}

/* View Details Button */
button:nth-child(3) {
  background-color: #007bff;
  color: white;
}

button:nth-child(3):hover {
  background-color: #0056b3;
}

</style>


