<template>
    <div class="loading-list">
      
  
      <!-- List of Approved Items -->
      <div class="items-list">
        <h2>Items Approved for Loading</h2>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Student Name</th>
              <th>Approval Date</th>
              <th>Barcode</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in approvedItems" :key="item.id">
              <td>{{ item.itemName }}</td>
              <td>{{ item.studentName }}</td>
              <td>{{ item.approvalDate }}</td>
              <td>
                <div v-if="item.barcode">
                  <img :src="item.barcode" alt="Barcode" />
                </div>
                <div v-else>
                  <button @click="generateBarcode(item.id)">Generate Barcode</button>
                </div>
              </td>
              <td>{{ item.status }}</td>
              <td>
                <button @click="markAsLoaded(item.id)" :disabled="item.status === 'LOADED'">Mark as Loaded</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  name: 'LoadingList',
  data() {
    return {
      // Example data for approved items that need to be loaded
      approvedItems: [
        {
          id: 1,
          itemName: 'Raspberry Pi 4',
          studentName: 'John Doe',
          approvalDate: '2024-08-20',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 2,
          itemName: 'Syringe Pack',
          studentName: 'Jane Smith',
          approvalDate: '2024-08-21',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 3,
          itemName: 'Ethernet Cable Tester',
          studentName: 'Alice Johnson',
          approvalDate: '2024-08-22',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 4,
          itemName: 'Arduino Uno Kit',
          studentName: 'Michael Brown',
          approvalDate: '2024-08-23',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 5,
          itemName: 'Stethoscope',
          studentName: 'Emily White',
          approvalDate: '2024-08-24',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 6,
          itemName: 'Blood Pressure Monitor',
          studentName: 'David Johnson',
          approvalDate: '2024-08-25',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 7,
          itemName: 'Network Switch',
          studentName: 'Sarah Lee',
          approvalDate: '2024-08-26',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 8,
          itemName: 'Nursing Simulation Manikin',
          studentName: 'James Anderson',
          approvalDate: '2024-08-27',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 9,
          itemName: 'External Hard Drive',
          studentName: 'Laura Wilson',
          approvalDate: '2024-08-28',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 10,
          itemName: 'Ventilator',
          studentName: 'Brandon Harris',
          approvalDate: '2024-08-29',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 11,
          itemName: 'Wi-Fi Router',
          studentName: 'Anna Moore',
          approvalDate: '2024-08-30',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 12,
          itemName: 'Medical Scissors',
          studentName: 'Peter Clark',
          approvalDate: '2024-08-31',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 13,
          itemName: 'Server Rack Key',
          studentName: 'Rebecca Martinez',
          approvalDate: '2024-09-01',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 14,
          itemName: 'Pulse Oximeter',
          studentName: 'Christopher Rodriguez',
          approvalDate: '2024-09-02',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 15,
          itemName: 'Projector',
          studentName: 'Jessica Lewis',
          approvalDate: '2024-09-03',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 16,
          itemName: 'X-Ray Film Viewer',
          studentName: 'Patricia Walker',
          approvalDate: '2024-09-04',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 17,
          itemName: '3D Printer',
          studentName: 'Thomas Hall',
          approvalDate: '2024-09-05',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 18,
          itemName: 'Defibrillator',
          studentName: 'Karen White',
          approvalDate: '2024-09-06',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 19,
          itemName: 'USB Flash Drive',
          studentName: 'Jason King',
          approvalDate: '2024-09-07',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 20,
          itemName: 'Infusion Pump',
          studentName: 'Nancy Wright',
          approvalDate: '2024-09-08',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 21,
          itemName: 'Virtual Reality Headset',
          studentName: 'George Scott',
          approvalDate: '2024-09-09',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 22,
          itemName: 'Intravenous (IV) Stand',
          studentName: 'Ruth Adams',
          approvalDate: '2024-09-10',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 23,
          itemName: 'Cat 6 Ethernet Cable',
          studentName: 'Kenneth Nelson',
          approvalDate: '2024-09-11',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 24,
          itemName: 'Portable ECG Monitor',
          studentName: 'Barbara Carter',
          approvalDate: '2024-09-12',
          barcode: null,
          status: 'APPROVED',
        },
        {
          id: 25,
          itemName: 'Laptop Cooling Pad',
          studentName: 'Steven Murphy',
          approvalDate: '2024-09-13',
          barcode: null,
          status: 'APPROVED',
        },
      ],
    };
  },
  methods: {
    generateBarcode(itemId) {
      const item = this.approvedItems.find(i => i.id === itemId);
      if (item) {
        // Mock generating a barcode as a data URL
        item.barcode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${item.itemName}-${item.id}`;
        alert(`Barcode generated for ${item.itemName}.`);
      }
    },
    markAsLoaded(itemId) {
      const item = this.approvedItems.find(i => i.id === itemId);
      if (item) {
        item.status = 'LOADED';
        alert(`Item ${item.itemName} has been marked as loaded.`);
      }
    },
  },
};

  </script>
  
  <style scoped>
  .loading-list {
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
    margin-right: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  button:hover:not(:disabled) {
    background-color: #0056b3;
  }
  
  img {
    max-width: 100px;
    height: auto;
  }
  </style>
  