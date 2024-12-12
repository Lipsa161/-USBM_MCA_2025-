
function updateClock(){
     

     const now=new Date();

    let hours=now.getHours();
     let minutes=now.getMinutes();
     let seconds=now.getSeconds();

     const currentTime=`${hours}:${minutes}:${seconds}`
     document.getElementById('clock').textContent=currentTime;
}
updateClock()
setInterval(updateClock,1000);