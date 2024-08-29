<template>
    <div class="profile-management">
      
  
      <!-- Profile Information Section -->
      <div class="card profile-info">
        <h2>Profile Information</h2>
        <div v-if="!isEditing">
          <p><strong>Name:</strong> {{ profile.name }}</p>
          <p><strong>Email:</strong> {{ profile.email }}</p>
          <p><strong>Role:</strong> {{ profile.role }}</p>
          <button @click="isEditing = true" class="edit-button">Edit Profile</button>
        </div>
        <div v-else>
          <form @submit.prevent="updateProfile">
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" v-model="profile.name" required class="input-field" />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" v-model="profile.email" required class="input-field" />
            </div>
            <div class="form-group">
              <label for="role">Role:</label>
              <input type="text" v-model="profile.role" readonly class="input-field" />
            </div>
            <div class="form-actions">
              <button type="submit" class="save-button">Save Changes</button>
              <button @click="isEditing = false" class="cancel-button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
  
      <!-- Notification Preferences Section -->
      <div class="card notification-preferences">
        <h2>Notification Preferences</h2>
        <form @submit.prevent="updateNotificationPreferences">
          <div class="form-group">
            <label>
              <input type="checkbox" v-model="preferences.emailNotifications" />
              Email Notifications
            </label>
          </div>
          <div class="form-group">
            <label>
              <input type="checkbox" v-model="preferences.smsNotifications" />
              SMS Notifications
            </label>
          </div>
          <button type="submit" class="save-button">Save Preferences</button>
        </form>
      </div>
  
      <!-- Auto-Approve Rules Section -->
      <div class="card auto-approve-rules">
        <h2>Auto-Approve Rules</h2>
        <form @submit.prevent="updateAutoApproveRules">
          <div class="form-group">
            <label for="autoApprove">Auto-Approve Requests:</label>
            <select v-model="autoApproveRule" class="input-field">
              <option value="none">None</option>
              <option value="students">Student Requests</option>
              <option value="all">All Requests</option>
            </select>
          </div>
          <button type="submit" class="save-button">Save Rule</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AdminProfile",
    data() {
      return {
        isEditing: false,
        profile: {
          name: "John Doe",
          email: "john.doe@centria.fi",
          role: "Teacher",
        },
        preferences: {
          emailNotifications: true,
          smsNotifications: false,
        },
        autoApproveRule: "none",
      };
    },
    methods: {
      updateProfile() {
        // Here you would typically make an API call to update the profile information
        console.log("Profile updated:", this.profile);
        this.isEditing = false;
      },
      updateNotificationPreferences() {
        // Here you would typically make an API call to save the notification preferences
        console.log("Notification preferences updated:", this.preferences);
      },
      updateAutoApproveRules() {
        // Here you would typically make an API call to save the auto-approve rule
        console.log("Auto-approve rule updated:", this.autoApproveRule);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Container for the entire profile management page */
  .profile-management {
    padding: 20px;
    max-width: 800px;
    margin: auto;
    font-family: 'Arial', sans-serif;
  }
  
  /* Headings for the sections */
  h1 {
    font-size: 32px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }
  
  h2 {
    font-size: 24px;
    color: #555;
    margin-bottom: 10px;
    border-bottom: 2px solid #007bff;
    padding-bottom: 10px;
  }
  
  /* Card style for each section */
  .card {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
  }
  
  /* Form group styling */
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }
  
  .input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
  }
  
  /* Button styles */
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  .save-button {
    background-color: #28a745;
    color: #fff;
  }
  
  .save-button:hover {
    background-color: #218838;
  }
  
  .cancel-button {
    background-color: #dc3545;
    color: #fff;
    margin-left: 10px;
  }
  
  .cancel-button:hover {
    background-color: #c82333;
  }
  
  .edit-button {
    background-color: #007bff;
    color: #fff;
  }
  
  .edit-button:hover {
    background-color: #0056b3;
  }
  
  /* Form actions section */
  .form-actions {
    margin-top: 20px;
    text-align: right;
  }
  
  /* Specific styling for checkboxes */
  .form-group input[type="checkbox"] {
    margin-right: 10px;
  }
  
  /* Responsive design */
  @media (max-width: 600px) {
    .profile-management {
      padding: 10px;
    }
  
    h1 {
      font-size: 24px;
    }
  
    h2 {
      font-size: 20px;
    }
  
    .input-field {
      padding: 8px;
    }
  
    button {
      padding: 8px 16px;
      font-size: 14px;
    }
  }
  </style>
  