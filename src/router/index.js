import { createRouter, createWebHistory } from 'vue-router';
import StudentDashboard from '../views/StudentDashboard.vue';
import StudentLogin from '../views/StudentLogin.vue';
import StudentNotifications from '@/components/StudentNotifications.vue';
import StudentProfile from '../views/StudentProfile.vue'; 
import QuickActions from '@/components/QuickActions.vue';

const routes = [
  { path: '/', name: 'StudentLogin', component: StudentLogin },
  { path: '/studentnotifications', name: 'StudentNotifications', component: StudentNotifications },
  { path: '/dashboard', name: 'StudentDashboard', component: StudentDashboard },
  { path: '/profile', component: StudentProfile },
  { path: '/quickactions',    name: 'QuickActions',    component: QuickActions  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
