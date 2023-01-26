const { autoUpdater } = require("electron-updater");

autoUpdater.on("update-available", () => {
  console.log("update-available");
});

autoUpdater.on("update-downloaded", () => {
  console.log("update-downloaded");
});

exports.checkForAutoUpdates = function (url) {
  autoUpdater.setFeedURL(url);
  autoUpdater.checkForUpdatesAndNotify();
};
