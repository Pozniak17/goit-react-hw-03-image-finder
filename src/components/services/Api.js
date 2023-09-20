import axios from 'axios';

export const articlesWithQuery = async (query, page) => {
  const URL = 'https://pixabay.com/api/';

  const options = {
    params: {
      key: '28544484-259b47bf7f7000ebfc4f498cb',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 12,
    },
  };

  const response = await axios.get(URL, options);
  return response.data.hits;
};
