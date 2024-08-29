import { createRouter, createWebHistory } from 'vue-router';
import StudentDashboard from '../views/StudentDashboard.vue';
import StudentLogin from '../views/StudentLogin.vue';
import StudentNotifications from '@/components/StudentNotifications.vue';
import StudentProfile from '../views/StudentProfile.vue'; 
import AdminProfile from '@/components/AdminProfile.vue';
import QuickActions from '@/components/QuickActions.vue';
import BookedItem from '@/views/BookedItem.vue';
import AdminDashboard from '../views/AdminDashboard.vue';

const routes = [
  { path: '/', name: 'StudentLogin', component: StudentLogin },
  { path: '/studentnotifications', name: 'StudentNotifications', component: StudentNotifications },
  { path: '/dashboard', name: 'StudentDashboard', component: StudentDashboard },
  { path: '/profile', name: 'StudentProfile', component: StudentProfile },
  { path: '/adminprofile', name: 'AdminProfile', component: AdminProfile },
  { path: '/admindashboard', name: 'AdminDashboard', component: AdminDashboard },
  { path: '/booked-item', name: 'BookedItem', component: BookedItem, props: true },
  { path: '/quickactions',    name: 'QuickActions',    component: QuickActions  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
