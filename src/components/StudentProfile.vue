<template>
  <div class="profile">
    <Header />
    <h1>Profile</h1>

    <!-- Edit Button -->
    <button @click="toggleEditMode" class="edit-button">
      {{ isEditing ? 'Save' : 'Edit' }}
    </button>

    <!-- Basic Information Section -->
    <section>
      <h2>Basic Information</h2>
      <dl>
        <div>
          <dt>Student ID</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.studentId" />
            <span v-else>{{ profile.studentId }}</span>
          </dd>
        </div>
        <div>
          <dt>Name</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.fullName" />
            <span v-else>{{ profile.fullName }}</span>
          </dd>
        </div>
        <div>
          <dt>Program</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.program" />
            <span v-else>{{ profile.program }}</span>
          </dd>
        </div>
        <div>
          <dt>Study Period</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.studyPeriod" />
            <span v-else>{{ profile.studyPeriod }}</span>
          </dd>
        </div>
      </dl>
    </section>

    <!-- Information Section -->
    <section>
      <h2>Information</h2>
      <dl>
        <div>
          <dt>Attendance</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.attendance" />
            <span v-else>{{ profile.attendance }}</span>
          </dd>
        </div>
        <div>
          <dt>PSP</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.psp" />
            <span v-else>{{ profile.psp }}</span>
          </dd>
        </div>
        <div>
          <dt>Completed Studies</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.completedStudies" />
            <span v-else>{{ profile.completedStudies }}</span>
          </dd>
        </div>
        <div>
          <dt>Student Exchange</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.studentExchange" />
            <span v-else>{{ profile.studentExchange }}</span>
          </dd>
        </div>
      </dl>
    </section>

    <!-- Personal Details Section -->
    <section>
      <h2>Personal Details</h2>
      <dl>
        <div>
          <dt>Date of Birth</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.dateOfBirth" />
            <span v-else>{{ profile.dateOfBirth }}</span>
          </dd>
        </div>
        <div>
          <dt>Social Security Number</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.socialSecurityNumber" />
            <span v-else>{{ profile.socialSecurityNumber }}</span>
          </dd>
        </div>
        <div>
          <dt>Nationality</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.nationality" />
            <span v-else>{{ profile.nationality }}</span>
          </dd>
        </div>
        <div>
          <dt>Sex/Gender</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.gender" />
            <span v-else>{{ profile.gender }}</span>
          </dd>
        </div>
        <div>
          <dt>Mother Tongue</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.motherTongue" />
            <span v-else>{{ profile.motherTongue }}</span>
          </dd>
        </div>
        <div>
          <dt>Contact Language</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.contactLanguage" />
            <span v-else>{{ profile.contactLanguage }}</span>
          </dd>
        </div>
      </dl>
    </section>

    <!-- Contact Information Section -->
    <section>
      <h2>Contact Information</h2>
      <dl>
        <div>
          <dt>Email</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.email" />
            <span v-else>{{ profile.email }}</span>
          </dd>
        </div>
        <div>
          <dt>Phone Number</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.phoneNumber" />
            <span v-else>{{ profile.phoneNumber }}</span>
          </dd>
        </div>
        <div>
          <dt>Address</dt>
          <dd>
            <input v-if="isEditing" v-model="profile.address" />
            <span v-else>{{ profile.address }}</span>
          </dd>
        </div>
      </dl>
    </section>

    <!-- Settings Section -->
    <section>
      <h2>Settings</h2>
      <dl>
        <div>
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
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

dl {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
}

dt {
  font-weight: bold;
}

dd {
  margin: 0;
}

input {
  padding: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

.edit-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
}

.edit-button:hover {
  background-color: #0056b3;
}
</style>
