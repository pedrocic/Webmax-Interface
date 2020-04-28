import DashboardPage from '../../components/pages/Dashboard/DashboardPage';
import UserProfilePage from '../../components/pages/UserProfile/UserProfilePage';

const routesList = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'icon',
    component: DashboardPage,
  },
  {
    path: '/profile',
    name: 'User Profile',
    icon: 'icon',
    component: UserProfilePage,
  },
];

export default routesList;
