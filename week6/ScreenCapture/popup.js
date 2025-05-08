function onCaptureBtnClick() {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, function(image) {
      const link = document.createElement("a");
      link.href = image;
      link.download = "screenshot.png";
      link.click();
    });
  }
  
  document.getElementById("capture").addEventListener('click', onCaptureBtnClick);