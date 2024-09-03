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
  margin: 100px auto 0; /* Adjust margin-top to account for fixed header */
  position: relative;
}

.item-header {
  margin-bottom: 20px;
}

.item-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
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
}

.actions button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

.actions .book-now {
  background-color: #28a745;
}

.actions .book-now:hover {
  background-color: #218838;
}

.actions .chat {
  background-color: #007bff;
}

.actions .chat:hover {
  background-color: #0056b3;
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
