import { createRouter, createWebHistory } from 'vue-router';
import StudentDashboard from '@/views/StudentDashboard.vue';
import StudentLogin from '@/views/StudentLogin.vue';
import MyReservations from '@/views/MyReservations.vue';
import StudentNotifications from '@/views/StudentNotifications.vue';
import StudentProfile from '@/views/StudentProfile.vue';
import QuickActions from '@/components/QuickActions.vue';

const routes = [
  { path: '/', name: 'StudentLogin', component: StudentLogin },
  { path: '/studentdashboard', name: 'StudentDashboard', component: StudentDashboard },
  { path: '/reservations', name: 'MyReservations', component: MyReservations },
  { path: '/notifications', name: 'StudentNotifications', component: StudentNotifications },
  { path: '/quickactions',    name: 'QuickActions',    component: QuickActions  },
  { path: '/profile', name: 'StudentProfile', component: StudentProfile },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
