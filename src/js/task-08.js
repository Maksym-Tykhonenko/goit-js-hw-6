const form = document.querySelector('.login-form');

const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.currentTarget.elements;
    //console.log(email.value);
    //console.log(password.value);

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all fields');
    };

    const userData = {
        email: email.value,
        password: password.value
    };
    
    console.log(userData);

    form.reset();

};

form.addEventListener('submit', handleSubmit)


//    <form class="login-form">
//      <label>
//        Email
//        <input type="email" name="email" />
//      </label>
//      <label>
//        Password
//        <input type="password" name="password" />
//      </label>
//      <button type="submit">Login</button>
//    </form>

