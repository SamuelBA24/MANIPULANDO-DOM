document.addEventListener('DOMContentLoaded', function() {
    // Crear elementos HTML
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);
  
    const form = document.createElement('form');
    form.classList.add('login-form');
    container.appendChild(form);
  
    const heading = document.createElement('h2');
    heading.textContent = 'Iniciar Sesión';
    form.appendChild(heading);
  
    const usernameInput = document.createElement('input');
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('placeholder', 'Nombre de usuario');
    usernameInput.setAttribute('required', true);
    form.appendChild(usernameInput);
  
    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('placeholder', 'Contraseña');
    passwordInput.setAttribute('required', true);
    form.appendChild(passwordInput);
  
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Iniciar Sesión';
    form.appendChild(submitButton);
  
    const forgotPasswordButton = document.createElement('button');
    forgotPasswordButton.setAttribute('type', 'button');
    forgotPasswordButton.textContent = '¿Olvidaste tu contraseña?';
    form.appendChild(forgotPasswordButton);
  
    // Establecer imagen de fondo
    body.style.backgroundImage = "url('https://i0.wp.com/www.datiaopr.com/wp-content/uploads/2023/08/Anuel-AA-2.jpg')"; 
  
    // Estilos CSS
    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-size: cover;
            background-position: center;
        }
  
        .container {
            width: 300px;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
  
        .login-form {
            display: flex;
            flex-direction: column;
        }
  
        .login-form h2 {
            text-align: center;
            margin-bottom: 20px;
        }
  
        .login-form input {
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 16px;
        }
  
        .login-form button {
            padding: 10px;
            margin-top: 10px;
            border: none;
            border-radius: 5px;
            background-color:#FF0000;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }
  
        .login-form button:hover {
            background-color: #000000;
        }
    `;
    body.appendChild(style);
  });