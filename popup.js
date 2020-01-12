chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

    chrome.tabs.executeScript(tabs[0].id, { file: "content.js" });
});



chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { type: "getText" }, function (response) {
        
        var data= response;
        for(var j=0;j<data.length;j++){
        
        
        var a = document.getElementById('education').innerHTML
        document.getElementById('education').innerHTML= a +"*" + data[j] + "<br/>";
    
    
    }
    });
});