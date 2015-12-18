import app from "app";
import BrowserWindow from "browser-window";
import crashReporter from "crash-reporter";

crashReporter.start();

let mainWindow = null;

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("ready", () => {
    mainWindow = new BrowserWindow({width: 900, height: 650, "min-width": 900});
    mainWindow.loadUrl(`file://${__dirname}/index.html`);

    if (process.env.NODE_ENV !== "production") {
        mainWindow.openDevTools();
    }

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
});
