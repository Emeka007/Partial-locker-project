

<template>
    <div class="all-items-page">
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
            <div class="card" @click="handleCardClick('loaded')">
              <h3>Loaded Items</h3>
            </div>
            <div class="card highlighted" @click="handleCardClick('all')">
              <h3>All Items</h3>
            </div>
            <!-- More cards can be added here -->
          </div>
        </div>
  <!-- Sort By and Add New Section -->
  <div class="sort-add-section">

          <!-- <select class="sort-by" v-model="sortBy" @change="sortItems">
            <option value="" disabled>Sort By</option>
            <option value="itemName">Item Name</option>
            <option value="createdOn">Created On</option>
          </select> -->
          <input 
    type="text" 
    class="search-box" 
    v-model="searchQuery" 
    placeholder="Search items..."
  />
          <button class="add-new-button" @click="handleAddNew">Add New</button>
        </div>
        <!-- Items Table Section for All Items -->
        <div v-if="activeCard === 'all'" class="items-table-section">
          <table class="items-table">
            <thead>
  <tr>
    <th @click="sortColumn('name')">
      Item Name <i class="fas" :class="getSortIcon('name')"></i>
    </th>
    <th @click="sortColumn('department')">
      Department <i class="fas" :class="getSortIcon('department')"></i>
    </th>
    <th @click="sortColumn('createdBy')">
      Created By <i class="fas" :class="getSortIcon('createdBy')"></i>
    </th>
    <th @click="sortColumn('createdOn')">
      Created On <i class="fas" :class="getSortIcon('createdOn')"></i>
    </th>
    <th @click="sortColumn('reservable')">
      Reservable <i class="fas" :class="getSortIcon('reservable')"></i>
    </th>
    <th>
      Actions
    </th>
  </tr>
