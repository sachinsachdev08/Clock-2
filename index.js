setInterval(showTime, 1000);
        am_pm = "AM";
        const hour_ = document.querySelector('.hour');
        const min_ = document.querySelector('.minutes')
        const sec_ = document.querySelector('.seconds')
        const am_pm_1 = document.querySelector('.am_pm')


        function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            
  
            if (hour > 12) {
                hour -= 12;
                am_pm = "PM";
            }
            if (hour == 0) {
                hr = 12;
                am_pm = "AM";
            }
  
            hour_.innerHTML = hour < 10 ? "0" + hour : hour;
            min_.innerHTML = min < 10 ? "0" + min : min;
            sec_.innerHTML = sec < 10 ? "0" + sec : sec;
            am_pm_1.innerHTML = am_pm;


            var status1 = document.querySelector('.item5');
var sentence1 = document.querySelector('.sentence');

    if(am_pm === "AM" && hour >=4 && hour < 12){
        status1.innerHTML = "Good Morning";
        document.getElementById('home').src = "3.png";
    }
    else if(am_pm === "PM" && hour >=1 && hour < 5){
        status1.innerHTML = "Good Afternoon";
        
    }
    else if(am_pm === "PM" && hour >=5 && hour < 8){
        status1.innerHTML = "Good Evening";
    }
    else{
        status1.innerHTML = "Good Night";
        document.getElementById('home').src = "2.png";

}
  
          

            
        }
    showTime();


