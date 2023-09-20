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

  const { data } = await axios.get(URL, options);
  // console.log(response.data.hits); // тут в нас 12 масивів об'єктів зображень та їх данних
  return data;
};
