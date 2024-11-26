<template>
    <div class="register-container">
      <div class="register-form">
        <h1>Sign Up</h1>
        <p>Create your account and start your journey</p>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="firstName">First Name:</label>
            <input type="text" v-model="firstName" required placeholder="First name" />
          </div>
  
          <div class="form-group">
            <label for="lastName">Last Name:</label>
            <input type="text" v-model="lastName" required placeholder="Last name" />
          </div>
  
          <!-- New Email Input Field -->
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" v-model="email" required placeholder="Email address" />
          </div>
          
          <!-- Create Password -->
          <div class="form-group">
            <label for="password">Create Password:</label>
            <input
              type="password"
              v-model="password"
              required
              placeholder="Create a password"
            />
          </div>
  
          <!-- Confirm Password -->
          <div class="form-group">
            <label for="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              v-model="confirmPassword"
              required
              placeholder="Confirm your password"
              @input="validatePasswords"
            />
            <!-- Passwords Don't Match Error -->
            <p v-if="passwordError" class="error">{{ passwordError }}</p>
          </div>
  
          <div class="form-group">
            <label for="dob">Date of Birth:</label>
            <input type="date" v-model="dob" required />
          </div>
          <div class="form-group">
            <label for="phoneNumber">Phone Number:</label>
            <input type="tel" v-model="phoneNumber" required placeholder="Phone number" />
          </div>
          <div class="form-group">
            <label for="nationality">Nationality:</label>
            <input type="text" v-model="nationality" required placeholder="Nationality" />
          </div>
  
          <!-- Interests Section with Styled Checkboxes -->
          <div class="form-group">
            <label for="interests">Interests:</label>
            <div class="checkbox-group">
              <label class="checkbox-option">
                <input type="checkbox" v-model="interests" value="Technology" />
                <span>Technology</span>
              </label>
              <label class="checkbox-option">
                <input type="checkbox" v-model="interests" value="Nursing" />
                <span>Nursing</span>
              </label>
              <label class="checkbox-option">
                <input type="checkbox" v-model="interests" value="Chemistry" />
                <span>Chemistry</span>
              </label>
              <label class="checkbox-option">
                <input type="checkbox" v-model="interests" value="Business Management" />
                <span>Business Management</span>
              </label>
              <label class="checkbox-option">
                <input type="checkbox" v-model="interests" value="International Business" />
                <span>International Business</span>
              </label>
              <label class="checkbox-option">
                <input type="checkbox" v-model="interests" value="Engineering" />
                <span>Engineering</span>
              </label>
            </div>
          </div>
  
          <div class="form-group">
            <label for="degreeProgramme">Degree Programme:</label>
            <select v-model="degreeProgramme" required>
              <option disabled value="">-- Select your degree programme --</option>
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
              <option value="Bachelor of Health Care, Nursing">Bachelor of Health Care, Nursing</option>
            </select>
          </div>
  
          <div class="form-group">
            <label for="studentNumber">Student Number:</label>
            <input type="text" v-model="studentNumber" required placeholder="Enter your student number" />
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
        email: '', // New email field
        password: '', // Password input
        confirmPassword: '', // Confirm Password input
        passwordError: '', // Error message for password mismatch
        dob: '',
        phoneNumber: '',
        nationality: '',
        interests: [], // For multiple selections, we bind to an array
        degreeProgramme: '',
        studentNumber: '',
      };
    },
    methods: {
      validatePasswords() {
        if (this.password !== this.confirmPassword) {
          this.passwordError = "Passwords do not match!";
        } else {
          this.passwordError = ""; // Clear the error if they match
        }
      },
      register() {
        if (this.passwordError) {
          alert("Please correct the errors before submitting.");
          return;
        }
        // Registration logic can go here
        console.log("User details:", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email, // Log email field
          password: this.password, // Passwords will be handled securely on server-side
          dob: this.dob,
          phoneNumber: this.phoneNumber,
          nationality: this.nationality,
          interests: this.interests, // Collect the array of interests
          degreeProgramme: this.degreeProgramme,
          studentNumber: this.studentNumber,
        });
        alert('Registration successful!');
        
        // Redirect to the login page after success
        this.$router.push('/studentlogin');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Error message styling */
  .error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }
  /* Container Styles */
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #e83e8c 0%, #e83e8c 100%);
    padding: 20px;
    box-sizing: border-box;
  }
  
  /* Form Styling */
  .register-form {
    background: #fff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 450px;
    text-align: center;
  }
  /* Password input and confirmation */
  input,
  select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    transition: border 0.3s;
  }
  
  input:focus,
  select:focus {
    border-color: #6a11cb;
    outline: none;
  }
  /* Typography */
  h1 {
    font-size: 30px;
    color: #333;
    margin-bottom: 15px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }
  
  p {
    color: #666;
    margin-bottom: 30px;
    font-size: 16px;
  }
  
  /* Form Group Styles */
  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  label {
    font-weight: 600;
    font-size: 14px;
    color: #333;
    display: block;
    margin-bottom: 5px;
  }
  
  /* Input and Select Styling */
  input,
  select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    transition: border 0.3s;
  }
  
  input:focus,
  select:focus {
    border-color: #6a11cb;
    outline: none;
  }
  
  /* Checkbox Group Styles */
  .checkbox-group {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  /* Styling the checkboxes */
  .checkbox-option {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 30%; /* Set width to fit 3 items per row */
    padding: 10px 0;
    font-size: 14px;
  }
  
  .checkbox-option input {
    margin-right: 10px;
  }
  
  /* Register Button */
  .register-button {
    width: 100%;
    background-color: #6a11cb;
    color: #fff;
    padding: 12px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  
  .register-button:hover {
    background-color: #9333ea;
  }
  </style>
  