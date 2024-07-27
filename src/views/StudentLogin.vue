<template>
  <div class="login-container">
    <div class="login-form">
      <h1>Welcome Back</h1>
      <p>Please login to your account</p>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
      <div class="login-footer">
        
        <p><router-link to="/forgot-password">Forgot Password?</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      const correctEmail = 'chukwuemeka.obanya@centria.fi';
      const correctPassword = 'Loikju2024+';
      
      if (this.email === correctEmail && this.password === correctPassword) {
        this.$router.push('/studentdashboard');
      } else {
        alert('Incorrect email or password');
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #e83e8c 0%, #e83e8c 100%);
}

.login-form {
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

.login-button {
  background: #e83e8c;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.login-button:hover {
  background: #e83e8c;
}

.login-footer {
  margin-top: 20px;
  font-size: 14px;
  color: #666;
}

.login-footer a {
  color: #e83e8c;
  text-decoration: none;
}

.login-footer a:hover {
  text-decoration: underline;
}
</style>
