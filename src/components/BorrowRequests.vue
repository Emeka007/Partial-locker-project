<template>
  <div class="main-container">
    <!-- Sidebar -->
    <nav class="sidebar">
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
    </nav>

    <!-- Main Content -->
    <div class="content">
      <!-- Top Bar with Search and Profile Image -->
      <div class="top-bar">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search requests..."
          class="search-bar"
        />
        <div class="admin-image">
          <img :src="require('@/assets/admin.png')" alt="Admin" class="admin-image">
        </div>
      </div>

      <div class="borrow-requests">
        <!-- Borrow Requests List -->
        <div class="requests-list">
          <h2>Pending Borrow Requests</h2>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Item Name</th>
                <th>Requested Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="request in filteredRequests"
                :key="request.id"
              >
                <td>{{ request.studentName }}</td>
                <td>{{ request.itemName }}</td>
                <td>{{ request.requestedDate }}</td>
                <td>{{ request.status }}</td>
                <td>
                  <button @click="approveRequest(request.id)">
                    Approve
                  </button>
                  <button @click="rejectRequest(request.id)">
                    Reject
                  </button>
                  <button @click="viewRequestDetails(request.id)">
                    View Details
                  </button>
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
            <p><strong>Requested Date:</strong> {{ selectedRequest.requestedDate }}</p>
            <p><strong>Status:</strong> {{ selectedRequest.status }}</p>
            <button @click="closeDetailsModal" class="close-button">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BorrowRequests',
  data() {
    return {
      searchQuery: '',
      pendingRequests: [
        { id: 1, studentName: 'John Doe', itemName: 'Defibrillator', requestedDate: '2024-06-20', status: 'PENDING' },
        { id: 2, studentName: 'Anthony Kipkemboi', itemName: 'Chemistry Lab Kit', requestedDate: '2024-06-22', status: 'PENDING' },
        { id: 3, studentName: 'Alice Johnson', itemName: 'Nursing Simulation Manikin', requestedDate: '2024-07-10', status: 'PENDING' },
        { id: 4, studentName: 'Angela Yogi', itemName: 'Syringe Pack', requestedDate: '2024-07-15', status: 'PENDING' },
        { id: 5, studentName: 'Saurav Amatya', itemName: 'Raspberry Pi', requestedDate: '2024-07-25', status: 'PENDING' },
        { id: 6, studentName: 'Ojeabulu Jude', itemName: 'Stethoscope', requestedDate: '2024-08-05', status: 'PENDING' },
        { id: 7, studentName: 'Majeed Babs', itemName: 'Network Switcher', requestedDate: '2024-08-10', status: 'PENDING' },
        { id: 8, studentName: 'Callistus Obara', itemName: 'Cable Tester', requestedDate: '2024-08-20', status: 'PENDING' },
        { id: 9, studentName: 'Joy Okonji', itemName: 'SAP Workbook', requestedDate: '2024-08-21', status: 'PENDING' },
        { id: 10, studentName: 'Cliff Akinde', itemName: 'Financial Workbook', requestedDate: '2024-08-25', status: 'PENDING' },
      ],
      selectedRequest: null,
    };
  },
  computed: {
    filteredRequests() {
      return this.pendingRequests.filter((request) =>
        request.studentName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        request.itemName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    approveRequest(requestId) {
      const request = this.pendingRequests.find((req) => req.id === requestId);
      if (request) {
        request.status = 'APPROVED';
        alert(`Request for ${request.itemName} by ${request.studentName} has been approved.`);
        this.notifyStudent(request, 'approved');
      }
    },
    rejectRequest(requestId) {
      const request = this.pendingRequests.find((req) => req.id === requestId);
      if (request) {
        request.status = 'REJECTED';
        alert(`Request for ${request.itemName} by ${request.studentName} has been rejected.`);
        this.notifyStudent(request, 'rejected');
      }
    },
    viewRequestDetails(requestId) {
      this.selectedRequest = this.pendingRequests.find((req) => req.id === requestId);
    },
    closeDetailsModal() {
      this.selectedRequest = null;
    },
    notifyStudent(request, decision) {
      console.log(`Student ${request.studentName} has been notified that their request for ${request.itemName} was ${decision}.`);
    },
    handleLogout() {
      // Implement your logout logic here
      console.log("User logged out");
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 15px;
}

.sidebar a {
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.sidebar a:hover {
  background-color: #e9ecef;
}

.sidebar i {
  margin-right: 10px;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.top-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
}

.search-bar {
  padding: 8px;
  border-radius: 20px;
  border: 1px solid #ddd;
  margin-right: 20px;
  font-size: 16px;
}

.admin-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.requests-list {
  margin-bottom: 40px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

button {
  padding: 8px 16px;
  margin-right: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
.details-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  max-width: 100%;
}

.close-button {
  padding: 8px 16px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.close-button:hover {
  background-color: #c9302c;
}
</style>
