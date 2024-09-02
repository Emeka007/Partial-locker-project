<template>
  <div class="admin-settings-page">
    
    <!-- Quick Links Section -->
    <div class="quick-links">
      <ul>
        <li><router-link to="/admindashboard"><i class="fas fa-tachometer-alt"></i> Dashboard</router-link></li>
        <li><router-link to="/item-management"><i class="fas fa-box"></i> Item Management</router-link></li>
        <li><router-link to="/borrow-requests"><i class="fas fa-handshake"></i> Borrow Requests</router-link></li>
        <li><router-link to="/reserved-items"><i class="fas fa-calendar-check"></i> Reservation List</router-link></li>
        <li><router-link to="/unloaded-list"><i class="fas fa-truck"></i> Unloaded Items</router-link></li>
        <li><router-link to="/adminprofile"><i class="fas fa-user"></i> Profile</router-link></li>
        <li><router-link to="/admin-settings"><i class="fas fa-cog"></i> Settings</router-link></li>
        <li><a href="#" @click="handleLogout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
      </ul>
    </div>

    <div class="settings-content">
      

      <!-- Section: FAQ Management -->
      <div class="admin-settings-section">
        <h2>FAQ Management</h2>
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
          <h3>{{ faq.question }}</h3>
          <p>{{ faq.answer }}</p>
          <button @click="editFAQ(index)">Edit</button>
          <button @click="deleteFAQ(index)">Delete</button>
        </div>
        <div class="add-faq">
          <h3>Add New FAQ</h3>
          <input v-model="newFAQ.question" placeholder="Enter question" />
          <textarea v-model="newFAQ.answer" placeholder="Enter answer"></textarea>
          <button @click="addFAQ">Add FAQ</button>
        </div>
      </div>

      <!-- Section: Legal Policies Management -->
      <div class="admin-settings-section">
        <h2>Legal Policies</h2>
        <textarea v-model="legalPolicies" placeholder="Enter legal policies"></textarea>
        <button @click="updateLegalPolicies">Update Legal Policies</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'adminSettings',
  data() {
    return {
      faqs: [
        { question: 'How can I reset my password?', answer: 'To reset your password, click on the "Forgot password" link on the login page and follow the instructions.' },
        { question: 'Where can I view my borrowed items?', answer: 'You can view your borrowed items in the "My Items" section after logging in.' },
      ],
      newFAQ: {
        question: '',
        answer: '',
      },
      legalPolicies: 'Enter your legal policies here.',
    };
  },
  methods: {
    addFAQ() {
      if (this.newFAQ.question && this.newFAQ.answer) {
        this.faqs.push({ ...this.newFAQ });
        this.newFAQ.question = '';
        this.newFAQ.answer = '';
        alert('FAQ added successfully.');
      } else {
        alert('Please fill out both the question and answer fields.');
      }
    },
    editFAQ(index) {
      const editedQuestion = prompt('Edit Question', this.faqs[index].question);
      const editedAnswer = prompt('Edit Answer', this.faqs[index].answer);
      if (editedQuestion !== null && editedAnswer !== null) {
        this.$set(this.faqs, index, { question: editedQuestion, answer: editedAnswer });
        alert('FAQ updated successfully.');
      }
    },
    deleteFAQ(index) {
      if (confirm('Are you sure you want to delete this FAQ?')) {
        this.faqs.splice(index, 1);
        alert('FAQ deleted successfully.');
      }
    },
    updateLegalPolicies() {
      alert('Legal policies updated successfully.');
      // Logic to update legal policies in the database or state
    },
  },
};
</script>

<style scoped>
.admin-settings-page {
  display: flex;
}

.quick-links {
  width: 200px;
  background-color: #f8f9fa;
  padding: 20px;
  color: #333;
  position: fixed;
  height: 100%;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.quick-links ul {
  list-style-type: none;
  padding: 0;
}

.quick-links li {
  margin-bottom: 15px;
}

.quick-links li a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  display: block;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.quick-links li a:hover {
  background-color: #e9ecef;
}

.settings-content {
  margin-left: 220px; /* Add some margin to the left to avoid overlap with the quick links */
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.settings-content h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

.admin-settings-section {
  margin-bottom: 40px;
}

.admin-settings-section h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.admin-settings-section p,
.admin-settings-section textarea {
  font-size: 16px;
  margin-bottom: 10px;
}

.faq-item {
  margin-bottom: 20px;
}

.faq-item h3 {
  font-size: 20px;
  margin-bottom: 5px;
}

.faq-item p {
  font-size: 16px;
  margin-bottom: 10px;
}

.faq-item button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.faq-item button:hover {
  background-color: #2980b9;
}

.add-faq input,
.add-faq textarea {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.add-faq button {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.add-faq button:hover {
  background-color: #27ae60;
}

textarea {
  width: 100%;
  height: 200px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: none;
}
</style>
