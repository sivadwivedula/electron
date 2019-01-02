// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {ipcRenderer} = require('electron')

// Synchronous message emmiter and handler
function login(){
    ipcRenderer.sendSync('login-window', 'login.html')

}
function signup(){
    ipcRenderer.sendSync('signup-window', 'signup.html')
}

document.getElementById("login").onclick=login
document.getElementById("signup").onclick=signup
