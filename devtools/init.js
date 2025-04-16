document.addEventListener("DOMContentLoaded", function(e){
    chrome.devtools.panels.create("Devtools Test",
        "",
        "/devtools/devtools.html",
        function(panel){}
    );
});