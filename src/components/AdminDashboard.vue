<template>
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li><router-link to="/item-management">Item Management</router-link></li>
        <li><router-link to="/borrow-requests">Borrow Requests</router-link></li>
        <li><router-link to="/loading-list">Loading List</router-link></li>
        <li><router-link to="/reserved-list">Reserved List</router-link></li>
        <li><router-link to="/returned-list">Returned List</router-link></li>
        <li><router-link to="/unloaded-list">Unloaded List</router-link></li>
        <li><router-link to="/adminprofile">Profile</router-link></li> 
        <li><router-link to="/">Logout</router-link></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "AdminDashboard",
    data() {
      return {
        // Any data required for the dashboard can be added here
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles specific to Admin Dashboard here */
  </style>
