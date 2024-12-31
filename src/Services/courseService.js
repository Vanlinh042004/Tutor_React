import { get, post } from "../Utils/request";
// get courses
export const getCourses = async (page) => {
  try {
    const data = await get(`courses?page=${page}`);
    return data;
  } catch (error) {
    console.error("There was a problem with the get courses operation:", error);
    throw error;
  }
};
// get course detail
export const getCourseDetail = async (slug) => {
  try {
    const data = await get(`courses/${slug}`);
    return data;
  } catch (error) {
    console.error("There was a problem with the get course operation:", error);
    throw error;
  }
};
// Search
export const searchCourse = async (search) => {
  try {
    const data = await get(`courses?keyword=${search}`);
    return data;
  } catch (error) {
    console.error(
      "There was a problem with the search courses operation:",
      error
    );
    throw error;
  }
};
// register course
// export const registerCourse = async (course) => {
//   try {
//     const data = await post(`register-Course`, true, course._id);
//     return data;
//   } catch (error) {
//     console.error(
//       "There was a problem with the register course operation:",
//       error
//     );
//     throw error;
//   }
// };
