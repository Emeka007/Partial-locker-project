import { createRouter, createWebHistory } from 'vue-router';
import StudentDashboard from '../views/StudentDashboard.vue';
import StudentLogin from '../views/StudentLogin.vue';
import StudentNotifications from '@/components/StudentNotifications.vue';
import StudentProfile from '../views/StudentProfile.vue'; 
import AdminProfile from '@/components/AdminProfile.vue';
import QuickActions from '@/components/QuickActions.vue';
import BookedItem from '@/views/BookedItem.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import UploadItem from '@/components/UploadItem.vue';
import UploadPop from '@/components/UploadPop.vue';
import ScheduledItems from '@/components/ScheduledItems.vue';
import FormPage from '@/components/FormPage.vue';

const routes = [
  { path: '/', name: 'StudentLogin', component: StudentLogin },
  { path: '/studentnotifications', name: 'StudentNotifications', component: StudentNotifications },
  { path: '/dashboard', name: 'StudentDashboard', component: StudentDashboard },
  { path: '/profile', name: 'StudentProfile', component: StudentProfile },
  { path: '/adminprofile', name: 'AdminProfile', component: AdminProfile },
  { path: '/admindashboard', name: 'AdminDashboard', component: AdminDashboard },
  { path: '/form', name: 'FormPage', component: FormPage },
  {
    path: '/all-items', 
    name: 'AllItems', 
    component: () => import('@/components/AllItems.vue')
  },
  
  {
    path: '/booked-item/:item',
    name: 'BookedItem',
    component: BookedItem,
    props: route => ({ item: JSON.parse(route.params.item) })
  },
  { path: '/quickactions',    name: 'QuickActions',    component: QuickActions  },
  { path: '/upload-item',    name: 'UploadItem',    component: UploadItem,  },
  { path: '/upload-pop',    name: 'UploadPop',    component: UploadPop,  },
  { path: '/scheduled-items',    name: 'ScheduledItems',    component: ScheduledItems,  },
  {
    path: '/returned-list',
    name: 'ReturnedList',
    component: () => import('@/components/ReturnedList.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
