<!-- src/views/StudentNotifications.vue -->
<template>
    <div class="notifications">
      <Header />
        
        <ul v-if="notifications.length">
          <li v-for="notification in notifications" :key="notification.id">
            <a :href="notification.link">{{ notification.message }}</a>
          </li>
        </ul>
        <div v-else>No unread notifications.</div>
      
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';

  export default {
   components: {
      Header, // Register the Header component
    },

    data() {
      return {
        notifications: [
          // Example notifications data
          { id: 1, message: 'You have a new reservation.', link: '#' },
          { id: 2, message: 'Upcoming deadline for locker 101.', link: '#' },
        ],
      };
    },
    methods: {
      logout() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  
  .notifications ul {
    list-style-type: none;
    padding: 0;
  }
  
  .notifications li {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  
  .notifications a {
    color: #007bff;
    text-decoration: none;
  }
  
  .notifications a:hover {
    text-decoration: underline;
  }
  </style>
  

