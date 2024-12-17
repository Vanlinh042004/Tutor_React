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
export const getDetailTutor = async (slug) => {
  try {
    const data = await get(`tutors/${slug}`);
    return data;
  } catch (error) {
    console.error("There was a problem with the get courses operation:", error);
    throw error;
  }
};
