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
  name: 'StudentChat',
  data() {
    return {
      activeChat: null,
      contacts: [
        { id: 'angela', name: 'Angela Yogi', image: require('@/assets/Hayley.jpg'), online: true },
        // Add more contacts here if needed
      ],
      messages: {
        angela: [
          { id: 1, type: 'center', text: 'Today' },
          { id: 1, type: 'left', text: 'Hello Jyri!', time: '12:00 pm' },
          { id: 2, type: 'right', text: 'Hello Angela!', time: '12:01 pm' },
          { id: 3, type: 'left', text: 'Can you extend my return date for that item?', time: '12:05 pm' },
          { id: 4, type: 'left', text: 'I have more chapters to look through', time: '12:06 pm' },
          { id: 5, type: 'right', text: 'Alright, No problem!', time: '12:10 pm' }
        ],
        // Add more message arrays for other chats here if needed
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
      this.activeChat = chatId;
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
