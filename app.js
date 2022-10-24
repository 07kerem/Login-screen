

// let loginBtn = document.querySelector('.login-button');
// let usernameInput = document.getElementById('username');
// let passwordInput = document.getElementById('password');
// let alerts = document.querySelector('.warn-alert');
// let screens = document.querySelector('.auth-screen');
// let login = document.querySelector('.login-screen');


// loginBtn.addEventListener("click", function(){
 
//     let username = usernameInput.value;
//     let password = passwordInput.value;

//     if(username === 'kerem' && password === '1234567'){
//       alerts.classList.add('active');
//     }
//     else{
//       screens.classList.add('.auth-screen').style.display = 'block'
//       login.classList.add('.login-screen').style.display = 'none';
//     }
  
// })





















// const userDatabase = [
//     {
//       username: 'kerem',
//       password: 'kerem1905',
//     }
//   ];
  
 
//   const loginForm = document.querySelector('.login-form');
//   const loginBtn = document.querySelector('.btn');
//   const usernameInput = document.getElementById('username');
//   const passwordInput = document.getElementById('password');
//   const errorMessage = document.querySelector('.message');
//   const loginSuccess = document.querySelector('.login-true');
  
//   loginBtn.addEventListener('click', function (event) {
//     let username = usernameInput.value;
//     let password = passwordInput.value;
  
  
  
//     if (username === '' || password === '') {
//       errorMessage.classList.add('active');
//     }
   
//     loginProcess(username, password);
//     event.preventDefault();
//   });
  
  
  
//   function isUserValid(username, password) {
//     for (let i = 0; i < userDatabase.length; i++) {
//       if (
//         username === userDatabase[i].username &&
//         password === userDatabase[i].password
//       ) {
//         return true;
//       }
//     }
//     return false;
//   }
  
//   function loginProcess(username, password) {
//     console.log('working');
//     if (isUserValid(username, password)) {
//       loginForm.classList.remove('active');
//       document.getElementsByClassName('auth-screen').style.display = 'block';
//       document.getElementsByClassName('login-screen').style.display = 'none';
//       // loginSuccess.innerHTML = `
//       //     <h1>Welcome <span class="text-primary">${username} </span></h1>
//       //     <h2>Succesfull Login </h2>
//       //     <p>Enjoy the content of our site</p>
//       //     <a href="" class="return-start">Return</a>
//       // `;
//       loginSuccess.classList.add('active');
//     } else {
//       errorMessage.classList.add('active');
//     }
//   }
  
 
  
//   const returnStart = document.querySelector('.return-start');
  
//   returnStart.addEventListener('click', function (e) {
//     loginSuccess.classList.remove('active');
//     loginForm.classList.add('active');
//   });
  