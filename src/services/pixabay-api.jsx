import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY_URL = '28414366-d85075a16e83c1a2e8dc41671';

export const getPhotos = async (querySearch, page) => {
  const searchParams = new URLSearchParams({
    q: querySearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
    per_page: '12',
  });
  const response = await axios.get(`?key=${KEY_URL}&${searchParams}`);
  return response.data;
};
