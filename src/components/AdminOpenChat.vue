<template>
    <div class="chat-container">
      <!-- Chat List -->
      <div class="chat-list">
        <div
          v-for="contact in filteredContacts"
          :key="contact.id"
          class="chat"
          @click="openChat(contact.id)"
        >
          <div class="contact-info">
            <div class="contact-image">
              <img :src="contact.image" :alt="contact.name" />
              <span class="status-dot" :class="{ 'online': contact.online }"></span>
            </div>
            <div class="contact-details">
              <h3>{{ contact.name }}</h3>
              <p class="status">{{ contact.online ? 'Online' : '' }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Chat Window -->
      <div v-if="activeChat" class="chat-window">
        <div class="message" v-for="message in messages[activeChat]" :key="message.id" :class="message.type">
          <p>{{ message.text }}</p>
          <span>{{ message.time }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminOpenChat',  // Renamed the component
    data() {
      return {
        activeChat: null,
        contacts: [
          { id: 'john_doe', name: 'John Doe', image: require('@/assets/john.jpg'), online: true },
          { id: 'jane_smith', name: 'Jane Smith', image: require('@/assets/angela.jpeg'), online: false },
          { id: 'michael_ross', name: 'Michael Ross', image: require('@/assets/jake.jpg'), online: true }
          // Add more admin-related contacts here
        ],
        messages: {
          john_doe: [
            { id: 1, type: 'center', text: 'Today' },
            { id: 2, type: 'left', text: 'Hello John, how can I assist you?', time: '10:00 am' },
            { id: 3, type: 'right', text: 'I need help with the new inventory system.', time: '10:01 am' },
            { id: 4, type: 'left', text: 'Sure, I can guide you through the process.', time: '10:05 am' },
          ],
          jane_smith: [
            { id: 1, type: 'center', text: 'Yesterday' },
            { id: 2, type: 'left', text: 'Hello Jane, I noticed some discrepancies in the records.', time: '11:00 am' },
            { id: 3, type: 'right', text: 'Thanks for pointing it out, I will fix it right away.', time: '11:02 am' },
          ],
          michael_ross: [
            { id: 1, type: 'center', text: 'Today' },
            { id: 2, type: 'left', text: 'Michael, have you updated the reports?', time: '09:00 am' },
            { id: 3, type: 'right', text: 'Yes, the reports are updated.', time: '09:01 am' },
          ]
          // Add more message arrays for other admin contacts here
        }
      };
    },
    computed: {
      filteredContacts() {
        return this.contacts;
      }
    },
    methods: {
  openChat(chatId) {
    this.$router.push({ name: 'AdminOpenChat', params: { contactId: chatId } });
  },
  handleLogout() {
    // Handle logout logic here
  }
}

  };
  </script>
  
  <style scoped>
  .chat-container {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  
  .chat-list {
    max-height: 400px;
    overflow-y: auto;
    margin-bottom: 20px;
  }
  
  .chat {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }
  
  .contact-info {
    display: flex;
    align-items: center;
  }
  
  .contact-image {
    position: relative;
    margin-right: 10px;
  }
  
  .contact-image img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  
  .status-dot {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ddd;
  }
  
  .status-dot.online {
    background-color: #4caf50;
  }
  
  .contact-details h3 {
    margin: 0;
    font-size: 16px;
  }
  
  .contact-details p.status {
    margin: 5px 0 0;
    font-size: 14px;
    color: #666;
  }
  
  .chat-window {
    margin-top: 20px;
  }
  
  .message {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    max-width: 60%;
  }
  
  .message.left {
    justify-content: flex-start;
  }
  
  .message.right {
    justify-content: flex-end;
    background-color: #f0f0f0;
    border-radius: 15px;
  }
  
  .message p {
    margin: 0;
    padding: 0 10px;
  }
  
  .message span {
    font-size: 12px;
    color: #666;
    margin-left: 5px;
  }
  </style>
  