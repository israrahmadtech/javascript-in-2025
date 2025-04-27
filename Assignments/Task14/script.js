const emailError = document.querySelector('.emailError')
const passwordError = document.querySelector('.passwordError')
const anyError = document.querySelector('.anyError')


const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (window.location.href.includes('login.html') || window.location.href.includes('register.html')) {
    if (currentUser) {
        window.location.href = 'index.html';
    }
}

if (window.location.href.includes('https://registerloginpagesisrar.vercel.app') || window.location.href.includes('index.html') || window.location.href.includes('database.html')) {
    if (!currentUser) {
        window.location.href = 'register.html';
    }
}


function loginForm(event) {
    event.preventDefault();

    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
        anyError.innerText = "All fields are required!";
        return;
    }
    else if (!emailPattern.test(email)) {
        emailError.innerText = "Invalid email format!";
        anyError.innerText = '';
        passwordError.innerText = '';
        return;
    }
    else if (password.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters long!";
        anyError.innerText = '';
        emailError.innerText = '';
        return;
    }
    else {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const findUser = users.find(user => user.email === email && user.password === password);

        if (findUser) {
            // Save currentUser to localStorage
            localStorage.setItem('currentUser', JSON.stringify(findUser));

            // Welcome message
            showNotification(`Welcome Back ${findUser.name}!`, 'success');


            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);

        } else {
            anyError.innerText = "Invalid Email or Password!";
        }
    }
}



function registerFrom(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password || !name) {
        anyError.innerText = "All fields are required!";
        return;
    }
    else if (name.length < 3) {
        anyError.innerText = 'Please fill a valid name';
        passwordError.innerText = "";
        emailError.innerText = '';
        return;
    }
    else if (!emailPattern.test(email)) {
        emailError.innerText = "Invalid email format!";
        anyError.innerText = '';
        passwordError.innerText = '';
        return;
    }
    else if (password.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters long!";
        anyError.innerText = '';
        emailError.innerText = '';
        return;
    }
    else {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            emailError.innerText = "User with this email already exists! Please Login";
            return;
        }

        const newUser = { name: name, email: email, password: password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // success message
        showNotification('Registration successful!', 'success');

        // Save currentUser to localStorage registration
        localStorage.setItem('currentUser', JSON.stringify(newUser));

        // Redirect to home page

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500); // 1.5 second baad redirect hoga
    }
}


function logout() {
    localStorage.removeItem('currentUser');

    window.location.href = "login.html";
}

// Notifications
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
        </div>
    `;

    setTimeout(() => {
        notification.innerHTML = '';
    }, 3000);
}

const insertData = document.querySelector('.insertData')
const usersInLocal = JSON.parse(localStorage.getItem('users'))
// console.log(usersInLocal)
usersInLocal.map((user, index) => {
    index++;
    insertData.innerHTML += `<tr>
                    <th>${index}</th>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.password}</td>
                </tr>`
})
