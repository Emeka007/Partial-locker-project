<template>
  <div class="loading-list">
    <!-- Sidebar -->
    <nav class="sidebar">
      <ul>
        <li>
          <router-link to="/dashboard">
            <i class="fas fa-tachometer-alt"></i> Dashboard
          </router-link>
        </li>
        <li>
          <router-link to="/item-management">
            <i class="fas fa-box"></i> Item Management
          </router-link>
        </li>
        <li>
          <router-link to="/returned-list">
            <i class="fas fa-undo"></i> Returned Items
          </router-link>
        </li>
        <li>
          <router-link to="/unloaded-list">
            <i class="fas fa-box-open"></i> Unloaded Items
          </router-link>
        </li>
        <li>
          <router-link to="/settings">
            <i class="fas fa-cog"></i> Settings
          </router-link>
        </li>
        <li>
          <router-link to="/logout">
            <i class="fas fa-sign-out-alt"></i> Logout
          </router-link>
        </li>
      </ul>
    </nav>

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
      approvedItems: [
        // Your mocked data
      ],
    };
  },
  methods: {
    generateBarcode(itemId) {
      const item = this.approvedItems.find(i => i.id === itemId);
      if (item) {
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
.sidebar {
  width: 250px;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 15px;
}

.sidebar a {
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.sidebar a:hover {
  background-color: #e9ecef;
}

.sidebar i {
  margin-right: 10px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.items-list {
  margin-left: 270px; /* Adjust margin to fit the sidebar */
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
