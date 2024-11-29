import { Routes, Route } from "react-router-dom";
import Layout from "./LayoutDefault/Layout";
import Home from "./Pages/Home/indexHome";
import About from "./Pages/About/indexAbout";
import Courses from "./Pages/Courses/indexCourses";
import Tutors from "./Pages/Tutors/indexTutors";
import Contact from "./Pages/Contact/indexContact";
import TutorDetail from "./Pages/Tutors/tutorDetail";
import CourseDetail from "./Pages/Courses/courseDetail";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courseDetail" element={<CourseDetail />} />
          <Route path="tutors" element={<Tutors />} />
          <Route path="detail" element={<TutorDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
      {/* <TutorDetail /> */}
    </>
  );
}

export default App;
