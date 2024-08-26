import { createRouter, createWebHistory } from 'vue-router';
import StudentDashboard from '@/views/StudentDashboard.vue';
import StudentLogin from '@/views/StudentLogin.vue';
import MyReservations from '@/views/MyReservations.vue';
import AdminDashboard from '@/views/AdminDashboard.vue';  // Updated path
import StudentNotifications from '@/views/StudentNotifications.vue';
import StudentProfile from '@/views/StudentProfile.vue';
import QuickActions from '@/components/QuickActions.vue';
import ItemManagement from '@/components/ItemManagement.vue';
import BorrowRequests from '@/components/BorrowRequests.vue';
import LoadingList from '@/components/LoadingList.vue';
import ReservedList from '@/components/ReservedList.vue';
import ReturnedList from '@/components/ReturnedList.vue';
import UnloadedList from '@/components/UnloadedList.vue';
import AdminProfile from '@/components/AdminProfile.vue';

const routes = [
  { path: '/', name: 'StudentLogin', component: StudentLogin },
  { path: '/studentdashboard', name: 'StudentDashboard', component: StudentDashboard },
  { path: '/reservations', name: 'MyReservations', component: MyReservations },
  { path: '/notifications', name: 'StudentNotifications', component: StudentNotifications },
  { path: '/quickactions', name: 'QuickActions', component: QuickActions },
  { path: '/admindashboard', name: 'AdminDashboard', component: AdminDashboard }, 
  { path: '/profile', name: 'StudentProfile', component: StudentProfile },
  { path: '/item-management', name: 'ItemManagement', component: ItemManagement },
  { path: '/borrow-requests', name: 'BorrowRequests', component: BorrowRequests },
  { path: '/loading-list', name: 'LoadingList', component: LoadingList },
  { path: '/reserved-list', name: 'ReservedList', component: ReservedList },
  { path: '/returned-list', name: 'ReturnedList', component: ReturnedList },
  { path: '/unloaded-list', name: 'UnloadedList', component: UnloadedList },
  { path: '/adminprofile', name: 'AdminProfile', component: AdminProfile },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
