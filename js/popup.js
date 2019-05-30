$(function() {
    console.log("on");
    
    chrome.storage.sync.get(['toggle'], function(items){
      var toggler = items.toggle;
       console.log(toggler + " is the current state");
       if( toggler == false){
            var x = document.querySelector('#soundonoff');
            var y = document.querySelector('#btnonoff');
            x.src = "/images/Off.svg";
            y.src = "/images/buttonOff.svg";
        }
        if(toggler === undefined || toggler === null) {
            console.log("toggler was null, now set to true");
            toggler = true;
            chrome.storage.sync.set({ 'toggle' : toggler});
        }
    });
    //handler for on off
    $("#divbtnonoff").click( function(){
        chrome.storage.sync.get(['toggle'], function(items){
            var toggler = items.toggle;
             console.log(toggler + " is the current state");
             var x = document.querySelector('#soundonoff');
             var y = document.querySelector('#btnonoff');
             if (toggler === true){
                 toggler = !toggler;
                 x.src = "/images/Off.svg";
                 y.src = "/images/buttonOff.svg";
             } else {
                 toggler = !toggler;
                 x.src = "/images/On.svg";
                 y.src = "/images/buttonOn.svg";   
             }
             console.log("onoff clicked toggler state  now = " + toggler );
             chrome.storage.sync.set({ 'toggle' : toggler});
        });
    });
});
// function updateImages (){
    //     var x = document.querySelector('#soundonoff');
    //             var y = document.querySelector('#btnonoff');
    //             if(x.src == "chrome-extension://mohgfbahkffhpboeggopmacnkjfklgcm/images/On.svg"){
    //                 x.src = "/images/Off.svg";
    //                 y.src = "/images/buttonOff.svg";
    //                 //chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //                     //chrome.tabs.sendMessage(tabs[0].id, {action: "off"});
    //                 //});
    //             }else{
    //                 x.src = "/images/On.svg";
    //                 y.src = "/images/buttonOn.svg";
    //                 //chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //                     //chrome.tabs.sendMessage(tabs[0].id, {action: "on"});
    //                 //});
    //             }
    // }
// function setIcon(value){
//     var path = (value)?"icon-on.png":"icon-off.png";
//     chrome.browserAction.setIcon({path: path});
//   }
// chrome.browserAction.onClicked.addListener( function(tab) {
//     getToggle(function(toggle){
//       toggle = !toggle;
//       setToggle(toggle, function(){
//       });
//     });
//   });