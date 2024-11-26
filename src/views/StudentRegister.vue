<template>
    <div class="register-container">
      <div class="register-form">
        <h1>Register</h1>
        <p>Please fill in the details to create an account</p>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="firstName">First Name:</label>
            <input type="text" v-model="firstName" required />
          </div>
          <div class="form-group">
            <label for="lastName">Last Name:</label>
            <input type="text" v-model="lastName" required />
          </div>
          <div class="form-group">
            <label for="dob">Date of Birth:</label>
            <input type="date" v-model="dob" required />
          </div>
          <div class="form-group">
            <label for="phoneNumber">Phone Number:</label>
            <input type="tel" v-model="phoneNumber" required />
          </div>
          <div class="form-group">
            <label for="nationality">Nationality:</label>
            <input type="text" v-model="nationality" required />
          </div>
          <div class="form-group">
            <label for="interests">Interests:</label>
            <div class="radio-group">
              <label><input type="radio" v-model="interest" value="Technology" /> Technology</label>
              <label><input type="radio" v-model="interest" value="Nursing" /> Nursing</label>
              <label><input type="radio" v-model="interest" value="Chemistry" /> Chemistry</label>
              <label><input type="radio" v-model="interest" value="Business" /> Business</label>
              <label><input type="radio" v-model="interest" value="Engineering" /> Engineering</label>
            </div>
          </div>
          <div class="form-group">
            <label for="degreeProgramme">Degree Programme:</label>
            <select v-model="degreeProgramme" required>
              <option disabled value="">--select--</option>
              <option value="Bachelor of Business Administration, Business Management">
                Bachelor of Business Administration, Business Management
              </option>
              <option value="Bachelor of Business Administration, International Business">
                Bachelor of Business Administration, International Business
              </option>
              <option value="Bachelor of Engineering, Business Intelligence Technologies">
                Bachelor of Engineering, Business Intelligence Technologies
              </option>
              <option value="Bachelor of Engineering, Environmental Chemistry and Technology">
                Bachelor of Engineering, Environmental Chemistry and Technology
              </option>
              <option value="Bachelor of Engineering, Industrial Management">
                Bachelor of Engineering, Industrial Management
              </option>
              <option value="Bachelor of Engineering, Information Technology">
                Bachelor of Engineering, Information Technology
              </option>
              <option value="Bachelor of Health Care, Nursing">
                Bachelor of Health Care, Nursing
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="studentNumber">Student Number:</label>
            <input type="text" v-model="studentNumber" required />
          </div>
          <button type="submit" class="register-button">Register</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        dob: '',
        phoneNumber: '',
        nationality: '',
        interest: '',
        degreeProgramme: '',
        studentNumber: '',
      };
    },
    methods: {
      register() {
        // You can add form submission logic here, such as sending data to the server
        console.log("User details:", {
          firstName: this.firstName,
          lastName: this.lastName,
          dob: this.dob,
          phoneNumber: this.phoneNumber,
          nationality: this.nationality,
          interest: this.interest,
          degreeProgramme: this.degreeProgramme,
          studentNumber: this.studentNumber,
        });
        alert('Registration successful!');
      },
    },
  };
  </script>
  
  <style scoped>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #007bff 0%, #6610f2 100%);
  }
  
  .register-form {
    background: #fff;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 500px;
    width: 100%;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
  }
  
  p {
    margin-bottom: 20px;
    color: #666;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
  }
  
  input, select {
    width: calc(100% - 10px);
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .radio-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .register-button {
    background: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s;
  }
  
  .register-button:hover {
    background: #0056b3;
  }
  </style>
  