import { MdDashboard, MdSettings } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import React from "react";

import DashboardPage from "../../components/pages/Dashboard/DashboardPage";
import UserProfilePage from "../../components/pages/UserProfile/UserProfilePage";

const routesList = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <MdDashboard />,
    component: DashboardPage,
  },
  {
    path: "/profile",
    name: "Perfil de usuário",
    icon: <FaUserCog />,
    component: UserProfilePage,
  },
  {
    path: "/login",
    name: "Login",
    icon: <AiOutlineLogin />,
    component: UserProfilePage,
  },
  {
    path: "/settings",
    name: "Configurações",
    icon: <MdSettings />,
    component: UserProfilePage,
  },
];

export default routesList;
