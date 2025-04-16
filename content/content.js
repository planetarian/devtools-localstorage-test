document.addEventListener("DOMContentLoaded", function(e){
    localStorage.foo = 'bar';
    document.getElementById("lsValue").textContent = localStorage.foo;
});