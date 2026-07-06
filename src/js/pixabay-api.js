import axios from 'axios';

async function getImagesByQuery(query) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '56574812-7e56c45bcaff458824f0ca6f0',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}

export default getImagesByQuery;

