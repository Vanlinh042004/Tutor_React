import { get } from "../Utils/request";

export const getCourses = async (page) => {
  try {
    const data = await get(`courses?page=${page}`);
    return data;
  } catch (error) {
    console.error("There was a problem with the get courses operation:", error);
    throw error;
  }
};
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
export const searchCourse = async () => {
  try {
    const data = await get("courses/search");
    return data;
  } catch (error) {
    console.error(
      "There was a problem with the search courses operation:",
      error
    );
    throw error;
  }
};
