const { app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

require('electron-context-menu')()

let mainWindow
