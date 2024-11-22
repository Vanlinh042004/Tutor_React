import { Routes, Route } from "react-router-dom";
import Layout from "./LayoutDefault/Layout";
import Home from "./Pages/Home/indexHome";
import About from "./Pages/About/indexAbout";
import Courses from "./Pages/Courses/indexCourses";
import Tutors from "./Pages/Tutors/indexTutors";
import Contact from "./Pages/Contact/indexContact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="tutors" element={<Tutors />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
