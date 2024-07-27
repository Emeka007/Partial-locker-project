<template>
  <div class="upcoming-deadlines">
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Deadline</th>
          <th>Countdown</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="deadline in deadlines" :key="deadline.id">
          <td>{{ deadline.item }}</td>
          <td>{{ deadline.deadline }}</td>
          <td>{{ calculateCountdown(deadline.deadline) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deadlines: [
        { id: 1, item: 'Raspberry Pi', deadline: '2024-06-25' },
        { id: 2, item: 'Syringe Kit', deadline: '2024-06-24' },
      ],
    };
  },
  methods: {
    calculateCountdown(deadline) {
      const today = new Date();
      const deadlineDate = new Date(deadline);
      const timeDiff = deadlineDate - today;
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return `${daysDiff} days left`;
    },
  },
};
</script>

<style scoped>
.upcoming-deadlines table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.upcoming-deadlines th,
.upcoming-deadlines td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.upcoming-deadlines th {
  background-color: #f2f2f2;
}
</style>
