<template>
    <div class="container">
      <!-- Quick Links Sidebar -->
      <div class="quick-links">
        <ul>
          <li>
            <router-link to="/admindashboard"
              ><i class="fas fa-tachometer-alt"></i> Dashboard</router-link
            >
          </li>
          <li>
            <router-link to="/item-management"
              ><i class="fas fa-box"></i> Item Management</router-link
            >
          </li>
          <li>
            <router-link to="/borrow-requests"
              ><i class="fas fa-handshake"></i> Borrow Requests</router-link
            >
          </li>
          <li>
            <router-link to="/reserved-items"
              ><i class="fas fa-calendar-check"></i> Reservation List</router-link
            >
          </li>
          <li>
            <router-link to="/unloaded-list"
              ><i class="fas fa-truck"></i> Unloaded Items</router-link
            >
          </li>
          <li>
            <router-link to="/adminprofile"
              ><i class="fas fa-user"></i> Profile</router-link
            >
          </li>
          <li>
            <router-link to="/settings"
              ><i class="fas fa-cog"></i> Settings</router-link
            >
          </li>
          <li>
            <a href="#" @click="handleLogout"
              ><i class="fas fa-sign-out-alt"></i> Logout</a
            >
          </li>
        </ul>
      </div>
  
      <!-- Form Section -->
      <div class="form-container" v-if="equipment">
        <h2>{{ isEditing ? 'Edit Equipment' : 'Create New Equipment' }}</h2>
        <!-- <form @submit.prevent="isEditing ? updateEquipment : createEquipment"> -->
            <form @submit.prevent="validateFormBeforeSubmit() && (isEditing ? updateEquipment() : createEquipment())">
          <!-- <form @submit.prevent="createEquipment"> -->
          <!-- Form Fields -->
          <div class="form-group">
            <label for="name">Equipment Name:</label>
            <input
              type="text"
              v-model="equipment.name"
              required
              pattern="^[a-zA-Z0-9\s]+$"
              title="Only alphanumeric characters and spaces are allowed."
              @input="validateName"
            />
            <span v-if="nameError" class="error">{{ nameError }}</span>
          </div>
  
          <!-- Department Dropdown -->
          <div class="form-group">
            <label for="department">Department:</label>
            <select v-model="equipment.department" required>
              <option disabled value="">Select Department</option>
              <option value="IT">IT</option>
              <option value="Nursing">Nursing</option>
              <option value="Sports">Sports</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Other">Other</option>
            </select>
          </div>
  
          <!-- Additional Form Fields -->
  
          <div class="form-group">
            <label for="reservable">Reservable:</label>
            <select v-model="equipment.reservable">
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
  
          <div class="form-group">
            <label for="approvalRequired">Approval Required:</label>
            <input type="checkbox" v-model="equipment.approvalRequired" />
          </div>
          <div class="form-group">
            <label for="description">Description:</label>
            <textarea v-model="equipment.description"></textarea>
          </div>
  
          <button type="submit">
            {{ isEditing ? 'Update Equipment' : 'Create Equipment' }}
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Container for Quick Links and Form */
  .container {
    display: flex; /* Use Flexbox for horizontal layout */
    min-height: 100vh; /* Full viewport height */
  }
  
  /* Quick Links Sidebar */
  .quick-links {
    width: 250px; /* Sidebar width */
    background-color: #f8f9fa;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Right shadow for depth */
    height: 100vh; /* Full height */
    position: fixed; /* Fix the sidebar */
    overflow-y: auto; /* Scroll if content overflows */
  }
  
  /* Main Form Section */
  .form-container {
    flex: 1; /* Take remaining space */
    margin-left: 270px; /* Offset by the width of the sidebar */
    padding: 30px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Form Group Styling */
  .form-group {
    margin-bottom: 20px;
    display: flex; /* Align label and input horizontally */
    align-items: center; /* Center vertically */
  }
  
  .form-group label {
    margin-right: 15px; /* Adds space between the label and input */
    font-size: 16px;
    flex: 0 0 200px; /* Fix label width to make form more consistent */
  }
  
  .form-group input[type="text"],
  .form-group select,
  .form-group textarea {
    flex-grow: 1; /* Allow input fields to grow and take available space */
  }
  
  .form-group input[type="checkbox"] {
    transform: scale(1.5); /* Increase the size of the checkbox */
    margin: 0; /* Remove all margins */
    align-self: flex-start; /* Align the checkbox to the start of the container */
  }
  
  /* Input, Select, and Textarea */
  input,
  select,
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  /* Button Styling */
  button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  /* Quick Links List Styling */
  .quick-links ul {
    list-style-type: none;
    padding: 0;
  }
  
  .quick-links li {
    margin-bottom: 15px;
  }
  
  .quick-links a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
    display: block;
    padding: 10px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  .quick-links a:hover {
    background-color: #e9ecef;
  }
  
  .quick-links i {
    margin-right: 10px;
  }
  </style>
  
  <script>
    import eventBus from '../eventBus'; // Adjust the path based on your project structure
    export default {
      data() {
        return {
          equipment: {
            name: '',
            department: '',
            description: '',
            reservable: 1,
            approvalRequired: true,
          },
          nameError: '',
          isEditing: false
        };
      },
      created() {
      // If we're editing, load the equipment details based on the ID
      const equipmentId = this.$route.params.id;
      console.log('Equipment ID:', equipmentId);
      if (equipmentId) {
        this.isEditing = true;
        this.loadEquipment(equipmentId);
      }else {
        this.equipment = {
      name: '',
      department: '',
      description: '',
      reservable: 1,
      approvalRequired: true
    };
      }
    },
      methods: {
        validateFormBeforeSubmit() {
    console.log('Form submitted with data:', {
      isEditing: this.isEditing,
      equipment: this.equipment
    });
    return true;
  },
             // Method to fetch existing equipment data for editing
      async loadEquipment(id) {
        try {
          const response = await fetch(`https://localhost:7075/api/equipments/${id}`);
          const result = await response.json();
          if (response.ok) {
            this.equipment = result;  // Pre-fill form with data from the API
          } else {
            console.error('Error loading equipment:', result);
            alert('Failed to load equipment data.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Error fetching equipment details.');
        }
      },
        async createEquipment() {
          console.log('createEquipment method called');
  
          try {
    const response = await fetch('https://localhost:7075/api/equipments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.equipment),
    });
  
    console.log('Create Response:', {
      status: response.status,
      statusText: response.statusText
    });
    if (response.status === 201) {
        const result = await response.json();
        console.log('Equipment created successfully:', result);
  
        eventBus.showSnackbar({
          message: 'Item created successfully!',
          color: 'green',
          timeout: 3000,
        });
  
        this.$router.push({ name: 'AllItems' });
      }else {
        const errorResponse = await response.json();
        console.error('Error Response:', errorResponse);
        throw new Error(errorResponse.message || 'Failed to create equipment');
      }
  //   if (!response.ok) {
  //     const errorResponse = await response.json();  // Get the detailed error response
  //     console.error('Error Response:', errorResponse);  // Log the backend error message
  //     throw new Error(errorResponse.message || 'Failed to create equipment');
  //   }
  
  //   const result = await response.json();
  //   console.log('Equipment created successfully:', result);
  // // Use the event bus to show the snackbar
  // eventBus.showSnackbar({
  //         message: 'Item created successfully!',
  //         color: 'green',
  //         timeout: 3000, // You can adjust the duration here
  //       });
  //   this.$router.push({ name: 'AllItems' });
  
    //alert('Equipment created successfully!');
  } catch (error) {
    console.error(error);
    alert('Error creating equipment. Please try again.');
  }
  
        },
  
        // Update existing equipment
      async updateEquipment() {
        try {
          const equipmentId = this.$route.params.id;
          const response = await fetch(`https://localhost:7075/api/equipments/${equipmentId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.equipment),
          });
          console.log('Response Status Code:', response.status);
  
          if (response.status === 204) {
        console.log('Equipment updated successfully: No content returned');
        eventBus.showSnackbar({
          message: 'Item updated successfully!',
          color: 'green',
          timeout: 3000,
        });
        this.$router.push({ name: 'AllItems' });
        return;
      }
          if (!response.ok) {
            const errorResponse = await response.json();
            console.error('Error Response:', errorResponse);
            throw new Error(errorResponse.message || 'Failed to update equipment');
          }
  
          const result = await response.json();
          console.log('Equipment updated successfully:', result);
  
          eventBus.showSnackbar({
            message: 'Item updated successfully!',
            color: 'green',
            timeout: 3000,
          });
          this.$router.push({ name: 'AllItems' });
        } catch (error) {
          console.error(error);
          alert('Error updating equipment. Please try again.');
        }
      },
      },
    };
  </script>
  