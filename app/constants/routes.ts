// app/constants/routes.ts
import { FiHome, FiSettings, FiUser, FiBell, FiHelpCircle } from "react-icons/fi"; // Example icon imports

export const ROUTES = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: FiHome,
  },
  {
    path: "/settings",
    title: "Settings",
    icon: FiSettings,
  },
  {
    path: "/profile",
    title: "Profile",
    icon: FiUser,
  },
  {
    path: "/notifications",
    title: "Notifications",
    icon: FiBell,
  },
  {
    path: "/help",
    title: "Help",
    icon: FiHelpCircle,
  },
];
