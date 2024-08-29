<template>
    <div class="borrow-requests">
      
  
      <!-- Borrow Requests List -->
      <div class="requests-list">
        <h2>Pending Borrow Requests</h2>
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Item Name</th>
              <th>Requested Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request in pendingRequests" :key="request.id">
              <td>{{ request.studentName }}</td>
              <td>{{ request.itemName }}</td>
              <td>{{ request.requestedDate }}</td>
              <td>{{ request.status }}</td>
              <td>
                <button @click="approveRequest(request.id)">Approve</button>
                <button @click="rejectRequest(request.id)">Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Student and Item Details Modal -->
      <div v-if="selectedRequest" class="details-modal">
        <div class="modal-content">
          <h2>Request Details</h2>
          <p><strong>Student Name:</strong> {{ selectedRequest.studentName }}</p>
          <p><strong>Item Name:</strong> {{ selectedRequest.itemName }}</p>
          <p><strong>Requested Date:</strong> {{ selectedRequest.requestedDate }}</p>
          <p><strong>Status:</strong> {{ selectedRequest.status }}</p>
          <button @click="closeDetailsModal" class="close-button">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BorrowRequests',
    data() {
      return {
        // Example data for pending borrow requests
        pendingRequests: [
          {
            id: 1,
            studentName: 'John Doe',
            itemName: 'Defibrillator',
            requestedDate: '2024-06-20',
            status: 'PENDING',
          },
          {
            id: 2,
            studentName: 'Anthony Kipkemboi',
            itemName: 'Chemistry Lab Kit',
            requestedDate: '2024-06-22',
            status: 'PENDING',
          },
          {
            id: 3,
            studentName: 'Alice Johnson',
            itemName: 'Nursing Simulation Manikin',
            requestedDate: '2024-07-10',
            status: 'PENDING',
          },
          {
            id: 4,
            studentName: 'Angela Yogi',
            itemName: 'Syringe Pack',
            requestedDate: '2024-07-15',
            status: 'PENDING',
          },
          {
            id: 5,
            studentName: 'Saurav Amatya',
            itemName: 'Raspberry Pi',
            requestedDate: '2024-07-25',
            status: 'PENDING',
          },
          {
            id: 6,
            studentName: 'Ojeabulu Jude',
            itemName: 'Stethscope',
            requestedDate: '2024-08-05',
            status: 'PENDING',
          },
          {
            id: 7,
            studentName: 'Majeed Babs',
            itemName: 'Network Switcher',
            requestedDate: '2024-08-10',
            status: 'PENDING',
          },
          {
            id: 8,
            studentName: 'Callistus Obara',
            itemName: 'Cable Tester',
            requestedDate: '2024-08-20',
            status: 'PENDING',
          },
          {
            id: 9,
            studentName: 'Joy Okonji',
            itemName: 'SAP Workbook',
            requestedDate: '2024-08-21',
            status: 'PENDING',
          },
          {
            id: 10,
            studentName: 'Cliff Akinde',
            itemName: 'Financial Workbook',
            requestedDate: '2024-08-25',
            status: 'PENDING',
          },
        ],
        selectedRequest: null, // Holds the selected request details
      };
    },
    methods: {
      approveRequest(requestId) {
        const request = this.pendingRequests.find(req => req.id === requestId);
        if (request) {
          request.status = 'APPROVED';
          // Move the item to the loading list or perform the necessary action
          alert(`Request for ${request.itemName} by ${request.studentName} has been approved.`);
          this.notifyStudent(request, 'approved');
        }
      },
      rejectRequest(requestId) {
        const request = this.pendingRequests.find(req => req.id === requestId);
        if (request) {
          request.status = 'AVAILABLE';
          // Notify the student that the request has been rejected
          alert(`Request for ${request.itemName} by ${request.studentName} has been rejected.`);
          this.notifyStudent(request, 'rejected');
        }
      },
      viewRequestDetails(requestId) {
        this.selectedRequest = this.pendingRequests.find(req => req.id === requestId);
      },
      closeDetailsModal() {
        this.selectedRequest = null;
      },
      notifyStudent(request, decision) {
        // Here you would implement the logic to notify the student about the decision
        console.log(`Student ${request.studentName} has been notified that their request for ${request.itemName} was ${decision}.`);
      },
    },
  };
  </script>
  
  <style scoped>
  .borrow-requests {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h1, h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .requests-list {
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
  
  button:hover {
    background-color: #0056b3;
  }
  
  .details-modal {
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
    max-width: 100%;
  }
  
  .close-button {
    padding: 8px 16px;
    background-color: #d9534f;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .close-button:hover {
    background-color: #c9302c;
  }
  </style>
  