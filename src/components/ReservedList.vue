<template>
    <div class="reserved-list">
      
  
      <!-- List of Reserved Items -->
      <div class="items-list">
        <h2>Items Currently in Use by Students</h2>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Student Name</th>
              <th>Reservation Date</th>
              <th>Due Date</th>
              <th>Item Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in reservedItems" :key="item.id">
              <td>{{ item.itemName }}</td>
              <td>{{ item.studentName }}</td>
              <td>{{ item.reservationDate }}</td>
              <td>{{ item.dueDate }}</td>
              <td>{{ item.status }}</td>
              <td>
                <button @click="viewDetails(item)">View Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Modal for Viewing Details -->
      <div v-if="selectedItem" class="modal">
        <div class="modal-content">
          <span class="close-button" @click="closeModal">&times;</span>
          <h2>Reservation Details</h2>
          <p><strong>Item Name:</strong> {{ selectedItem.itemName }}</p>
          <p><strong>Student Name:</strong> {{ selectedItem.studentName }}</p>
          <p><strong>Student ID:</strong> {{ selectedItem.studentId }}</p>
          <p><strong>Reservation Date:</strong> {{ selectedItem.reservationDate }}</p>
          <p><strong>Due Date:</strong> {{ selectedItem.dueDate }}</p>
          <p><strong>Item Status:</strong> {{ selectedItem.status }}</p>
          <p><strong>Additional Notes:</strong> {{ selectedItem.notes }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ReservedList',
    data() {
      return {
        // Example data for reserved items
        reservedItems: [
          // IT Student Equipment
          {
            id: 1,
            itemName: 'Raspberry Pi',
            studentName: 'John Doe',
            studentId: 'S123456',
            reservationDate: '2024-08-20',
            dueDate: '2024-09-20',
            status: 'In Use',
            notes: 'Ensure proper cooling during use.',
          },
          {
            id: 2,
            itemName: 'Arduino Kit',
            studentName: 'Jane Smith',
            studentId: 'S654321',
            reservationDate: '2024-08-22',
            dueDate: '2024-09-22',
            status: 'In Use',
            notes: 'Handle with care, small parts included.',
          },
          {
            id: 3,
            itemName: 'Laptop Charger',
            studentName: 'Alice Johnson',
            studentId: 'S112233',
            reservationDate: '2024-08-21',
            dueDate: '2024-09-21',
            status: 'In Use',
            notes: 'Return by due date to avoid penalties.',
          },
          {
            id: 4,
            itemName: 'Ethernet Cable',
            studentName: 'Michael Brown',
            studentId: 'S445566',
            reservationDate: '2024-08-23',
            dueDate: '2024-09-23',
            status: 'In Use',
            notes: 'Ensure no bends in the cable during use.',
          },
          {
            id: 5,
            itemName: 'External Hard Drive',
            studentName: 'David Wilson',
            studentId: 'S778899',
            reservationDate: '2024-08-24',
            dueDate: '2024-09-24',
            status: 'In Use',
            notes: 'Keep in a safe place to avoid data loss.',
          },
          {
            id: 6,
            itemName: 'USB Flash Drive',
            studentName: 'Sarah Davis',
            studentId: 'S990011',
            reservationDate: '2024-08-25',
            dueDate: '2024-09-25',
            status: 'In Use',
            notes: 'Ensure data is backed up regularly.',
          },
          {
            id: 7,
            itemName: 'Wi-Fi Adapter',
            studentName: 'Chris Martinez',
            studentId: 'S223344',
            reservationDate: '2024-08-26',
            dueDate: '2024-09-26',
            status: 'In Use',
            notes: 'Test the connection speed regularly.',
          },
          {
            id: 8,
            itemName: 'Portable Monitor',
            studentName: 'Emily Clark',
            studentId: 'S556677',
            reservationDate: '2024-08-27',
            dueDate: '2024-09-27',
            status: 'In Use',
            notes: 'Do not use in direct sunlight.',
          },
          {
            id: 9,
            itemName: 'HDMI Cable',
            studentName: 'James Lewis',
            studentId: 'S889900',
            reservationDate: '2024-08-28',
            dueDate: '2024-09-28',
            status: 'In Use',
            notes: 'Ensure proper connection to avoid damage.',
          },
          {
            id: 10,
            itemName: 'Webcam',
            studentName: 'Jessica Robinson',
            studentId: 'S334455',
            reservationDate: '2024-08-29',
            dueDate: '2024-09-29',
            status: 'In Use',
            notes: 'Ensure privacy settings are enabled.',
          },
  
          // Nursing Student Equipment
          {
            id: 11,
            itemName: 'Syringe',
            studentName: 'William Hall',
            studentId: 'S666777',
            reservationDate: '2024-08-30',
            dueDate: '2024-09-30',
            status: 'In Use',
            notes: 'Dispose of properly after use.',
          },
          {
            id: 12,
            itemName: 'Stethoscope',
            studentName: 'Linda Young',
            studentId: 'S999111',
            reservationDate: '2024-08-31',
            dueDate: '2024-09-31',
            status: 'In Use',
            notes: 'Clean after each use.',
          },
          {
            id: 13,
            itemName: 'Blood Pressure Cuff',
            studentName: 'Barbara Hernandez',
            studentId: 'S222333',
            reservationDate: '2024-09-01',
            dueDate: '2024-10-01',
            status: 'In Use',
            notes: 'Ensure proper fit before use.',
          },
          {
            id: 14,
            itemName: 'Thermometer',
            studentName: 'Paul King',
            studentId: 'S444555',
            reservationDate: '2024-09-02',
            dueDate: '2024-10-02',
            status: 'In Use',
            notes: 'Sanitize after each use.',
          },
          {
            id: 15,
            itemName: 'Nursing Scissors',
            studentName: 'Nancy Wright',
            studentId: 'S666777',
            reservationDate: '2024-09-03',
            dueDate: '2024-10-03',
            status: 'In Use',
            notes: 'Store safely after use.',
          },
          {
            id: 16,
            itemName: 'IV Kit',
            studentName: 'Brian Lopez',
            studentId: 'S888999',
            reservationDate: '2024-09-04',
            dueDate: '2024-10-04',
            status: 'In Use',
            notes: 'Check for expiration date before use.',
          },
          {
            id: 17,
            itemName: 'Bandage Set',
            studentName: 'Mary Green',
            studentId: 'S000111',
            reservationDate: '2024-09-05',
            dueDate: '2024-10-05',
            status: 'In Use',
            notes: 'Keep in a dry, cool place.',
          },
          {
            id: 18,
            itemName: 'Glucometer',
            studentName: 'Kevin Hill',
            studentId: 'S222333',
            reservationDate: '2024-09-06',
            dueDate: '2024-10-06',
            status: 'In Use',
            notes: 'Check battery before use.',
          },
          {
            id: 19,
            itemName: 'Oxygen Mask',
            studentName: 'George Adams',
            studentId: 'S444555',
            reservationDate: '2024-09-07',
            dueDate: '2024-10-07',
            status: 'In Use',
            notes: 'Ensure proper fit before use.',
          },
          {
            id: 20,
            itemName: 'Suture Kit',
            studentName: 'Sandra Baker',
            studentId: 'S666777',
            reservationDate: '2024-09-08',
            dueDate: '2024-10-08',
            status: 'In Use',
            notes: 'Store in a sterile environment.',
          },
  
          // IT Help Desk Equipment
        {
          id: 21,
          itemName: 'Router',
          studentName: 'Jason Scott',
          studentId: 'S888999',
          reservationDate: '2024-09-09',
          dueDate: '2024-10-09',
          status: 'In Use',
          notes: 'Ensure it is returned with all cables.',
        },
        {
          id: 22,
          itemName: 'Switch',
          studentName: 'Laura Evans',
          studentId: 'S000111',
          reservationDate: '2024-09-10',
          dueDate: '2024-10-10',
          status: 'In Use',
          notes: 'Document network settings before returning.',
        },
        {
          id: 23,
          itemName: 'Network Testing Kit',
          studentName: 'Robert Turner',
          studentId: 'S222333',
          reservationDate: '2024-09-11',
          dueDate: '2024-10-11',
          status: 'In Use',
          notes: 'Ensure all tools are accounted for upon return.',
        },
        {
          id: 24,
          itemName: 'UPS (Uninterruptible Power Supply)',
          studentName: 'Karen White',
          studentId: 'S444555',
          reservationDate: '2024-09-12',
          dueDate: '2024-10-12',
          status: 'In Use',
          notes: 'Return with full charge.',
        },
        {
          id: 25,
          itemName: 'Server Maintenance Kit',
          studentName: 'Eric Walker',
          studentId: 'S666777',
          reservationDate: '2024-09-13',
          dueDate: '2024-10-13',
          status: 'In Use',
          notes: 'Ensure all components are returned.',
        },
      ],
      selectedItem: null,
    };
  },
  methods: {
    viewDetails(item) {
      this.selectedItem = item;
    },
    closeModal() {
      this.selectedItem = null;
    },
  },
};
</script>

<style scoped>
.reserved-list {
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
}

button:hover {
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
}

.close-button {
  float: right;
  font-size: 24px;
  cursor: pointer;
}

.close-button:hover {
  color: red;
}
</style>