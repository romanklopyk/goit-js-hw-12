import axios from 'axios';


let PER_PAGE = 3;

async function getImagesByQuery(query, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '56574812-7e56c45bcaff458824f0ca6f0',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      "webformatWidth": 180,
      safesearch: true,
      per_page: PER_PAGE,
      page: page,
    },
  });
  console.log(response.data.total);
  console.log(response.data.totalHits);
  console.log(response.data.hits);

  return {...response.data, perPage: PER_PAGE};
}

export default getImagesByQuery;

