<template>
  <div class="profile">
    <Header />

    <div class="profile-header">
      <h1>Profile</h1>

      <!-- Edit Button -->
      <button @click="toggleEditMode" class="edit-button">
        {{ isEditing ? 'Save' : 'Edit' }}
      </button>
    </div>

    <!-- Basic Information Section -->
    <section class="profile-section">
      <h2>Basic Information</h2>
      <dl>
        <div class="form-row">
          <dt>Student ID</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.studentId" />
            <span v-else>{{ profile.studentId }}</span>
          </dd>
        </div>
        <div class="form-row">
          <dt>Name</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.fullName" />
            <span v-else>{{ profile.fullName }}</span>
          </dd>
        </div>
        <div class="form-row">
          <dt>Program</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.program" />
            <span v-else>{{ profile.program }}</span>
          </dd>
        </div>
        <div class="form-row">
          <dt>Study Period</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.studyPeriod" />
            <span v-else>{{ profile.studyPeriod }}</span>
          </dd>
        </div>
      </dl>
    </section>

    <!-- Information Section -->
    <section class="profile-section">
      <h2>Information</h2>
      <dl>
        <div class="form-row">
          <dt>Attendance</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.attendance" />
            <span v-else>{{ profile.attendance }}</span>
          </dd>
        </div>
        <div class="form-row">
          <dt>PSP</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.psp" />
            <span v-else>{{ profile.psp }}</span>
          </dd>
        </div>
        <div class="form-row">
          <dt>Completed Studies</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.completedStudies" />
            <span v-else>{{ profile.completedStudies }}</span>
          </dd>
        </div>
        <div class="form-row">
          <dt>Student Exchange</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.studentExchange" />
            <span v-else>{{ profile.studentExchange }}</span>
          </dd>
        </div>
      </dl>
    </section>

    <!-- Personal Details Section -->
    <section class="profile-section">
      <h2>Personal Details</h2>
      <dl>
        <div class="form-row">
          <dt>Date of Birth</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.dateOfBirth" />
            <span v-else>{{ profile.dateOfBirth }}</span>
          </dd>
        </div>
        <div class="form-row">
          <dt>Social Security Number</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.socialSecurityNumber" />
            <span v-else>{{ profile.socialSecurityNumber }}</span>
          </dd>
        </div>
        <div class="form-row">
          <dt>Nationality</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.nationality" />
            <span v-else>{{ profile.nationality }}</span>
          </dd>
        </div>
        <div class="form-row">
          <dt>Sex/Gender</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.gender" />
            <span v-else>{{ profile.gender }}</span>
          </dd>
        </div>
        <div class="form-row">
          <dt>Mother Tongue</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.motherTongue" />
            <span v-else>{{ profile.motherTongue }}</span>
          </dd>
        </div>
        <div class="form-row">
          <dt>Contact Language</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.contactLanguage" />
            <span v-else>{{ profile.contactLanguage }}</span>
          </dd>
        </div>
      </dl>
    </section>

    <!-- Contact Information Section -->
    <section class="profile-section">
      <h2>Contact Information</h2>
      <dl>
        <div class="form-row">
          <dt>Email</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.email" />
            <span v-else>{{ profile.email }}</span>
          </dd>
        </div>
        <div class="form-row">
          <dt>Phone Number</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.phoneNumber" />
            <span v-else>{{ profile.phoneNumber }}</span>
          </dd>
        </div>
        <div class="form-row">
          <dt>Address</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.address" />
            <span v-else>{{ profile.address }}</span>
          </dd>
        </div>
      </dl>
    </section>

    <!-- Settings Section -->
    <section class="profile-section">
      <h2>Settings</h2>
      <dl>
        <div class="form-row">
          <dt>Language of School Education</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.schoolLanguage" />
            <span v-else>{{ profile.schoolLanguage }}</span>
          </dd>
        </div>
      </dl>
    </section>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'; // Import the Header component

export default {
  components: {
    Header, // Register the Header component
  },
  data() {
    return {
      isEditing: false, // Flag to toggle edit mode
      profile: {
        studentId: '2203815',
        fullName: 'John Hun',
        program: 'Bachelor of Engineering, Information Technology',
        studyPeriod: '01.08.2022 - 31.07.2026',
        attendance: 'Available',
        psp: 'Not Started',
        completedStudies: 'Pending',
        studentExchange: 'Not Applicable',
        dateOfBirth: '19.19.1999',
        socialSecurityNumber: '191999-785V',
        nationality: 'China',
        gender: 'Male',
        motherTongue: 'Mandarin',
        contactLanguage: 'English',
        email: 'john.hun@example.com',
        phoneNumber: '+1234567890',
        address: '123 Main Street, Anytown, Country',
        schoolLanguage: 'Other',
      },
    };
  },
  methods: {
    toggleEditMode() {
      this.isEditing = !this.isEditing;
      if (!this.isEditing) {
        // Save the updated profile
        this.saveProfile();
      }
    },
    saveProfile() {
      // Implement the logic to save the profile data here
      console.log('Profile saved:', this.profile);
    }
  }
};
</script>

<style scoped>
.profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

h1 {
  font-size: 28px;
  color: #333;
}

h2 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #555;
}

.profile-section {
  margin-bottom: 30px;
}

dl {
  display: grid;
  grid-template-columns: 150px 1fr;
  row-gap: 10px;
  column-gap: 20px;
}

dt {
  font-weight: bold;
  color: #333;
}

dd {
  margin: 0;
  font-size: 16px;
}

.form-row {
  display: flex;
  align-items: center;
}

input {
  padding: 10px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #007bff;
}

.edit-button {
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.edit-button:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  dl {
    grid-template-columns: 1fr;
  }

  .profile-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .edit-button {
    margin-top: 10px;
  }
}
</style>
