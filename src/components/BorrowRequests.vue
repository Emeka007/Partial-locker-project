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
          placeholder="Search reservations..."
          class="search-bar"
        />
        <div class="admin-image">
          <img :src="require('@/assets/admin.png')" alt="Admin" class="admin-image">
        </div>
      </div>

      <div class="borrow-requests">
        <!-- Reservations List -->
        <div class="requests-list">
          <h2>Borrow Requests</h2>
          <table>
            <thead>
              <tr>
                <th>Reservation ID</th>
                <th>Item Name</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Status</th>
                <th>Requested By</th>
                <th>Note</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="reservation in filteredReservations"
                :key="reservation.id"
              >
                <td>{{ reservation.id }}</td>
                <td>{{ reservation.equipmentName }}</td>
                <td>{{ reservation.fromDate }}</td>
                <td>{{ reservation.toDate }}</td>
                <td><b>{{ reservation.status }}</b></td>
                <td>{{ reservation.userName }}</td>
                <td>{{ reservation.note }}</td>
                <td>
                  <!-- Approve Button -->
                  <button @click="approveRequest(reservation.id)">
                    <i class="fas fa-check"></i> 
                  </button>
                  <!-- Reject Button -->
                  <button @click="rejectRequest(reservation.id)">
                    <i class="fas fa-times"></i> 
                  </button>
                  <!-- View Details Button -->
                  <button @click="viewRequestDetails(reservation.id)">
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Reservation Details Modal -->
        <div v-if="selectedReservation" class="details-modal">
          <div class="modal-content">
            <h2>Reservation Details</h2>
            <p><strong>Reservation ID:</strong> {{ selectedReservation.id }}</p>
            <p><strong>From Date:</strong> {{ selectedReservation.fromDate }}</p>
            <p><strong>To Date:</strong> {{ selectedReservation.toDate }}</p>
            <p><strong>Status:</strong> {{ selectedReservation.status }}</p>
            <p><strong>Status Description:</strong> {{ selectedReservation.statusDescription }}</p>
            <p><strong>Note:</strong> {{ selectedReservation.note }}</p>
            <button @click="closeDetailsModal" class="close-button">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ReservationList',
  data() {
    return {
      searchQuery: '',
      selectedReservation: null,
      reservations: [], // Initialize empty array for reservations
    };
  },
  computed: {
    filteredReservations() {
      return this.reservations.filter((reservation) =>
        reservation.id.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        reservation.status.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        reservation.note.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {

    async approveRequest(requestId) {
  try {
    // Fetch the reservation data from the backend
    const response = await axios.get(`https://localhost:7075/api/Reservations/${requestId}`);
    const request = response.data;

    // Update the status to 'APPROVED'
    request.status = 'APPROVED';

    // Send the updated reservation data with a PUT request
    const updateResponse = await axios.put(`https://localhost:7075/api/Reservations/${request.id}`, request);

    if (updateResponse.status === 204) {
      // Successfully updated
      alert(`Request for ${response.name} has been approved.`);
    }
    
    // Optionally, notify the student that their request was approved
    this.notifyStudent(request, 'approved');
    
  } catch (error) {
    console.error('Error approving request:', error);
    //alert('There was an error updating the request.');
  }
},
async rejectRequest(requestId) {
  try {
    // Fetch the reservation data from the backend
    const response = await axios.get(`https://localhost:7075/api/Reservations/${requestId}`);
    const request = response.data;

    // Update the status to 'REJECTED'
    request.status = 'REJECTED';

    // Send the updated reservation data with a PUT request
    const updateResponse = await axios.put(`https://localhost:7075/api/Reservations/${request.id}`, request);

    if (updateResponse.status === 204) {
      // Successfully updated
      alert(`Request for ${request.equipmentName} by ${request.userName} has been rejected.`);
    }

    // Optionally, notify the student that their request was rejected
    this.notifyStudent(request, 'rejected');
    
  } catch (error) {
    console.error('Error rejecting request:', error);
    alert('There was an error updating the request.');
  }
},
    async fetchReservations() {
      try {
        // Fetch reservations from your .NET API
        const response = await axios.get('https://localhost:7075/api/Reservations?status=pending');
        
        // Fetch the data from API and enhance it with equipment details
        this.reservations = await Promise.all(response.data.map(async (reservation) => {
          // Fetch equipment details based on equipmentId for each reservation
          const equipmentResponse = await axios.get(`https://localhost:7075/api/Equipments/${reservation.equipmentId}`);
          reservation.equipmentName = equipmentResponse.data.name;
          reservation.equipmentDescription = equipmentResponse.data.description;

          // Fetch user details based on userId for each reservation
          const userResponse = await axios.get(`https://localhost:7075/api/Users/${reservation.userId}`);
          reservation.userName = userResponse.data.name;
          return reservation;
        }));
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    },
    viewReservationDetails(reservationId) {
      this.selectedReservation = this.reservations.find((reservation) => reservation.id === reservationId);
    },
    closeDetailsModal() {
      this.selectedReservation = null;
    },
    handleLogout() {
      // Implement your logout logic here
      console.log("User logged out");
    },
  },
  mounted() {
    // Fetch reservation data when the component is mounted
    this.fetchReservations();
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
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
}

.close-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}

.close-button:hover {
  background-color: #c82333;
}button {
  padding: 8px 16px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

.approve-btn {
  background-color: #28a745 !important; /* Green */
  color: white;
}

.reject-btn {
  background-color: #dc3545 !important; /* Red */
  color: white;
}

.details-btn {
  background-color: #007bff !important; /* Blue */
  color: white;
}
</style>
