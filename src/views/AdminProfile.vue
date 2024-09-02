<template>
  <div class="profile-management">
    <h1>Profile Management</h1>

    <!-- Profile Picture Section -->
    <div class="card profile-picture">
      <h2>Profile Picture</h2>
      <div class="profile-pic-wrapper">
        <img :src="profile.picture" alt="Profile Picture" class="profile-pic" />
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

    <!-- Change Password Section -->
    <div class="card change-password">
      <h2>Change Password</h2>
      <form @submit.prevent="changePassword">
        <div class="form-group">
          <label for="currentPassword">Current Password:</label>
          <input type="password" v-model="currentPassword" required class="input-field" />
        </div>
        <div class="form-group">
          <label for="newPassword">New Password:</label>
          <input type="password" v-model="newPassword" required class="input-field" />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm New Password:</label>
          <input type="password" v-model="confirmPassword" required class="input-field" />
        </div>
        <button type="submit" class="save-button">Change Password</button>
      </form>
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

    <!-- Activity Log Section -->
    <div class="card activity-log">
      <h2>Recent Activity</h2>
      <ul>
        <li v-for="activity in activities" :key="activity.id">
          {{ activity.timestamp }} - {{ activity.action }}
        </li>
      </ul>
    </div>

    <!-- Security Settings Section -->
    <div class="card security-settings">
      <h2>Security Settings</h2>
      <form @submit.prevent="updateSecuritySettings">
        <div class="form-group">
          <label>
            <input type="checkbox" v-model="security.twoFactorAuth" />
            Enable Two-Factor Authentication
          </label>
        </div>
        <div class="form-group">
          <label for="linkedAccounts">Linked Accounts:</label>
          <input type="text" v-model="security.linkedAccounts" readonly class="input-field" />
        </div>
        <button type="submit" class="save-button">Update Security</button>
      </form>
    </div>

    <!-- Help & Support Section -->
    <div class="card help-support">
      <h2>Help & Support</h2>
      <p>If you have any issues or need assistance, please contact support or visit our <a href="#">knowledge base</a>.</p>
      <button @click="contactSupport" class="support-button">Contact Support</button>
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
        email: "john.doe@example.com",
        role: "Administrator",
        phone: "123-456-7890",
        address: "1234 Elm Street",
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
        reader.onload = e => {
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
      alert("Contacting support...");
    },
  },
};
</script>

<style scoped>
/* General styles for profile management page */
.profile-management {
  padding: 20px;
  max-width: 900px;
  margin: auto;
  font-family: 'Arial', sans-serif;
}

/* Headings and Card styling */
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

.card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

/* Profile Picture styling */
.profile-pic-wrapper {
  text-align: center;
  margin-bottom: 20px;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.upload-input {
  display: block;
  margin: 10px auto;
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

.support-button {
  background-color: #17a2b8;
  color: #fff;
}

.support-button:hover {
  background-color: #138496;
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

/* Activity Log Styling */
.activity-log ul {
  list-style: none;
  padding-left: 0;
}

.activity-log li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
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
