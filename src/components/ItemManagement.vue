<template>
    <div class="item-management">
      
      <!-- Item List Section -->
      <div class="item-list">
        <h2>All Items</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ item.status }}</td>
              <td>
                <button @click="editItem(item)">Edit</button>
                <button @click="deleteItem(item.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    
      <!-- Create Item Section -->
      <div class="create-item">
        <h2>Create New Item</h2>
        <form @submit.prevent="createItem">
          <div class="form-row">
            <div class="form-group">
              <label for="itemName">Item Name:</label>
              <input type="text" v-model="newItem.name" required />
            </div>
            <div class="form-group">
              <label for="itemStatus">Status:</label>
              <select v-model="newItem.status" required>
                <option value="AVAILABLE">AVAILABLE</option>
                <option value="DAMAGED">DAMAGED</option>
                <option value="SOILED">SOILED</option>
                <option value="DISABLED">DISABLED</option>
              </select>
            </div>
            <button type="submit" class="create-button">Create Item</button>
          </div>
        </form>
      </div>
    
      <!-- Edit Item Modal -->
      <div v-if="isEditing" class="edit-item-modal">
        <div class="modal-content">
          <h2>Edit Item</h2>
          <form @submit.prevent="updateItem">
            <div class="form-group">
              <label for="itemName">Item Name:</label>
              <input type="text" v-model="currentItem.name" required />
            </div>
            <div class="form-group">
              <label for="itemStatus">Status:</label>
              <select v-model="currentItem.status" required>
                <option value="AVAILABLE">AVAILABLE</option>
                <option value="DAMAGED">DAMAGED</option>
                <option value="SOILED">SOILED</option>
                <option value="DISABLED">DISABLED</option>
              </select>
            </div>
            <div class="form-actions">
              <button type="submit" class="update-button">Update Item</button>
              <button @click="isEditing = false" class="cancel-button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ItemManagement',
    data() {
      return {
        items: [
          { id: 1, name: 'Raspberry Pi 4', status: 'AVAILABLE' },
          { id: 2, name: 'Stethoscope', status: 'AVAILABLE' },
          { id: 3, name: 'Ethernet Cable Tester', status: 'DAMAGED' },
          { id: 4, name: 'Arduino Uno Kit', status: 'SOILED' },
          { id: 5, name: 'Blood Pressure Monitor', status: 'AVAILABLE' },
          { id: 6, name: 'Network Switch', status: 'DAMAGED' },
          { id: 7, name: 'Nursing Simulation Manikin', status: 'DISABLED' },
          { id: 8, name: 'External Hard Drive', status: 'AVAILABLE' },
          { id: 9, name: 'Ventilator', status: 'AVAILABLE' },
          { id: 10, name: 'Wi-Fi Router', status: 'AVAILABLE' },
          { id: 11, name: 'Medical Scissors', status: 'SOILED' },
          { id: 12, name: 'Server Rack Key', status: 'AVAILABLE' },
          { id: 13, name: 'Pulse Oximeter', status: 'AVAILABLE' },
          { id: 14, name: 'Projector', status: 'DISABLED' },
          { id: 15, name: 'X-Ray Film Viewer', status: 'AVAILABLE' },
          { id: 16, name: '3D Printer', status: 'AVAILABLE' },
          { id: 17, name: 'Defibrillator', status: 'DAMAGED' },
          { id: 18, name: 'USB Flash Drive', status: 'SOILED' },
          { id: 19, name: 'Infusion Pump', status: 'AVAILABLE' },
          { id: 20, name: 'Virtual Reality Headset', status: 'AVAILABLE' },
          { id: 21, name: 'Intravenous (IV) Stand', status: 'AVAILABLE' },
          { id: 22, name: 'Cat 6 Ethernet Cable', status: 'AVAILABLE' },
          { id: 23, name: 'Portable ECG Monitor', status: 'DISABLED' },
          { id: 24, name: 'Laptop Cooling Pad', status: 'AVAILABLE' },
          { id: 25, name: 'Syringe Pack', status: 'AVAILABLE' },
        ],
        newItem: {
          name: '',
          status: 'AVAILABLE',
        },
        currentItem: null,
        isEditing: false,
      };
    },
    methods: {
      createItem() {
        const newItem = {
          id: this.items.length + 1,
          name: this.newItem.name,
          status: this.newItem.status,
        };
        this.items.push(newItem);
        this.newItem.name = '';
        this.newItem.status = 'AVAILABLE';
      },
      editItem(item) {
        this.currentItem = { ...item };
        this.isEditing = true;
      },
      updateItem() {
        const index = this.items.findIndex(item => item.id === this.currentItem.id);
        if (index !== -1) {
          this.items.splice(index, 1, this.currentItem);
        }
        this.isEditing = false;
        this.currentItem = null;
      },
      deleteItem(id) {
        this.items = this.items.filter(item => item.id !== id);
      },
    },
  };
  </script>
  
  <style scoped>
  .item-management {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h1, h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .create-item {
    margin-top: 40px;
  }
  
  .form-row {
    display: flex;
    align-items: center;
    gap: 20px; /* Increased space between elements */
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-right: 20px; /* Space between form groups */
  }
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input, select {
    padding: 10px;
    font-size: 14px;
    width: 200px; /* Increased width for better alignment */
  }
  
  .create-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .create-button:hover {
    background-color: #0056b3;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  table, th, td {
    border: 1px solid #ddd;
  }
  
  th, td {
    padding: 12px;
    text-align: left;
  }
  
  .edit-item-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 500px;
    max-width: 100%;
  }
  
  .form-actions {
    margin-top: 20px;
  }
  </style>
  