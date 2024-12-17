<template>
  <div v-if="visible" class="snackbar" :class="color" @click="hideSnackbar">
    {{ message }}
  </div>
</template>

<script>
import eventBus from '../eventBus'; // Adjust the path accordingly

export default {
  data() {
    return {
      visible: false,
      message: '',
      color: '',
    };
  },
  created() {
    eventBus.showSnackbar = this.showSnackbar; // Assign method to event bus
  },
  beforeUnmount() {
    delete eventBus.showSnackbar; // Clean up
  },
  methods: {
    showSnackbar({ message, color, timeout }) {
      this.message = message;
      this.color = color;
      this.visible = true;

      setTimeout(() => {
        this.hideSnackbar();
      }, timeout || 3000);
    },
    hideSnackbar() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
@keyframes flash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5; /* Half transparent */
  }
  100% {
    opacity: 1;
  }
}
.snackbar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px;
  border-radius: 4px;
  color: white;
  z-index: 1000;
  transition: opacity 0.5s ease;
  opacity: 1;
  /*animation: flash 0.5s infinite;  Add the flash animation */

}

.snackbar.green {
  background-color: #4caf50; /* Green */
}

.snackbar.red {
  background-color: #f44336; /* Red */
}

.snackbar.blue {
  background-color: #2196F3; /* Blue */
}
</style>