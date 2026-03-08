
(function(){

console.log("UptoLink Bypass running...");

const host = location.hostname;

function autoClick(){

    const btn = document.querySelector("button, a[href]");
    if(btn){
        btn.click();
        console.log("Clicked button");
    }

}

if(host.includes("open82.net")){
    autoClick();
}

if(host.includes("scutt.uk.com")){
    autoClick();
}

})();
