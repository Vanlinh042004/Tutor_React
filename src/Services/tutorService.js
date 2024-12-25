import { get } from "../Utils/request";

export const getTutors = async (page) => {
  try {
    const data = await get(`tutors?page=${page}`);
    return data;
  } catch (error) {
    console.error("There was a problem with the get courses operation:", error);
    throw error;
  }
};
// chi tiet
export const getDetailTutor = async (slug) => {
  try {
    const data = await get(`tutors/${slug}`);
    return data;
  } catch (error) {
    console.error("There was a problem with the get courses operation:", error);
    throw error;
  }
};
// tim kiem
export const searchTutor = async (search) => {
  try {
    const data = await get(`tutors/filter?keyword=${search}`);
    return data;
  } catch (error) {
    console.error("There was a problem with the get courses operation:", error);
    throw error;
  }
};
// Lọc
export const filterTutor = async (filter) => {
  try {
    const data = await get(`tutors/filter?specialization=${filter}`);
    return data;
  } catch (error) {
    console.error("There was a problem with the get courses operation:", error);
    throw error;
  }
};
