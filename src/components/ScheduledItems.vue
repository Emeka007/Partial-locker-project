<template>
  <div class="scheduled-items-page">
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
          <div
            class="card"
            @click=" handleCardClick ('loaded')"
          >
            <h3>Loaded Items</h3>
          </div>
          <div
            class="card highlighted"
            @click=" handleCardClick ('scheduled')"
          >
            <h3>Scheduled Items</h3>
          </div>
          <div
            class="card"
            @click=" handleCardClick ('pending')"
          >
            <h3>Pending Items</h3>
          </div>
          <div
            class="card"
            @click=" handleCardClick ('returned')"
          >
            <h3>Returned Items</h3>
          </div>
          <div class="card" @click=" handleCardClick ('reserved')">
          <h3>Reserved Items</h3>
        </div>
          
        </div>
      </div>

      <!-- Items Table Section for Scheduled Items -->
      <div v-if="activeCard === 'scheduled'" class="items-table-section">
        <table class="items-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Locker Number</th>
              <th>Borrower</th>
              <th>Pickup Date</th>
              <th>Return Schedule</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in displayedItems" :key="item.id">
              <td>{{ item.itemName }}</td>
              <td>{{ item.lockerNumber }}</td>
              <td>{{ item.borrower }}</td>
              <td>{{ item.pickupDate }}</td>
              <td>{{ item.returnSchedule }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Sort By and Add New Section -->
      <div class="sort-add-section">
        <select class="sort-by" v-model="sortBy" @change="sortItems">
          <option value="" disabled>Sort By</option>
          <option value="itemName">Item Name</option>
          <option value="pickupDate">Pickup Date</option>
          <option value="returnSchedule">Return Schedule</option>
        </select>
        <button class="add-new-button" @click="handleAddNew">Add New</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'ScheduledItems',
data() {
  return {
    activeCard: 'scheduled', // Default active card is 'scheduled'
    sortBy: '', // Default sort option is empty
    items: [
      { id: 1, itemName: 'Laptop', lockerNumber: 'L123', borrower: 'John Doe', pickupDate: '2024-08-02', returnSchedule: '2024-08-10', status: 'loaded' },
      { id: 2, itemName: 'Projector', lockerNumber: 'L124', borrower: 'Jane Smith', pickupDate: '2024-08-04', returnSchedule: '2024-08-11', status: 'scheduled' },
      { id: 3, itemName: 'Keyboard', lockerNumber: 'L125', borrower: 'Alice Johnson', pickupDate: '2024-08-06', returnSchedule: '2024-08-12', status: 'pending' },
      { id: 4, itemName: 'Monitor', lockerNumber: 'L126', borrower: 'Bob Brown', pickupDate: '2024-08-08', returnSchedule: '2024-08-14', status: 'returned' },
      { id: 5, itemName: 'Mouse', lockerNumber: 'L127', borrower: 'Charlie Davis', pickupDate: '2024-08-10', returnSchedule: '2024-08-15', status: 'missing' },
      { id: 6, itemName: 'Headphones', lockerNumber: 'L128', borrower: 'David Green', pickupDate: '2024-08-11', returnSchedule: '2024-08-16', status: 'loaded' },
      { id: 7, itemName: 'Webcam', lockerNumber: 'L129', borrower: 'Emily White', pickupDate: '2024-08-12', returnSchedule: '2024-08-17', status: 'loaded' },
      { id: 8, itemName: 'Charger', lockerNumber: 'L130', borrower: 'Frank Black', pickupDate: '2024-08-13', returnSchedule: '2024-08-18', status: 'loaded' },
      { id: 9, itemName: 'Desk Lamp', lockerNumber: 'L131', borrower: 'Grace Blue', pickupDate: '2024-08-14', returnSchedule: '2024-08-19', status: 'loaded' },
      { id: 10, itemName: 'Printer', lockerNumber: 'L132', borrower: 'Henry Silver', pickupDate: '2024-08-15', returnSchedule: '2024-08-20', status: 'loaded' },
      { id: 11, itemName: 'Camera', lockerNumber: 'L133', borrower: 'Ivy Gold', pickupDate: '2024-08-16', returnSchedule: '2024-08-21', status: 'loaded' },
      { id: 12, itemName: 'Smartphone', lockerNumber: 'L134', borrower: 'Jack Gray', pickupDate: '2024-08-17', returnSchedule: '2024-08-22', status: 'loaded' },
      { id: 13, itemName: 'Tablet', lockerNumber: 'L135', borrower: 'Karen Yellow', pickupDate: '2024-08-18', returnSchedule: '2024-08-23', status: 'loaded' },
      { id: 14, itemName: 'External Hard Drive', lockerNumber: 'L136', borrower: 'Louis Pink', pickupDate: '2024-08-19', returnSchedule: '2024-08-24', status: 'loaded' },
      { id: 15, itemName: 'USB Flash Drive', lockerNumber: 'L137', borrower: 'Mia Orange', pickupDate: '2024-08-20', returnSchedule: '2024-08-25', status: 'loaded' },
      { id: 16, itemName: 'Projector Screen', lockerNumber: 'L138', borrower: 'Nina Purple', pickupDate: '2024-08-21', returnSchedule: '2024-08-26', status: 'loaded' },
      { id: 17, itemName: 'Scanner', lockerNumber: 'L139', borrower: 'Oscar Red', pickupDate: '2024-08-22', returnSchedule: '2024-08-27', status: 'loaded' },
      { id: 18, itemName: 'Whiteboard Marker', lockerNumber: 'L140', borrower: 'Paula Green', pickupDate: '2024-08-23', returnSchedule: '2024-08-28', status: 'loaded' },
      { id: 19, itemName: 'Mouse Pad', lockerNumber: 'L141', borrower: 'Quinn Blue', pickupDate: '2024-08-24', returnSchedule: '2024-08-29', status: 'loaded' },
      { id: 20, itemName: 'Docking Station', lockerNumber: 'L142', borrower: 'Rita Black', pickupDate: '2024-08-25', returnSchedule: '2024-08-30', status: 'loaded' },
      { id: 21, itemName: 'External Monitor', lockerNumber: 'L143', borrower: 'Sam White', pickupDate: '2024-08-26', returnSchedule: '2024-08-31', status: 'loaded' }
    ],
  };
},
computed: {
  filteredItems() {
    // Return counts based on item status
    return {
      loaded: this.items.filter(item => item.status === 'loaded').length,
      scheduled: this.items.filter(item => item.status === 'scheduled').length,
      pending: this.items.filter(item => item.status === 'pending').length,
      returned: this.items.filter(item => item.status === 'returned').length,
      missing: this.items.filter(item => item.status === 'missing').length,
    };
  },
  displayedItems() {
    
    return this.items;
  },
},
methods: {
      handleCardClick(cardType) {
    this.activeCard = cardType;

// Navigate to the appropriate route
    switch (cardType) {
      case 'scheduled':
        this.$router.push({ name: 'ScheduledItems' });
        break;
      case 'pending':
        this.$router.push({ name: 'PendingItems' });
        break;
      case 'returned':
        this.$router.push({ name: 'ReturnedList' });
        break;
        case 'reserved':
        this.$router.push({ name: 'ReservedItems' });
        break;
      case 'missing':
        this.$router.push({ name: 'MissingItems' });
        break;
      default:
        this.$router.push({ name: 'ItemManagement' });
    }
  },

  handleAddNew() {
    // Handle the "Add New" button click
    console.log('Add New button clicked');
  },
  sortItems() {
    // Implement sorting logic based on this.sortBy
    console.log(`Sort by: ${this.sortBy}`);
  },
},
};
</script>

<style scoped>
.scheduled-items-page {
  display: flex;
  font-family: Arial, sans-serif;
}

.quick-links {
width: 220px; /* Adjusted width */
background-color: #f8f9fa; /* Darker background color */
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
background-color: #e9ecef; /* Darker hover effect */
}

.quick-links i {
margin-right: 10px; /* Space between icon and text */
}

.content-section {
margin-left: 250px; /* Adjust based on the quick links width */
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
background-color: #90ee90; /* Light green color for the highlighted card */
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
</style>



