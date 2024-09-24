<template>
  <div class="profile">
    <Header class="header" />

    <div class="profile-container">
      <!-- Photo Section -->
      <section class="photo-section">
        <img :src="profile.photoUrl" alt="Profile Photo" class="profile-photo" />
        <div class="profile-info">
          <input v-if="isEditing" v-model="profile.fullName" class="input-edit" />
          <h1 v-else>{{ profile.fullName }}</h1>

          <input v-if="isEditing" v-model="profile.program" class="input-edit" />
          <p v-else class="profile-program">{{ profile.program }}</p>
        </div>
      </section>

      <!-- Basic Information Section -->
      <section class="card">
        <h2>Basic Information</h2>
        <dl>
          <div class="info-row">
            <dt>Student ID</dt>
            <dd>
              <input v-if="isEditing" v-model="profile.studentId" class="input-edit" />
              <span v-else>{{ profile.studentId }}</span>
            </dd>
          </div>
          <div class="info-row">
            <dt>Study Period</dt>
            <dd>
              <input v-if="isEditing" v-model="profile.studyPeriod" class="input-edit" />
              <span v-else>{{ profile.studyPeriod }}</span>
            </dd>
          </div>
        </dl>
      </section>

      <!-- Academic Details Section -->
      <section class="card">
        <h2>Academic Details</h2>
        <dl>
          <div class="info-row">
            <dt>Attendance</dt>
            <dd>
              <input v-if="isEditing" v-model="profile.attendance" class="input-edit" />
              <span v-else>{{ profile.attendance }}</span>
            </dd>
          </div>
          <div class="info-row">
            <dt>PSP</dt>
            <dd>
              <input v-if="isEditing" v-model="profile.psp" class="input-edit" />
              <span v-else>{{ profile.psp }}</span>
            </dd>
          </div>
          <div class="info-row">
            <dt>Completed Studies</dt>
            <dd>
              <input v-if="isEditing" v-model="profile.completedStudies" class="input-edit" />
              <span v-else>{{ profile.completedStudies }}</span>
            </dd>
          </div>
          <div class="info-row">
            <dt>Student Exchange</dt>
            <dd>
              <input v-if="isEditing" v-model="profile.studentExchange" class="input-edit" />
              <span v-else>{{ profile.studentExchange }}</span>
            </dd>
          </div>
        </dl>
      </section>

      <!-- Personal Details Section -->
      <section class="card">
        <h2>Personal Details</h2>
        <dl>
          <div class="info-row">
            <dt>Date of Birth</dt>
            <dd>
              <input v-if="isEditing" v-model="profile.dateOfBirth" class="input-edit" />
              <span v-else>{{ profile.dateOfBirth }}</span>
            </dd>
          </div>
          <div class="info-row">
            <dt>Nationality</dt>
            <dd>
              <input v-if="isEditing" v-model="profile.nationality" class="input-edit" />
              <span v-else>{{ profile.nationality }}</span>
            </dd>
          </div>
          <div class="info-row">
            <dt>Gender</dt>
            <dd>
              <input v-if="isEditing" v-model="profile.gender" class="input-edit" />
              <span v-else>{{ profile.gender }}</span>
            </dd>
          </div>
        </dl>
      </section>

      <!-- Contact Information Section -->
      <section class="card">
        <h2>Contact Information</h2>
        <dl>
          <div class="info-row">
            <dt>Email</dt>
            <dd>
              <input v-if="isEditing" v-model="profile.email" class="input-edit" />
              <span v-else>{{ profile.email }}</span>
            </dd>
          </div>
          <div class="info-row">
            <dt>Phone Number</dt>
            <dd>
              <input v-if="isEditing" v-model="profile.phoneNumber" class="input-edit" />
              <span v-else>{{ profile.phoneNumber }}</span>
            </dd>
          </div>
          <div class="info-row">
            <dt>Address</dt>
            <dd>
              <input v-if="isEditing" v-model="profile.address" class="input-edit" />
              <span v-else>{{ profile.address }}</span>
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
            <dd>
              <input v-if="isEditing" v-model="profile.schoolLanguage" class="input-edit" />
              <span v-else>{{ profile.schoolLanguage }}</span>
            </dd>
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
        phoneNumber: '+358434567890',
        address: 'Vidnasinkatu 2, Kokkola, Finland',
        schoolLanguage: 'Other',
        photoUrl: johnPhoto,
      },
    };
  },
  created() {
    // Check if the URL contains ?edit=true and enable editing if true
    if (this.$route.query.edit === 'true') {
      this.isEditing = true;
    }
  },
  methods: {
    // Method to save the profile
    saveProfile() {
      console.log('Profile data saved:', this.profile);
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

/* Edit/Save Button */
.edit-save-button {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.edit-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.edit-button:hover {
  background-color: #0056b3;
}

/* Photo Section */
.photo-section {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the image and text */
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
  text-align: center; /* Center-align the name and program */
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
