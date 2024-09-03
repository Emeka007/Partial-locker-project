<template>
  <div class="upload-pop">
    <nav class="sidebar">
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
    </nav>
    <div class="main-content">
      <header>
        <h3>Upload Item</h3>
        <button class="done-button">Done</button>
      </header>
      <form @submit.prevent="submitForm" class="upload-form">
        <div class="form-column left-column">
          <div class="file-upload">
            <label>Drop files to upload or select</label>
            <input type="file" @change="handleFileUpload" multiple />
          </div>
        </div>
        <div class="form-column right-column">
          <div class="form-group">
            <label for="item-description">Item description</label>
            <input type="text" id="item-description" v-model="itemDescription" class="item-description-input" />
          </div>
          <div class="form-group">
            <label for="item-name">Item Name</label>
            <input type="text" id="item-name" v-model="itemName" placeholder="Item Name" />
          </div>
          <div class="form-group">
            <label for="category">Category</label>
            <select id="category" v-model="category">
              <option value="" disabled selected>Select Category</option>
              <option value="Technology">Technology</option>
              <option value="Nursing">Nursing</option>
              <option value="Business">Business</option>
              <option value="Engineering">Engineering</option>
              <option value="Chemistry">Chemistry</option>
            </select>
          </div>
          <div class="form-group">
            <label for="reservable">Reservable</label>
            <input type="checkbox" id="reservable" v-model="reservable" checked/>
          </div>
          <div class="form-group">
            <label for="approval">Approval</label>
            <input type="checkbox" id="approval" v-model="approval" checked/>
          </div>
          <div class="form-group">
            <label for="status">Status</label>
            <select id="status" v-model="status" @change="handleStatusChange">
              <option value="" disabled selected>Select Status</option>
              <option value="Schedule">Schedule</option>
              <option value="Archive">Archive</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemDescription: '',
      itemName: '',
      category: '',
      status: '', // Status field
      reservable: true, // Checkbox for reservable
      approval: true, // Checkbox for approval
      files: [],
    };
  },
  methods: {
    handleFileUpload(event) {
      this.files = Array.from(event.target.files);
    },
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.itemDescription, this.itemName, this.category, this.reservable, this.approval, this.status, this.files);
    },
    handleLogout() {
      // Handle logout functionality
      console.log('Logout');
    },
    handleStatusChange(event) {
      if (event.target.value === 'Schedule') {
        this.$router.push('/upload-item'); // Navigate to UploadItem.vue
      }
    }
  },
};
</script>

<style scoped>
.upload-pop {
  display: flex;
}

.sidebar {
  width: 200px;
  background-color: #f8f9fa;
  padding: 20px;
  color: white;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
}

.sidebar i {
  margin-right: 10px; /* Space between icon and text */
  font-size: 18px;
}

.sidebar li a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  display: block;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.sidebar li a:hover {
  background-color: #e9ecef;
}

.main-content {
  flex: 1;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.done-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.upload-form {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Add space between the two columns */
}

.form-column {
  flex: 1;
}

.left-column {
  flex: 1; /* 50% of the space */
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
}

.right-column {
  flex: 1; /* 50% of the space */
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column; /* Stack label and input vertically */
}

.form-group input,
.form-group select {
  padding: 10px;
}

.item-description-input {
  height: 190px; /* Increase height as needed */
  resize: vertical; /* Allows the user to resize vertically */
}

/* Placeholder styling for faded text */
.form-group input::placeholder {
  color: #888; /* Light gray color for faded effect */
}

.file-upload {
  border: 2px dashed #ccc;
  padding: 270px; /* Adjust padding to increase height */
  text-align: center;
  cursor: pointer;
  width: 100%; /* Ensure the file upload box takes full width */
}

.file-upload label {
  display: block;
  margin-bottom: 10px;
}

.file-upload input {
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
