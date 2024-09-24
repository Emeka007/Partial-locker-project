<template>
  <div class="student-chat">
    <Header />

    <!-- Top Section with Chat Title and Search Bar -->
    <div class="top-section">
      <div class="chat-title">Chat with Friends</div>
      <div class="search-bar-container">
        <input type="text" placeholder="Search" v-model="searchQuery" />
      </div>
    </div>

    <!-- People Icons Section -->
    <div class="people-icons">
      <img v-for="person in people" :key="person.id" :src="person.image" :alt="person.name" class="person-icon" />
    </div>

    <!-- Messages and Email Section -->
    <div class="messages-email">
      <div class="messages">Messages</div>
      <div class="email">Time</div>
    </div>

    <!-- Chats Section -->
    <div class="chats-section">
      <div v-for="chat in filteredChats" :key="chat.id" class="chats-item" @click="openChat(chat.id)">
        <img :src="chat.image" :alt="chat.name" class="chat-image" />
        <div class="chat-content">
          <h5>{{ chat.name }}</h5>
          <p>{{ chat.message }}</p>
        </div>
        <div class="chat-time">{{ chat.time }}</div>
      </div>
    </div>

    <!-- Navigation Bar Placeholder -->
    <div class="nav-bar">
      
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'; 

export default {
  components: {
    Header,
  },
  data() {
    return {
      searchQuery: '',
      people: [
        { id: 1, name: 'John Doe', image: require('@/assets/Hayley.jpg') },
        { id: 2, name: 'Jane Smith', image: require('@/assets/jake.jpg') }, 
        { id: 3, name: 'Alice Johnson', image: require('@/assets/student.jpg') } 
      ],
      chats: [
        { id: 1, name: 'Angela Yogi', image: require('@/assets/Hayley.jpg'), message: 'Hi There! Are you available to chat?', time: '12:00' },
        { id: 2, name: 'Angela Yogi', image: require('@/assets/Hayley.jpg'), message: 'Hi There! Are you available to chat?', time: '12:15' },
        { id: 3, name: 'Saurav Amatya', image: require('@/assets/student.jpg'), message: 'Hi There! Are you available to chat?', time: '12:30' },
        { id: 4, name: 'Saurav Amatya', image: require('@/assets/student.jpg'), message: 'Hi There! Are you available to chat?', time: '12:45' },
        { id: 5, name: 'Chukwuemeka Obanya', image: require('@/assets/jake.jpg'), message: 'Hi There! Are you available to chat?', time: '13:00' },
        { id: 6, name: 'Chukwuemeka Obanya', image: require('@/assets/jake.jpg'), message: 'Hi There! Are you available to chat?', time: '13:15' }
      ]
    };
  },
  computed: {
    filteredChats() {
      return this.chats.filter(chat => chat.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  methods: {
    openChat(chatId) {
      this.$router.push({ name: 'StudentOpenChats', params: { contactId: chatId } });
    }
  }
};
</script>

<style scoped>
.student-chat {
  font-family: Arial, sans-serif;
  padding: 20px;
  box-sizing: border-box;
}

.top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  margin-top: 30px;
}

.chat-title {
  font-size: 24px;
  font-weight: bold;
}

.search-bar-container {
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
}

input[type="text"] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}

.people-icons {
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
  gap: 10px;
}

.person-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.messages-email {
  display: flex;
  justify-content: space-between;
}

.messages, .email {
  font-size: 18px;
}

.chats-section {
  margin-top: 20px; /* Space above chats */
  margin-bottom: 20px; /* Added space below chats */
}

.chats-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  justify-content: space-between; /* Ensures space between content and time */
}

.chat-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.chat-content {
  flex: 1;
}

.chat-content h5 {
  margin: 0;
  font-size: 16px;
}

.chat-content p {
  margin: 5px 0 0;
  font-size: 14px;
}

.chat-time {
  font-size: 14px;
  color: #666;
  white-space: nowrap; /* Prevents the time from wrapping */
}

.nav-bar {
  margin-top: 20px; /* Space above the nav bar */
  padding: 10px; /* Optional padding for the nav bar */
  background-color: #f8f9fa; /* Example background color */
  border-top: 1px solid #ddd; /* Optional border */
  text-align: center; /* Center align text */
}
</style>
