<template>
    <div class="upload-item">
      <nav class="sidebar">
        <ul>
          <li>
            <router-link to="/admindashboard">
              <i class="fas fa-tachometer-alt"></i> Dashboard
            </router-link>
          </li>
          <li>
            <router-link to="/item-management">
              <i class="fas fa-box"></i> Item Management
            </router-link>
          </li>
          <li>
            <router-link to="/reservation-list">
              <i class="fas fa-list"></i> Reservation List
            </router-link>
          </li>
          <li>
            <router-link to="/settings">
              <i class="fas fa-cog"></i> Settings
            </router-link>
          </li>
          <li>
            <router-link to="/logout">
              <i class="fas fa-sign-out-alt"></i> Logout
            </router-link>
          </li>
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
              <label for="item-name"></label>
              <input type="text" id="item-name" v-model="itemName" placeholder="Item Name" />
            </div>
            <div class="form-group">
              <label for="category"></label>
              <input type="text" id="category" v-model="category" placeholder="Category" />
            </div>
            <div class="form-group">
              <label>Item timeline</label>
              <div class="timeline-group">
                <select id="timeline-from" v-model="timelineFrom">
                  <option value="" disabled selected>From</option>
                  <option v-for="option in timelineOptions" :key="option" :value="option">{{ option }}</option>
                </select>
                <select id="timeline-to" v-model="timelineTo">
                  <option value="" disabled selected>To</option>
                  <option v-for="option in timelineOptions" :key="option" :value="option">{{ option }}</option>
                </select>
              </div>
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
        timelineFrom: '',
        timelineTo: '',
        files: [],
        timelineOptions: ['Option 1', 'Option 2', 'Option 3'], // Replace these with actual options
      };
    },
    methods: {
      handleFileUpload(event) {
        this.files = Array.from(event.target.files);
      },
      submitForm() {
        // Handle form submission
        console.log('Form submitted:', this.itemDescription, this.itemName, this.category, this.timelineFrom, this.timelineTo, this.files);
      },
    },
  };
  </script>
  
  <style scoped>
  .upload-item {
    display: flex;
  }
  
  .sidebar {
    width: 200px;
    background-color: #b8dbec;
    padding: 20px;
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
  color: #ecf0f1;
  font-size: 16px;
  display: block;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.sidebar li a:hover {
  background-color: #34495e;
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
  
  .form-group input {
    padding: 10px;
  }
  
  /* Specific styles for the Item description input */
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
  
  /* Styles for timeline dropdowns */
  .timeline-group {
    display: flex;
    justify-content: space-between;
    gap: 10px; /* Space between the two dropdowns */
  }
  
  .timeline-group select {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  