</thead>

            <tbody>
              <tr v-for="item in displayedItems" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.department }}</td>
                <td>{{ item.createdBy }}</td>
                <td>{{ new Date(item.createdOn).toLocaleDateString('fi-FI') }}</td>
                <td>{{ item.reservable ? 'Yes' : 'No' }}</td>
                <td class="action-buttons">
    <button @click="editItem(item.id)" class="action-btn edit-btn">
      <i class="fas fa-edit"></i> 
    </button>
    <button @click="deleteItem(item.id)" class="action-btn delete-btn">
      <i class="fas fa-trash-alt"></i> 
    </button>
  </td>
              </tr>
            </tbody>
          </table>

              <!-- Pagination Controls -->
    <!-- <div v-if="totalPages > 1">
      <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">Next</button>
    </div> -->
        </div>
  
        
      </div>
    </div>
  </template>
  
  <script>
  /* eslint-disable */
  import axios from 'axios';

  export default {
    name: 'AllItems',
    data() {
      return {
        activeCard: 'all', // Default active card is 'all'
        sortBy: '', // Default sort option is empty
        items: [
        //   { id: 1, itemName: 'Laptop', department: 'IT', createdBy: 'Admin', createdOn: '2024-01-10', reservable: true },
        //   { id: 2, itemName: 'Projector', department: 'AV', createdBy: 'Admin', createdOn: '2024-01-12', reservable: true },
        //   { id: 3, itemName: 'Keyboard', department: 'IT', createdBy: 'Admin', createdOn: '2024-02-01', reservable: false },
        //   { id: 4, itemName: 'Monitor', department: 'HR', createdBy: 'Admin', createdOn: '2024-02-05', reservable: true },
        //   { id: 5, itemName: 'Mouse', department: 'Admin', createdBy: 'Admin', createdOn: '2024-02-07', reservable: true },
        //   // Add more items here
        ],
        searchQuery: '',
        currentSort: 'CreatedOn', // Default sorting column
      currentSortDirection: 'desc', // Default sort direction
    //     currentPage: 1,     // Default current page is 1
    //   pageSize: 10,        // Number of items per page
    //   totalPages: 1,      // Total number of pages (will be updated from the API)
    //   totalItems: 0,
      };
    },
    mounted() {
    this.fetchItems();
  },
    computed: {
      displayedItems() {
        console.log('Filtering items based on:', this.searchQuery);
        // Step 1: Filter the items based on the search query
    let filtered = this.items;
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.department.toLowerCase().includes(query) ||
        item.createdBy.toLowerCase().includes(query)
      );
      return filtered
    }
        return this.items.sort((a, b) => {
        let modifier = this.currentSortDirection === 'asc' ? 1 : -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
      
      }
      
    },
    created() {
    const id = this.$route.params.id;  // Get ID from route params

    if (id) {
      this.isEditing = true;  // Flag to check if we're editing
      this.fetchItem(id);     // Fetch item data for editing
    }
},
    methods: {
        async fetchItem(id) {
      try {
        const response = await axios.get(`https://localhost:7075/api/equipments/${id}`);
        this.item = response.data;  // Populate the form with existing data
      } catch (error) {
        console.error('Error fetching item data:', error);
        alert('Failed to load item data.');
      }
    },
    async saveItem() {
      try {
        if (this.isEditing) {
          // PUT request to update the item
          await axios.put(`https://localhost:7075/api/equipments/${this.item.id}`, this.item);
          alert('Item successfully updated!');
        } else {
          // POST request to create a new item (if you want to support both)
          await axios.post('https://localhost:7075/api/equipments', this.item);
          alert('Item successfully created!');
        }
        this.$router.push('/');  // Navigate back to the main list page
      } catch (error) {
        console.error('Error saving item:', error);
        alert('Failed to save item.');
      }
    },
        sortColumn(column) {
      // Toggle sort direction if the same column is clicked
      if (this.currentSort === column) {
        this.currentSortDirection = this.currentSortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.currentSort = column;
        this.currentSortDirection = 'asc'; // Default to ascending when changing columns
      }
    },
    getSortIcon(column) {
      // Return sort icon classes based on the current column and direction
      if (this.currentSort === column) {
        return this.currentSortDirection === 'asc' ? 'fa-sort-up' : 'fa-sort-down';
      }
      return 'fa-sort'; // Default icon
    },
        async fetchItems() {
      try {
        const response = await axios.get('https://localhost:7075/api/equipments', {
        //   params: {
            
        //     page: this.currentPage, // Current page
        //     pageSize: this.pageSize // Number of items per page
        //   }
        });
        this.items = response.data; // Populate the items array with the data from the API
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
    editItem(id) {
  this.$router.push({ name: 'create', params: { id } });  // Redirect to create form, passing the ID
},
    async deleteItem(id) {
      if (confirm('Are you sure you want to delete this item?')) {
        try {
          await axios.delete(`https://localhost:7075/api/equipments/${id}`);
          // Remove the deleted item from the local array to update the UI
          this.items = this.items.filter(item => item.id !== id);
          alert('Item successfully deleted!');
        } catch (error) {
          console.error('Error deleting item:', error);
          alert('Failed to delete item.');
        }
      }
    },

    // Change page number and fetch new data
    // changePage(page) {
    //   if (page < 1 || page > this.totalPages) return; // Prevent invalid pages
    //   this.currentPage = page; // Set new page
    //   this.fetchItems(); // Fetch items for the new page
    // },
      handleCardClick(cardType) {
        this.activeCard = cardType;
        // Navigate to the appropriate route
        switch (cardType) {
          case 'all':
            this.$router.push({ name: 'AllItems' });
            break;
          // More cases can be added as needed
        }
      },
  
      handleAddNew() {
        // Handle the "Add New" button click
        console.log('Add New button clicked');
        this.$router.push('/form');
    
      },
  
      sortItems() {
        // Implement sorting logic based on this.sortBy
        console.log(`Sort by: ${this.sortBy}`);
      },
  
      handleLogout() {
        // Handle logout
        console.log('Logging out');
      },
    },
  };
  </script>
  
  <style scoped>
  .all-items-page {
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
    margin: 0;
  }
  
  .items-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .items-table th,
  .items-table td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  .items-table th {
    background-color: #f4f4f4;
  }
  
  .sort-add-section {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .sort-by {
    padding: 8px;
  }
  
  .add-new-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .add-new-button:hover {
    background-color: #0056b3;
  }
  /* Modern Search Box */
.search-box {
  width: 100%;              /* Full width */
  max-width: 400px;         /* Limit maximum width */
  padding: 12px 20px;       /* Vertical and horizontal padding */
  margin: 10px 0;           /* Top and bottom margins */
  font-size: 16px;          /* Readable font size */
  color: #E10E49;              /* Dark gray text */
  background-color: #f9f9f9;/* Light background */
  border: 2px solid #ccc;   /* Subtle border */
  border-radius: 25px;      /* Rounded edges */
  outline: none;            /* Remove default outline */
  transition: all 0.3s ease;/* Smooth transitions */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Soft shadow */
}

/* Search Box Focus Effect */
.search-box:focus {
  border-color: #FFEFEF;    /* Change border color on focus */
  box-shadow: 0 6px 15px rgba(106, 17, 203, 0.3); /* More pronounced shadow */
}

/* Placeholder Styling */
.search-box::placeholder {
  color: #999;              /* Light gray placeholder */
  font-style: italic;       /* Italicize placeholder text */
}

.action-buttons {
  display: flex;
  gap: 12px;                 /* Increase spacing between buttons */
}

.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;                  /* Space between icon and text */
  font-size: 16px;           /* Text size */
  transition: color 0.3s ease;
}

.action-btn i {
  font-size: 20px;           /* Increase icon size */
}

/* Edit Button */
.edit-btn {
  color: #007bff;            /* Blue color for Edit button */
}

.edit-btn:hover {
  color: #0056b3;            /* Darker blue on hover */
}

/* Delete Button */
.delete-btn {
  color: #e74c3c;            /* Red for Delete button */
}

.delete-btn:hover {
  color: #c0392b;            /* Darker red on hover */
}


  </style>
  