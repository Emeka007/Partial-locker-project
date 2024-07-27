<template>
  <div class="profile">
    <Header class="header" />
    <div class="profile-container">
      
      <!-- Photo Section -->
      <section class="photo-section">
        <img :src="profile.photoUrl" alt="Profile Photo" class="profile-photo" />
      </section>
      
      <!-- Basic Information Section -->
      <section>
        <h2>Basic Information</h2>
        <dl>
          <div>
            <dt>Student ID</dt>
            <dd>{{ profile.studentId }}</dd>
          </div>
          <div>
            <dt>Name</dt>
            <dd>{{ profile.fullName }}</dd>
          </div>
          <div>
            <dt>Program</dt>
            <dd>{{ profile.program }}</dd>
          </div>
          <div>
            <dt>Study Period</dt>
            <dd>{{ profile.studyPeriod }}</dd>
          </div>
        </dl>
      </section>
  
      <!-- Information Section -->
      <section>
        <h2>Information</h2>
        <dl>
          <div>
            <dt>Attendance</dt>
            <dd>{{ profile.attendance }}</dd>
          </div>
          <div>
            <dt>PSP</dt>
            <dd>{{ profile.psp }}</dd>
          </div>
          <div>
            <dt>Completed Studies</dt>
            <dd>{{ profile.completedStudies }}</dd>
          </div>
          <div>
            <dt>Student Exchange</dt>
            <dd>{{ profile.studentExchange }}</dd>
          </div>
        </dl>
      </section>
  
      <!-- Personal Details Section -->
      <section>
        <h2>Personal Details</h2>
        <dl>
          <div>
            <dt>Date of Birth</dt>
            <dd>{{ profile.dateOfBirth }}</dd>
          </div>
          <div>
            <dt>Social Security Number</dt>
            <dd>{{ profile.socialSecurityNumber }}</dd>
          </div>
          <div>
            <dt>Nationality</dt>
            <dd>{{ profile.nationality }}</dd>
          </div>
          <div>
            <dt>Sex/Gender</dt>
            <dd>{{ profile.gender }}</dd>
          </div>
          <div>
            <dt>Mother Tongue</dt>
            <dd>{{ profile.motherTongue }}</dd>
          </div>
          <div>
            <dt>Contact Language</dt>
            <dd>{{ profile.contactLanguage }}</dd>
          </div>
        </dl>
      </section>
  
      <!-- Contact Information Section -->
      <section>
        <h2>Contact Information</h2>
        <dl>
          <div>
            <dt>Email</dt>
            <dd>{{ profile.email }}</dd>
          </div>
          <div>
            <dt>Phone Number</dt>
            <dd>{{ profile.phoneNumber }}</dd>
          </div>
          <div>
            <dt>Address</dt>
            <dd>{{ profile.address }}</dd>
          </div>
        </dl>
      </section>
  
      <!-- Settings Section -->
      <section>
        <h2>Settings</h2>
        <dl>
          <div>
            <dt>Language of School Education</dt>
            <dd>{{ profile.schoolLanguage }}</dd>
          </div>
        </dl>
      </section>
    </div>
  </div>
</template>
  
<script>
import Header from '@/components/Header.vue'; // Import the Header component
import johnPhoto from '@/assets/john.jpg'; // Import the photo

export default {
  components: {
    Header, // Register the Header component
  },
  data() {
    return {
      profile: {
        studentId: '4403157',
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
        photoUrl: johnPhoto, // Use the imported photo
      },
    };
  },
};
</script>
  
<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.header {
  width: 100%;
}

.profile-container {
  padding: 20px;
  width: 100%;
  box-sizing: border-box; /* Ensure padding is included in the element's total width and height */
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
}

.photo-section {
  text-align: center;
  margin-bottom: 20px;
}

.profile-photo {
  max-width: 200px;
  border-radius: 50%;
}

dl {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  margin-bottom: 20px;
}

dt {
  font-weight: bold;
}

dd {
  margin: 0;
}
</style>
