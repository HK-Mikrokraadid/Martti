const url = 'http://localhost:3000';

const getTokenFromAPI = async (email, password) => {
  const response = await axios.post(`${url}/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    window.location.href = 'index.html';
  }
  console.log(response);
};

const login = async (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    return alert('Please fill all fields');
  }

  await getTokenFromAPI(email, password);
};

