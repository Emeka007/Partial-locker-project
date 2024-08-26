<template>
    <div class="returned-list">
      
  
      <!-- List of Returned Items -->
      <div class="items-list">
        <h2>Items Returned by Students</h2>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Student Name</th>
              <th>Return Date</th>
              <th>Item Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in returnedItems" :key="item.id">
              <td>{{ item.itemName }}</td>
              <td>{{ item.studentName }}</td>
              <td>{{ item.returnDate }}</td>
              <td>{{ item.status }}</td>
              <td>
                <button @click="generateBarcode(item)">Retrieve</button>
                <button @click="markAsUnloaded(item)" :disabled="item.status === 'UNLOADED'">Unloaded</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Modal for Barcode -->
      <div v-if="selectedItem" class="modal">
        <div class="modal-content">
          <span class="close-button" @click="closeModal">&times;</span>
          <h2>Retrieve Item</h2>
          <p><strong>Item Name:</strong> {{ selectedItem.itemName }}</p>
          <p><strong>Student Name:</strong> {{ selectedItem.studentName }}</p>
          <p><strong>Return Date:</strong> {{ selectedItem.returnDate }}</p>
          <div class="barcode">
            <p><strong>Barcode:</strong></p>
            <img :src="selectedItem.barcode" alt="Barcode for retrieval" />
          </div>
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ReturnedList',
    data() {
      return {
        // Example data for returned items
        returnedItems: [
          // IT Student Equipment
          { id: 1, itemName: 'Raspberry Pi', studentName: 'John Doe', returnDate: '2024-08-23', status: 'Returned', barcode: '' },
          { id: 2, itemName: 'Arduino Kit', studentName: 'Jane Smith', returnDate: '2024-08-24', status: 'Returned', barcode: '' },
          { id: 3, itemName: 'Laptop Charger', studentName: 'Alice Johnson', returnDate: '2024-08-22', status: 'Returned', barcode: '' },
          { id: 4, itemName: 'Ethernet Cable', studentName: 'Michael Brown', returnDate: '2024-08-21', status: 'Returned', barcode: '' },
          { id: 5, itemName: 'External Hard Drive', studentName: 'David Wilson', returnDate: '2024-08-20', status: 'Returned', barcode: '' },
          { id: 6, itemName: 'USB Flash Drive', studentName: 'Sarah Davis', returnDate: '2024-08-19', status: 'Returned', barcode: '' },
          { id: 7, itemName: 'Wi-Fi Adapter', studentName: 'Chris Martinez', returnDate: '2024-08-18', status: 'Returned', barcode: '' },
          { id: 8, itemName: 'Portable Monitor', studentName: 'Emily Clark', returnDate: '2024-08-17', status: 'Returned', barcode: '' },
          { id: 9, itemName: 'HDMI Cable', studentName: 'James Lewis', returnDate: '2024-08-16', status: 'Returned', barcode: '' },
          { id: 10, itemName: 'Webcam', studentName: 'Jessica Robinson', returnDate: '2024-08-15', status: 'Returned', barcode: '' },
  
          // Nursing Student Equipment
          { id: 11, itemName: 'Syringe', studentName: 'William Hall', returnDate: '2024-08-14', status: 'Returned', barcode: '' },
          { id: 12, itemName: 'Stethoscope', studentName: 'Linda Young', returnDate: '2024-08-13', status: 'Returned', barcode: '' },
          { id: 13, itemName: 'Blood Pressure Cuff', studentName: 'Barbara Hernandez', returnDate: '2024-08-12', status: 'Returned', barcode: '' },
          { id: 14, itemName: 'Thermometer', studentName: 'Paul King', returnDate: '2024-08-11', status: 'Returned', barcode: '' },
          { id: 15, itemName: 'Nursing Scissors', studentName: 'Nancy Wright', returnDate: '2024-08-10', status: 'Returned', barcode: '' },
          { id: 16, itemName: 'IV Kit', studentName: 'Brian Lopez', returnDate: '2024-08-09', status: 'Returned', barcode: '' },
          { id: 17, itemName: 'Bandage Set', studentName: 'Mary Green', returnDate: '2024-08-08', status: 'Returned', barcode: '' },
          { id: 18, itemName: 'Glucometer', studentName: 'Kevin Hill', returnDate: '2024-08-07', status: 'Returned', barcode: '' },
          { id: 19, itemName: 'Oxygen Mask', studentName: 'George Adams', returnDate: '2024-08-06', status: 'Returned', barcode: '' },
          { id: 20, itemName: 'Suture Kit', studentName: 'Sandra Baker', returnDate: '2024-08-05', status: 'Returned', barcode: '' },
  
          // IT Help Desk Equipment
          { id: 21, itemName: 'Keyboard', studentName: 'Steven Carter', returnDate: '2024-08-04', status: 'Returned', barcode: '' },
          { id: 22, itemName: 'Mouse', studentName: 'Lisa Phillips', returnDate: '2024-08-03', status: 'Returned', barcode: '' },
          { id: 23, itemName: 'Router', studentName: 'Betty Campbell', returnDate: '2024-08-02', status: 'Returned', barcode: '' },
          { id: 24, itemName: 'Network Switch', studentName: 'Dorothy Parker', returnDate: '2024-08-01', status: 'Returned', barcode: '' },
          { id: 25, itemName: 'Laptop Docking Station', studentName: 'Kenneth Evans', returnDate: '2024-07-31', status: 'Returned', barcode: '' },
        ],
        selectedItem: null,
      };
    },
    methods: {
      generateBarcode(item) {
        // Simulate barcode generation
        item.barcode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Retrieve:${item.itemName}`;
        this.selectedItem = item;
      },
      markAsUnloaded(item) {
        item.status = 'UNLOADED';
      },
      closeModal() {
        this.selectedItem = null;
      },
    },
  };
  </script>
  
  <style scoped>
  .returned-list {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h1, h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .items-list {
    margin-bottom: 40px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
  }
  
  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 5px;
  }
  
  button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  
  button:hover:not(:disabled) {
    background-color: #0056b3;
  }
  
  .modal {
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
    width: 400px;
    text-align: center;
  }
  
  .close-button {
    float: right;
    font-size: 24px;
    cursor: pointer;
  }
  
  .close-button:hover {
    color: red;
  }
  
  .barcode img {
    margin-top: 20px;
  }
  </style>
  