import axios from 'axios';

const fetchUser = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');

  return response.data;
};

export default fetchUser;
