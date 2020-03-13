
window.onload=function time(){
    window.setInterval(function(){
    
    let item=document.getElementById('mydiv');
    now = new Date();
    item.innerHTML = (now.toLocaleTimeString());
    }, 10);
}

