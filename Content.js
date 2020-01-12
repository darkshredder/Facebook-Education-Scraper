userinfo = document.getElementsByClassName("textContent")
text=[];
console.log('hi')
for(var i=0;i<userinfo.length;i++){

    if(userinfo[i].textContent[0]=="W" && userinfo[i].textContent[1]=="e"){
        console.log(userinfo[i].textContent)
        text.push(userinfo[i].textContent);
    }
    if (userinfo[i].textContent[0] == "S" && userinfo[i].textContent[1] == "t") {
        console.log(userinfo[i].textContent)
        text.push(userinfo[i].textContent);
    }

console.log(text)
}
chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        switch (message.type) {
            case "getText":
                sendResponse(text);
                break;
        }
    }
);