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
      <header class="top-bar">
        <input type="text" placeholder="Search..." v-model="searchQuery" class="search-bar" />
        <img :src="require('@/assets/admin.png')" alt="Admin" class="admin-image">

      </header>

      <div class="unloaded-list">
        <!-- List of Unloaded Items -->
        <div class="items-list">
          <h2>Items Unloaded from Locker Machine</h2>
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Student Name</th>
                <th>Unload Date</th>
                <th>Current Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in unloadedItems" :key="item.id">
                <td>{{ item.itemName }}</td>
                <td>{{ item.studentName }}</td>
                <td>{{ item.unloadDate }}</td>
                <td>{{ item.status }}</td>
                <td>
                  <button @click="confirmReturn(item)" :disabled="item.confirmed">Confirm Return</button>
                  <select v-model="item.status" @change="updateStatus(item)">
                    <option value="AVAILABLE">Available</option>
                    <option value="DAMAGED">Damaged</option>
                    <option value="SOILED">Soiled</option>
                    <option value="DISABLED">Disabled</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnloadedList',
  data() {
    return {
      unloadedItems: [
        { id: 1, itemName: 'Math Textbook', studentName: 'John Doe', unloadDate: '2024-08-22', status: 'AVAILABLE', confirmed: false },
        { id: 2, itemName: 'Chemistry Lab Kit', studentName: 'Jane Smith', unloadDate: '2024-08-23', status: 'AVAILABLE', confirmed: false },
{
          id: 3,
          itemName: 'English Literature Book',
          studentName: 'Alice Johnson',
          unloadDate: '2024-08-24',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 4,
          itemName: 'Raspberry Pi 4',
          studentName: 'Michael Brown',
          unloadDate: '2024-08-25',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 5,
          itemName: 'Stethoscope',
          studentName: 'Emily White',
          unloadDate: '2024-08-26',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 6,
          itemName: 'Ethernet Cable Tester',
          studentName: 'David Johnson',
          unloadDate: '2024-08-27',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 7,
          itemName: 'Blood Pressure Monitor',
          studentName: 'Sarah Lee',
          unloadDate: '2024-08-28',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 8,
          itemName: 'Syringe Pack',
          studentName: 'James Anderson',
          unloadDate: '2024-08-29',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 9,
          itemName: 'Arduino Uno Kit',
          studentName: 'Laura Wilson',
          unloadDate: '2024-08-30',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 10,
          itemName: 'X-Ray Film Viewer',
          studentName: 'Karen Taylor',
          unloadDate: '2024-08-31',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 11,
          itemName: 'Network Switch',
          studentName: 'Brandon Harris',
          unloadDate: '2024-09-01',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 12,
          itemName: 'Nursing Simulation Manikin',
          studentName: 'Anna Moore',
          unloadDate: '2024-09-02',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 13,
          itemName: 'External Hard Drive',
          studentName: 'Peter Clark',
          unloadDate: '2024-09-03',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 14,
          itemName: 'Infusion Pump',
          studentName: 'Rebecca Martinez',
          unloadDate: '2024-09-04',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 15,
          itemName: '3D Printer',
          studentName: 'Christopher Rodriguez',
          unloadDate: '2024-09-05',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 16,
          itemName: 'Defibrillator',
          studentName: 'Jessica Lewis',
          unloadDate: '2024-09-06',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 17,
          itemName: 'Wi-Fi Router',
          studentName: 'Patricia Walker',
          unloadDate: '2024-09-07',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 18,
          itemName: 'Medical Scissors',
          studentName: 'Thomas Hall',
          unloadDate: '2024-09-08',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 19,
          itemName: 'Server Rack Key',
          studentName: 'Karen White',
          unloadDate: '2024-09-09',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 20,
          itemName: 'Pulse Oximeter',
          studentName: 'Jason King',
          unloadDate: '2024-09-10',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 21,
          itemName: 'USB Flash Drive',
          studentName: 'Nancy Wright',
          unloadDate: '2024-09-11',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 22,
          itemName: 'Ventilator',
          studentName: 'George Scott',
          unloadDate: '2024-09-12',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 23,
          itemName: 'Virtual Reality Headset',
          studentName: 'Ruth Adams',
          unloadDate: '2024-09-13',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 24,
          itemName: 'Intravenous (IV) Stand',
          studentName: 'Kenneth Nelson',
          unloadDate: '2024-09-14',
          status: 'AVAILABLE',
          confirmed: false,
        },
        {
          id: 25,
          itemName: 'Projector',
          studentName: 'Barbara Carter',
          unloadDate: '2024-09-15',
          status: 'AVAILABLE',
          confirmed: false,
        },
      ],
    };
  },
  methods: {
    confirmReturn(item) {
      item.confirmed = true;
      this.updateStatus(item);
    },
    updateStatus(item) {
      // Simulate updating the status in the backend or local state
      console.log(`Status of ${item.itemName} updated to ${item.status}`);
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
  position: relative; /* Add this to position the header correctly */
}

.top-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px; /* Adjust as necessary */
}

.search-bar {
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 20px;
}

.admin-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

h1, h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.items-list {
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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #0056b3;
}

select {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
