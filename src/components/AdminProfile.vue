<template>
  <div class="admin-container">
    <!-- Quick Links Section -->
    <div class="quick-links">
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
    </div>

    <!-- Profile Management Section -->
    <div class="profile-management">
      <!-- Top Section with Admin Image and Search Bar -->
      <div class="top-section">
        <div class="admin-image">
          <img :src="require('@/assets/admin.png')" alt="Admin Image" class="admin-pic" />
        </div>
        <div class="search-bar">
          <input type="text" placeholder="Search..." v-model="searchQuery" />
          <i class="fas fa-search"></i>
        </div>
      </div>

      <!-- Profile Picture Section -->
      <div class="card profile-picture">
        <h2>Profile Picture</h2>
        <div class="profile-pic-wrapper">
          <img :src="require('@/assets/admin.png')" alt="Profile Picture" class="profile-pic" />
          <input type="file" @change="uploadPicture" class="upload-input" />
        </div>
      </div>

      <!-- Profile Information Section -->
      <div class="card profile-info">
        <h2>Profile Information</h2>
        <div v-if="!isEditing">
          <p><strong>Name:</strong> {{ profile.name }}</p>
          <p><strong>Email:</strong> {{ profile.email }}</p>
          <p><strong>Role:</strong> {{ profile.role }}</p>
          <p><strong>Phone:</strong> {{ profile.phone }}</p>
          <p><strong>Address:</strong> {{ profile.address }}</p>
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
            <div class="form-group">
              <label for="phone">Phone:</label>
              <input type="text" v-model="profile.phone" class="input-field" />
            </div>
            <div class="form-group">
              <label for="address">Address:</label>
              <input type="text" v-model="profile.address" class="input-field" />
            </div>
            <div class="form-actions">
              <button type="submit" class="save-button">Save Changes</button>
              <button @click="isEditing = false" class="cancel-button">Cancel</button>
            </div>
          </form>
        </div>
      </div>

      <!-- Help & Support Section -->
      <div class="card help-support">
        <h2>Help & Support</h2>
        <p>If you have any issues or need assistance, please contact support or visit our <a href="#">knowledge base</a>.</p>
        <button @click="contactSupport" class="support-button">Contact Support</button>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: "AdminProfile",
  data() {
    return {
      isEditing: false,
      searchQuery: "",
      profile: {
        name: "John Doe",
        email: "john.doe@centria.fi",
        role: "Administrator",
        phone: "043-456-7890",
        address: "Talonpojankatu 2, 67100 Kokkola",
        picture: "path/to/profile-picture.jpg",
      },
      preferences: {
        emailNotifications: true,
        smsNotifications: false,
      },
      autoApproveRule: "none",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      activities: [
        { id: 1, timestamp: "2024-08-01 10:00 AM", action: "Approved a parcel locker request" },
        { id: 2, timestamp: "2024-08-01 09:45 AM", action: "Updated profile information" },
      ],
      security: {
        twoFactorAuth: false,
        linkedAccounts: "Google, Facebook",
      },
    };
  },
  methods: {
    uploadPicture(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profile.picture = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    updateProfile() {
      console.log("Profile updated:", this.profile);
      this.isEditing = false;
    },
    changePassword() {
      if (this.newPassword === this.confirmPassword) {
        console.log("Password changed successfully.");
      } else {
        alert("Passwords do not match.");
      }
    },
    updateNotificationPreferences() {
      console.log("Notification preferences updated:", this.preferences);
    },
    updateAutoApproveRules() {
      console.log("Auto-approve rule updated:", this.autoApproveRule);
    },
    updateSecuritySettings() {
      console.log("Security settings updated:", this.security);
    },
    contactSupport() {
      console.log("Contacting support...");
    },
    handleLogout() {
      console.log("Logged out successfully.");
      // Add your logout logic here
    },
  },
};
</script>

<style scoped>
.admin-container {
  display: flex;
}

.quick-links {
  width: 250px;
  background-color: #f8f9fa;
  padding: 20px;
}

.quick-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.quick-links li {
  margin-bottom: 15px;
}

.quick-links a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  display: block; /* Ensures the entire link area is clickable */
  padding: 10px; /* Adds padding to the links */
  transition: background-color 0.3s, color 0.3s; /* Smooth transition for background color and text color */
  border-radius: 4px; /* Rounds the corners of the links */
}

.quick-links a:hover {
  background-color: #007bff; /* Adds a background color on hover */
  color: #ffffff; /* Changes text color on hover */
}

.quick-links i {
  margin-right: 10px;
  font-size: 18px; /* Adjust icon size as needed */
  vertical-align: middle; /* Aligns the icon vertically with the text */
}

/* Profile Management Section */
.profile-management {
  flex-grow: 1;
  padding: 20px;
  margin-left: 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

/* Top Section with Search Bar and Admin Image */
.top-section {
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Aligns items to the right */
  margin-bottom: 20px;
}

.admin-image {
  margin-right: 15px; /* Adds space between the admin image and the search bar */
}

.admin-image .admin-pic {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 4px;
  padding: 5px 10px;
}

.search-bar input {
  border: none;
  background-color: transparent;
  outline: none;
  padding: 5px;
  margin-right: 10px;
}

.search-bar i {
  color: #007bff;
}

/* Other Styles */
.card {
  background-color: #f8f9fa;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.profile-pic-wrapper {
  display: flex;
  align-items: center;
}

.profile-pic {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
}

.upload-input {
  font-size: 14px;
}

.input-field {
  width: 100%;
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #ced4da;
}

.edit-button,
.save-button,
.cancel-button,
.support-button {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.edit-button:hover,
.save-button:hover,
.cancel-button:hover,
.support-button:hover {
  background-color: #0056b3;
}

.cancel-button {
  background-color: #6c757d;
  margin-left: 10px;
}

.cancel-button:hover {
  background-color: #5a6268;
}

.form-group {
  margin-bottom: 20px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}
</style>
