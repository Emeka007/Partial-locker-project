import { createRouter, createWebHistory } from 'vue-router';
import StudentDashboard from '@/views/StudentDashboard.vue';
import StudentLogin from '@/views/StudentLogin.vue';
import MyReservations from '@/views/MyReservations.vue';
import AdminDashboard from '@/views/AdminDashboard.vue';  // Updated path
import StudentNotifications from '@/views/StudentNotifications.vue';
import StudentProfile from '@/views/StudentProfile.vue';
import StudentChat from '@/views/StudentChat.vue';
import StudentOpenChats from '@/components/StudentOpenChats.vue';

import QuickActions from '@/components/QuickActions.vue';
import ItemManagement from '@/components/ItemManagement.vue';
import BorrowRequests from '@/components/BorrowRequests.vue';
import LoadingList from '@/components/LoadingList.vue';
import ReservedItems from '@/components/ReservedItems.vue';
import ReturnedList from '@/components/ReturnedList.vue';
import UnloadedList from '@/components/UnloadedList.vue';
import AdminProfile from '@/components/AdminProfile.vue';
import BookedItem from '@/components/BookedItem.vue';
import ReturnedItem from '@/views/ReturnedItem.vue';
import UploadItem from '@/components/UploadItem.vue';
import UploadPop from '@/components/UploadPop.vue';
import ScheduledItems from '@/components/ScheduledItems.vue';
import PendingItems from '@/components/PendingItems.vue';
import AdminSettings from '@/components/AdminSettings.vue';
import MissingItems from '@/components/MissingItems.vue';

const routes = [
  { path: '/', name: 'StudentLogin', component: StudentLogin },
  { path: '/studentdashboard', name: 'StudentDashboard', component: StudentDashboard },
  { path: '/reservations', name: 'MyReservations', component: MyReservations },
  { path: '/notifications', name: 'StudentNotifications', component: StudentNotifications },
  { path: '/quickactions', name: 'QuickActions', component: QuickActions },
  { path: '/admindashboard', name: 'AdminDashboard', component: AdminDashboard }, 
  { path: '/profile', name: 'StudentProfile', component: StudentProfile },
  { path: '/studentchat', name: 'StudentChat', component: StudentChat },
  { path: '/item-management', name: 'ItemManagement', component: ItemManagement },
  { path: '/borrow-requests', name: 'BorrowRequests', component: BorrowRequests },
  { path: '/loading-list', name: 'LoadingList', component: LoadingList },
  { path: '/reserved-items', name: 'ReservedItems', component: ReservedItems },
  { path: '/returned-list', name: 'ReturnedList', component: ReturnedList },
  { path: '/unloaded-list', name: 'UnloadedList', component: UnloadedList },
  { path: '/adminprofile', name: 'AdminProfile', component: AdminProfile },
  { path: '/returneditem', name: 'ReturnedItem', component: ReturnedItem },
  { path: '/upload-item', name: 'UploadItem', component: UploadItem },
  { path: '/upload-pop',    name: 'UploadPop',    component: UploadPop,  },
  { path: '/admin-settings', name: 'AdminSettings', component: AdminSettings,},
  {
    path: '/student-open-chats/:contactId',
    name: 'StudentOpenChats',
    component: StudentOpenChats,
    props: true
  },
  {
    path: '/reservation-history',
    name: 'ReservationHistory',
    component: () => import('@/components/ReservationHistory.vue')
  },
  
  { path: '/booked-item', name: 'BookedItem', component: BookedItem, props: true },
  {
    path: '/scheduled-items',
    name: 'ScheduledItems',
    component: ScheduledItems
  },
  {
    path: '/pending-items',
    name: 'PendingItems',
    component: PendingItems
  },
  
  {
    path: '/missing-items',
    name: 'MissingItems',
    component: MissingItems },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
