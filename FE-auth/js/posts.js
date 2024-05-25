const token = localStorage.getItem('token');

if (!token) {
  window.location.href = 'login.html';
}

const getPosts = async () => {
  try {
    const response = await axios.get(`${url}/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
  } catch (error) {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = 'login.html';
    }
    if (error.response.status === 403) {
      alert('You are not authorized to access this page');
      window.location.href = 'index.html';
    }
  }
};

getPosts();
