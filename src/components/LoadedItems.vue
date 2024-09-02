<template>
    <div class="loaded-items-page">
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
  
      <div class="content-section">
        <!-- Summary Cards Section -->
        <div class="summary-section">
          <div class="summary-cards">
            <div
              class="card"
              :class="{ 'highlighted': activeCard === 'loaded' }"
              @click="handleCardClick('loaded')"
            >
              <h3>Loaded Items</h3>
              <p>{{ loadedItems }}</p>
            </div>
            <div
              class="card"
              :class="{ 'highlighted': activeCard === 'scheduled' }"
              @click="handleCardClick('scheduled')"
            >
              <h3>Scheduled Items</h3>
              <p>{{ scheduledItems }}</p>
            </div>
            <div
              class="card"
              :class="{ 'highlighted': activeCard === 'pending' }"
              @click="handleCardClick('pending')"
            >
              <h3>Pending Items</h3>
              <p>{{ pendingItems }}</p>
            </div>
            <div
              class="card"
              :class="{ 'highlighted': activeCard === 'returned' }"
              @click="handleCardClick('returned')"
            >
              <h3>Returned Items</h3>
              <p>{{ returnedItems }}</p>
            </div>
            <div
              class="card"
              :class="{ 'highlighted': activeCard === 'missing' }"
              @click="handleCardClick('missing')"
            >
              <h3>Missing Items</h3>
              <p>{{ missingItems }}</p>
            </div>
          </div>
        </div>
  
        <!-- Items Table Section -->
        <div class="items-table-section">
          <table class="items-table">
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
              <tr v-for="item in items" :key="item.id">
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
    name: 'LoadedItems',
    data() {
      return {
        loadedItems: 30,
        scheduledItems: 15,
        pendingItems: 10,
        returnedItems: 25,
        missingItems: 5,
        activeCard: 'loaded', // Default active card
  
        // Mock items data
        items: [
          {
            id: 1,
            itemName: 'Laptop',
            lockerNumber: 'L123',
            borrower: 'John Doe',
            issueDate: '2024-08-01',
            pickupDate: '2024-08-02',
            returnSchedule: '2024-08-10',
          },
          {
            id: 2,
            itemName: 'Projector',
            lockerNumber: 'L124',
            borrower: 'Jane Smith',
            issueDate: '2024-08-03',
            pickupDate: '2024-08-04',
            returnSchedule: '2024-08-11',
          },
          // Add more dummy items as needed
        ],
      };
    },
    methods: {
      handleCardClick(cardType) {
        this.activeCard = cardType;
        // Optionally, handle navigation or any other action here
        console.log(`Card clicked: ${cardType}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .loaded-items-page {
    display: flex;
    font-family: Arial, sans-serif;
  }
  
  .quick-links {
    width: 200px;
    background-color: #b8dbec;
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
    color: #ecf0f1;
    font-size: 16px;
    display: block;
    padding: 10px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  .quick-links li a:hover {
    background-color: #34495e;
  }
  
  .content-section {
    margin-left: 270px; /* Adjust based on the quick links width */
    padding: 20px;
    width: calc(100% - 270px);
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
    width: 18%; /* Adjusted to fit all five cards */
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
  </style>
  