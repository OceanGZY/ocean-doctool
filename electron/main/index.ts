/*
 * @Author: OCEAN.GZY
 * @Date: 2023-10-22 10:07:34
 * @LastEditors: OCEAN.GZY
 * @LastEditTime: 2023-10-22 11:07:33
 * @FilePath: /ocean-doctool/electron/main/index.ts
 * @Description: 注释信息
 */
import { app, BrowserWindow } from "electron"
import { join } from "path"

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: join(__dirname, "../preload/index.js"),
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    if (process.env.NODE_ENV === "development") {
        mainWindow.loadURL("http://127.0.0.1:5173")
        mainWindow.webContents.openDevTools()
    } else {
        mainWindow.loadFile(join(__dirname, "../index.html"))
    }
}

app.whenReady().then(() => {
    createWindow()
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})