
const dataTable = document.querySelector('.dataTable')

const dataArray = [
    {
        firstname: 'abuzar',
        lastname: 'afridi',
        fullname: 'abuzar afridi',
        email: 'abuzar@gmail.com',
        password: 'abuzar123*',
    },
    {
        firstname: 'salman',
        lastname: 'afridi',
        fullname: 'salman afridi',
        email: 'salman@gmail.com',
        password: 'salman123*',
    },
    {
        firstname: 'osama',
        lastname: 'afridi',
        fullname: 'osama afridi',
        email: 'osama@gmail.com',
        password: 'osama123*',
    },
    {
        firstname: 'abdullah',
        lastname: 'afridi',
        fullname: 'abdullah afridi',
        email: 'abdullah@gmail.com',
        password: 'abdullah123*',
    },
]

dataArray.map((userObj) => {
    dataTable.innerHTML += `<tr>
                        <td><input type="text" value="${userObj.firstname}"></td>
                        <td><input type="text" value="${userObj.lastname}"></td>
                        <td><input type="text" value="${userObj.fullname}"></td>
                        <td><input type="email" value="${userObj.email}"></td>
                        <td><input type="text" value="${userObj.password}"></td>
                    </tr>`
})


const form = document.getElementById('form')
const error = document.getElementById('error')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstname = e.target.firstname.value
    const lastname = e.target.lastname.value
    const fullname = firstname + ' ' + lastname
    const email = e.target.email.value
    const password = e.target.password.value

    if (firstname == "" || lastname == "" || email == "" || password == "") {
        error.innerText = 'error! all fields are required'
        return
    }
    else if (firstname.length < 3 || lastname.length < 3) {
        error.innerText = 'error! please enter a valid name'
        return
    }
    else if (!emailRegex.test(email)) {
        error.innerText = 'error! please enter a valid email address.';
        return;
      } else if (!passwordRegex.test(password)) {
        error.innerText = 'error! password must be at least 6 characters, include 1 number and 1 special character.';
        return;
      }
    else {
        const userData = {
            firstname: firstname,
            lastname: lastname,
            fullname: fullname,
            email: email,
            password: password,
        }

        dataArray.push(userData)

        dataTable.innerHTML += `<tr>
                            <td><input type="text" value="${userData.firstname}"></td>
                            <td><input type="text" value="${userData.lastname}"></td>
                            <td><input type="text" value="${userData.fullname}"></td>
                            <td><input type="email" value="${userData.email}"></td>
                            <td><input type="text" value="${userData.password}"></td>
                        </tr>`
    }
    error.innerText = ""
    e.target.reset();
})

