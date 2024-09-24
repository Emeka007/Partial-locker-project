<template>
  <div class="booked-item">
    <Header />
    <div class="item-header">
      <h1>{{ item.title }}</h1>
    </div>
    <img :src="require(`@/assets/${item.imageSrc}`)" alt="Item Image" class="item-image" />
    <div class="centered-info">
      <h1>{{ item.title }}</h1>
      <p><strong>Lender:</strong> {{ item.from }}</p>
    </div>
    <div class="spacer"></div>
    <div class="details">
      <p><strong>Note:</strong> {{ item.note }}</p>
    </div>
    <div class="actions">
      <button class="book-now" @click="bookNow">Book Now</button>
      <button class="chat" @click="chat">Chat Now</button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  created() {
    console.log('Received item prop:', this.item);
  },
  methods: {
    bookNow() {
      this.$router.push('/reservations');
    },
    chat() {
      this.$router.push('/studentchat');
    },
  },
};
</script>

<style scoped>
.booked-item {
  padding: 20px;
  background-color: #f4f4f9;
  border-radius: 8px;
  max-width: 800px;
  margin: 120px auto 0; /* Margin to create space for the fixed header */
  position: relative;
}

.item-header {
  margin-bottom: 20px;
}

.item-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 20px; /* Added margin-top for spacing */
}

.centered-info {
  text-align: center;
  margin: 10px 0;
}

.centered-info h1 {
  font-size: 1.8rem;
  color: #333;
}

.centered-info p {
  font-size: 1.1rem;
  margin: 5px 0;
}

.spacer {
  margin: 20px 0;
}

.details p {
  margin: 10px 0;
}

.details {
  margin-bottom: 40px;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px; /* Added margin to create space above the buttons */
  margin-bottom: 40px; /* Added margin to create space below the buttons */
}

.actions button {
  padding: 12px 24px; /* Increased padding for better clickability */
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 1rem; /* Increased font size for readability */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Added shadow for depth */
  transition: background-color 0.3s, transform 0.2s; /* Added transition for hover effect */
}

.actions .book-now {
  background-color: #28a745; /* Green color for 'Book Now' */
}

.actions .book-now:hover {
  background-color: #218838; /* Darker green on hover */
  transform: translateY(-2px); /* Lift effect on hover */
}

.actions .chat {
  background-color: #007bff; /* Blue color for 'Chat Now' */
}

.actions .chat:hover {
  background-color: #0056b3; /* Darker blue on hover */
  transform: translateY(-2px); /* Lift effect on hover */
}

.header {
  width: 100%;
  padding: 10px 20px;
  background-color: #e10e49;
  color: white;
  text-align: center;
  box-sizing: border-box; /* Ensures padding is included in width calculation */
  position: fixed; /* Keeps the header fixed at the top */
  top: 0;
  left: 0;
}
</style>
