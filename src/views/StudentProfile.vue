<template>
  <div class="profile">
    <Header class="header" />

    <div class="profile-container">
      <!-- Photo Section -->
      <section class="photo-section">
        <img :src="profile.photoUrl" alt="Profile Photo" class="profile-photo" />
        <div class="profile-info">
          <h1>{{ profile.fullName }}</h1>
          <p class="profile-program">{{ profile.program }}</p>
        </div>
      </section>

      <!-- Basic Information Section -->
      <section class="card">
        <h2>Basic Information</h2>
        <dl>
          <div class="info-row">
            <dt>Student ID</dt>
            <dd>{{ profile.studentId }}</dd>
          </div>
          <div class="info-row">
            <dt>Study Period</dt>
            <dd>{{ profile.studyPeriod }}</dd>
          </div>
        </dl>
      </section>

      <!-- Academic Details Section -->
      <section class="card">
        <h2>Academic Details</h2>
        <dl>
          <div class="info-row">
            <dt>Attendance</dt>
            <dd>{{ profile.attendance }}</dd>
          </div>
          <div class="info-row">
            <dt>PSP</dt>
            <dd>{{ profile.psp }}</dd>
          </div>
          <div class="info-row">
            <dt>Completed Studies</dt>
            <dd>{{ profile.completedStudies }}</dd>
          </div>
          <div class="info-row">
            <dt>Student Exchange</dt>
            <dd>{{ profile.studentExchange }}</dd>
          </div>
        </dl>
      </section>

      <!-- Personal Details Section -->
      <section class="card">
        <h2>Personal Details</h2>
        <dl>
          <div class="info-row">
            <dt>Date of Birth</dt>
            <dd>{{ profile.dateOfBirth }}</dd>
          </div>
          <div class="info-row">
            <dt>Nationality</dt>
            <dd>{{ profile.nationality }}</dd>
          </div>
          <div class="info-row">
            <dt>Gender</dt>
            <dd>{{ profile.gender }}</dd>
          </div>
        </dl>
      </section>

      <!-- Contact Information Section -->
      <section class="card">
        <div class="contact-header">
          <h2>Contact Information</h2>
          <!-- Edit/Save Button next to heading -->
          <button v-if="isEditing" @click="saveProfile" class="edit-button">Save</button>
          <button v-else @click="toggleEdit" class="edit-button">
            <i class="fas fa-edit"></i> Edit contact information
          </button>
        </div>
        <dl>
          <div class="info-row">
           <dt>Email <span class="email-label-note">(given by school)</span></dt>
           <dd>{{ profile.email }}</dd> 
         </div>
          <div class="info-row">
            <dt>Other Email </dt>
            <dd>
              <input v-if="isEditing" v-model="profile.email" class="input-edit" />
              <span v-else>{{ profile.email }}</span>
            </dd>
          </div>
          <div class="info-row">
            <dt>Telephone</dt>
            <dd>
              <input v-if="isEditing" v-model="profile.phoneNumber" class="input-edit" />
              <span v-else>{{ profile.phoneNumber }}</span>
            </dd>
          </div>
          <div class="info-row">
            <dt>Street Address</dt>
            <dd>
              <input v-if="isEditing" v-model="profile.streetAddress" class="input-edit" />
              <span v-else>{{ profile.streetAddress }}</span>
            </dd>
          </div>
          <div class="info-row">
            <dt>Postal Code</dt>
            <dd>
              <input v-if="isEditing" v-model="profile.postalCode" class="input-edit" />
              <span v-else>{{ profile.postalCode }}</span>
            </dd>
          </div>
          <div class="info-row">
            <dt>City</dt>
            <dd>
              <input v-if="isEditing" v-model="profile.city" class="input-edit" />
              <span v-else>{{ profile.city }}</span>
            </dd>
          </div>
        </dl>
      </section>

      <!-- Settings Section -->
      <section class="card">
        <h2>Settings</h2>
        <dl>
          <div class="info-row">
            <dt>Language of School Education</dt>
            <dd>{{ profile.schoolLanguage }}</dd>
          </div>
        </dl>
      </section>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import johnPhoto from '@/assets/john.jpg';

export default {
  components: {
    Header,
  },
  data() {
    return {
      isEditing: false, // Edit mode off by default
      profile: {
        studentId: '123456',
        fullName: 'John Doe',
        program: 'Bachelor of Engineering, Information Technology',
        studyPeriod: '01.08.2022 - 31.07.2026',
        attendance: 'Available',
        psp: 'Not Started',
        completedStudies: 'Pending',
        studentExchange: 'Not Applicable',
        dateOfBirth: '19.19.1999',
        nationality: 'China',
        gender: 'Male',
        email: 'john.doe@centria.fi',
        otheremail: 'john_doe@yahoo.com',
        phoneNumber: '+358434567890',
        streetAddress: 'Vidnasinkatu 2,',
        postalCode: '67100',
        city: 'Kokkola',
        schoolLanguage: 'Other',
        photoUrl: johnPhoto,
      },
    };
  },
  methods: {
    // Method to toggle edit mode for Contact Information
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
    // Method to save the profile (only for contact information)
    saveProfile() {
      console.log('Profile contact information saved:', this.profile);
      this.isEditing = false; // Exit edit mode after saving
      // Typically, send the updated profile data to a server here
    },
  },
};
</script>

<style scoped>
/* Main layout */
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.header {
  width: 100%;
}

.profile-container {
  width: 100%;
  max-width: 900px;
  padding: 20px;
  margin-top: 30px;
  box-sizing: border-box;
}

.profile-container section:last-of-type {
  margin-bottom: 80px;
}

/* Contact Information Header */
.contact-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Edit/Save Button */
.edit-button {
  background-color: white;
  color: black;
  padding: 10px 20px;
  border: 1px solid grey;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center; /* Aligns icon and text vertically */
}

.edit-button i {
  margin-right: 8px; /* Adds space between the icon and text */
  font-size: 18px; /* Adjust the icon size */
}

.edit-button:hover {
  background-color: #f0f0f0;
}

/* Photo Section */
.photo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
  border: 3px solid #007bff;
}

.profile-info {
  text-align: center;
}

h1 {
  font-size: 26px;
  font-weight: 700;
  color: #333;
  margin: 0;
}

.profile-program {
  font-size: 16px;
  color: #555;
  margin-top: 5px;
}

/* Input field styling */
.input-edit {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
}

/* Card Section */
.card {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

h2 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
}

/* Info Rows */
.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

dt {
  font-weight: bold;
  color: #333;
}

dd {
  margin: 0;
  color: #666;
  font-size: 16px;
}

.email-label-note {
  color: grey;
  font-style: italic;
}

/* Responsive Design */
@media (max-width: 768px) {
  .info-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .photo-section {
    margin-bottom: 25px;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 18px;
  }
}
</style>
