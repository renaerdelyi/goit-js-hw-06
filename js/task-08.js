const loginForm = document.querySelector(".login-form");
console.log(loginForm);

loginForm.addEventListener("submit",(event) =>{
event.preventDefault();

const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;

if(email === "" || password == ""){
    alert(`Trebuie completat toate campurile!`);
    return;
};

    const form = {
        email: email,
        password: password
    };
    console.log(form);
    loginForm.reset();
});