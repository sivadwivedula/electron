
const {app, BrowserWindow,Menu, MenuItem} = require('electron')
const {ipcMain} = require('electron')
let mainWindow,loginwindow,signupwindow
ipcMain.on('login-window', (event, arg) => {
  console.log(arg) 
  loginwindow = new BrowserWindow({width: 800, height: 600,webPreferences: {webSecurity: false}})

  loginwindow.loadFile('./src/login.html')


  // Synchronous event emmision
  
})
ipcMain.on('signup-window', (event, arg) => {
  console.log(arg) 
  signupwindow = new BrowserWindow({width: 800, height: 600,webPreferences: {webSecurity: false}})

  signupwindow.loadFile('./src/signup.html')


  // Synchronous event emmision
  
})
function createWindow () {
  
  mainWindow = new BrowserWindow({width: 800, height: 600})

  mainWindow.loadFile('index.html')

  mainWindow.on('closed', function () {

    //mainWindow = null
  })
}


app.on('ready', createWindow)

app.on('window-all-closed', function () {
 
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

