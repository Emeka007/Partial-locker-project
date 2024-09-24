<template>
    <div class="admin-chat-container">
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
  
      <div class="admin-chat">
        
  
        <!-- Top Section with Chat Title and Search Bar -->
        <div class="top-section">
          
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
          <div class="email">Email</div>
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
      </div>
    </div>
  </template>
  
  <script>
 
  
  export default {
    components: {
      
    },
    data() {
      return {
        searchQuery: '',
        people: [
          { id: 1, name: 'John Doe', image: require('@/assets/Hayley.jpg') },
          { id: 2, name: 'Jane Smith', image: require('@/assets/jake.jpg') }, 
          { id: 3, name: 'Alice Johnson', image: require('@/assets/john.jpg') } 
        ],
        chats: [
          { id: 1, name: 'Angela Yogi', image: require('@/assets/Hayley.jpg'), message: 'Hi There! Are you available to chat?', time: '12:00' },
          { id: 2, name: 'Angela Yogi', image: require('@/assets/Hayley.jpg'), message: 'Hi There! Are you available to chat?', time: '12:15' },
          { id: 3, name: 'Saurav Amatya', image: require('@/assets/john.jpg'), message: 'Hi There! Are you available to chat?', time: '12:30' },
          { id: 4, name: 'Saurav Amatya', image: require('@/assets/john.jpg'), message: 'Hi There! Are you available to chat?', time: '12:45' },
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
        this.$router.push({ name: 'AdminOpenChat', params: { contactId: chatId } });
      },
      handleLogout() {
        // Handle logout logic here
      }
    }
  };
  </script>
  
  <style scoped>
  .admin-chat-container {
    display: flex;
  }
  
  .quick-links {
    width: 190px;
    background-color: #f8f9fa;
    padding: 20px;
    color: white;
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
  
  .admin-chat {
    font-family: Arial, sans-serif;
    padding: 20px;
    box-sizing: border-box;
    margin-left: 220px; /* Space for the sidebar */
    flex-grow: 1;
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
    margin-top: 20px;
  }
  
  .chats-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
    justify-content: space-between;
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
    white-space: nowrap;
  }
  </style>
  