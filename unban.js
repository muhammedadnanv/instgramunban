const axios = require('axios');

const username = 'your_username';
const password = 'your_password';

const unbanUser = async (userId) => {
  try {
    const response = await axios.post(`https://www.instagram.com/users/${userId}/unban/`, {
    username,
    password
  });
  console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const userId = 'user_id_to_unban';
unbanUser(userId);
