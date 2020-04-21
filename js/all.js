
function clock() {
    // 取得使用者本地時間;
    // let currentTime__origin = Date();
    let currentTime = new Date();
    let currentTime__second = currentTime.getSeconds();
    let currentTime__minute = currentTime.getMinutes();
    let currentTime__hour = currentTime.getHours();

    let angel__second = currentTime__second * 6;
    let angel__minute = (currentTime__minute * 6) + (currentTime__second * 6/60);
    let angel__hour   = (currentTime__hour * 30) + (currentTime__minute * 0.5) ;

    let clockSecond = document.querySelector('.clock__second');
    let clockMinute = document.querySelector('.clock__minute');
    let clockHour   = document.querySelector('.clock__hour');

    clockSecond.setAttribute(`style`, `transform: rotate(${180 + angel__second}deg)`);
    clockMinute.setAttribute(`style`, `transform: rotate(${angel__minute}deg)`);
    clockHour.setAttribute(`style`, `transform: rotate(${-90 + angel__hour}deg)`);

    // 讓 requestAnimationFrame呼叫自己，也就是重複執行
    requestAnimationFrame(clock);
    console.log(angel__second);
}

// setInterval
// setInterval(clock,1000);


// requestAnimationFrame 
// 根據使用者瀏覽器刷新頻率去更新畫面
requestAnimationFrame(clock);