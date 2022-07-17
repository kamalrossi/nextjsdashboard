import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Author",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    layout: "/admin",
  },
  {
    path: "/table-list",
    name: "Article",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Review",
    rtlName: "طباعة",
    icon: LibraryBooks,

    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Comment",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,

    layout: "/rtl",
  },
  {
    path: "/upgrade-to-pro",
    name: "Settings",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,

    layout: "/admin",
  },
];
export default dashboardRoutes;
