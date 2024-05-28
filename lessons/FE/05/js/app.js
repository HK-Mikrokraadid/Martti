const apiUrl = 'http://localhost:3000';

const logout = () => {
    localStorage.removeItem('token');
};

const login = async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email || !password) {
        alert('E-mail ja parool on nõutud!');
    } else {
        try {
            const response = await axios.post(`${apiUrl}/login`, {
                email,
                password,
            });
            const token = response.data.token;
            localStorage.setItem('token', token);
            alert('Logged in');
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
        } catch (error) {
            console.log(error.message);
        }
    }
};

const fetchResource = async (resource) => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('You need to log in');
        } else {
            const response = await axios.get(`${apiUrl}/${resource}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            console.log(response);
        }
    } catch (error) {
        console.log(error.message);
    }
};
