import Layout from "../LayoutDefault/Layout";
import About from "../Pages/About/indexAbout";
import Home from "../Pages/Home/indexHome";
import Courses from "../Pages/Courses/indexCourses";
import Tutors from "../Pages/Tutors/indexTutors";
import Contact from "../Pages/Contact/indexContact";
import Signup from "../Pages/Register";
import Signin from "../Pages/Login";
import Logout from "../Pages/Logout/indexLogout";
import ForgetPassword from "../Pages/Forget/forget";
import ResetPassword from "../Pages/Forget/reset";
import CourseDetail from "../Pages/Courses/courseDetail";
import TutorDetail from "../Pages/Tutors/tutorDetail";
import RegisterCourse from "../Pages/Courses/RegisterCourse";
import Profile from "../Pages/Profile/indexProfile";
import RequestClass from "../Pages/RequestClass/indexRequestClass";
export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "courses/:slug",
        element: <CourseDetail />,
      },
      {
        path: "registerCourse",
        element: <RegisterCourse />,
      },
      {
        path: "tutors",
        element: <Tutors />,
      },
      {
        path: "tutors/:slug",
        element: <TutorDetail />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "register",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Signin />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "forget",
        element: <ForgetPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "request-class",
        element: <RequestClass />,
      },
    ],
  },
];
