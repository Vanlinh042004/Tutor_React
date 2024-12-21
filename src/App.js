import { Routes, Route } from "react-router-dom";
import Layout from "./LayoutDefault/Layout";
import Home from "./Pages/Home/indexHome";
import About from "./Pages/About/indexAbout";
import Courses from "./Pages/Courses/indexCourses";
import Tutors from "./Pages/Tutors/indexTutors";
import Contact from "./Pages/Contact/indexContact";
import TutorDetail from "./Pages/Tutors/tutorDetail";
import CourseDetail from "./Pages/Courses/courseDetail";
import RegisterCourse from "./Pages/Courses/RegisterCourse";
import Signup from "./Pages/Register";
import Signin from "./Pages/Login";
import Logout from "./Pages/Logout/indexLogout";
import Forget from "./Pages/Forget/forget";
import Reset from "./Pages/Forget/reset";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:slug" element={<CourseDetail />} />
          <Route path="registerCourse" element={<RegisterCourse />} />
          <Route path="tutors" element={<Tutors />} />
          <Route path="tutors/:slug" element={<TutorDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="logout" element={<Logout />} />
          <Route path="forget" element={<Forget />} />
          <Route path="reset-password" element={<Reset />} />
        </Route>
      </Routes>
      {/* <TutorDetail /> */}
    </>
  );
}

export default App;
