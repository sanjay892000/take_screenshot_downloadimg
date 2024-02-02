$('#screenshot').click(function() {
    /* const takescreenshot = document.body; */
    const takescreenshot = document.getElementById('capture');
    html2canvas(takescreenshot).then(canvas => {
        /* document.body.appendChild(canvas);  
        dataURL = canvas.toDataURL();  
        pushScreenshotToServer(dataURL);  */
        console.log(canvas)
        downloadImageClick(canvas.toDataURL(), 'screenshot_img.png');
    });  
});



function downloadImageClick(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download !== 'string') {
      window.open(uri);
    } else {
      link.href = uri;
      link.download = filename;
      accountForFirefox(clickLink, link);
    }
  }
  
  function clickLink(link) {
    link.click();
  }
  
  function accountForFirefox(click) { // wrapper function
    let link = arguments[1];
    document.body.appendChild(link);
    click(link);
    document.body.removeChild(link);
  }