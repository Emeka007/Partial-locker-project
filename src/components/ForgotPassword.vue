<template>
    <div class="forgot-password-container">
      <div class="forgot-password-form">
        <h1>Forgot Password</h1>
        <p>Enter your email address to reset your password</p>
        <form @submit.prevent="sendResetLink">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" v-model="email" required placeholder="Enter your email" />
          </div>
          <button type="submit" class="reset-button">Send Reset Link</button>
        </form>
        <div class="forgot-password-footer">
          <p><router-link to="/login">Back to Login</router-link></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '', // Holds the email input for password reset
      };
    },
    methods: {
      sendResetLink() {
        if (this.email) {
          // Logic for sending the reset link (e.g., via an API)
          // This would typically be a call to the backend to handle the password reset process
          alert(`Password reset link has been sent to ${this.email}`);
          this.email = ''; // Clear the email input after submission
        } else {
          alert('Please enter a valid email address');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .forgot-password-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  }
  
  .forgot-password-form {
    background: #fff;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px;
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
  
  input {
    width: calc(100% - 10px);
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .reset-button {
    background: #6a11cb;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s;
  }
  
  .reset-button:hover {
    background: #2575fc;
  }
  
  .forgot-password-footer {
    margin-top: 20px;
    font-size: 14px;
    color: #666;
  }
  
  .forgot-password-footer a {
    color: #6a11cb;
    text-decoration: none;
  }
  
  .forgot-password-footer a:hover {
    text-decoration: underline;
  }
  </style>
  