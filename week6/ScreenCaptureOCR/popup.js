function onCaptureBtnClick(){
  chrome.tabs.captureVisibleTab(null, {format:"png"}, function(image){
    fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: image })
    })
    .then(res => res.json())
    .then(data => {
      document.getElementById("ocr-result").innerHTML = data.result;
    })
    .catch(err => console.log("error", err));
  });
}
document.getElementById("capture").addEventListener('click', onCaptureBtnClick);
// "http://192.168.0.12:5000/upload"