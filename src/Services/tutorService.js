import { get, post } from "../Utils/request";

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
// Lấy đánh giá
export const getReview = async (slug) => {
  try {
    const data = await get(`reviews/${slug}/list`, true);
    return data;
  } catch (error) {
    console.error("There was a problem with the get courses operation:", error);
    throw error;
  }
};
// Thêm đánh giá
export const postReview = async (slug, selectedRating, comment) => {
  try {
    const data = await post(
      `reviews/${slug}`,
      { rating: selectedRating, comment },
      true
    );
    return data;
  } catch (error) {
    console.error("There was a problem with the get courses operation:", error);
    throw error;
  }
};
