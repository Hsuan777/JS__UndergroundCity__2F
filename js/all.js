
// 每分每秒各轉 6度
// 每一小時轉 30度
// 每 60分鐘，時針轉 30/60  = 0.5度
// 每秒鐘，時針轉 30/360 = 0.00833333度
// 每 60秒鐘，分針轉 6度
// 每秒鐘，分針轉 6/60 0.1度

function clock() {
    // 取得使用者本地時間;
    // let currentTime__origin = Date();
    let currentTime = new Date();
    let currentTime__second = currentTime.getSeconds();
    let currentTime__minute = currentTime.getMinutes();
    let currentTime__hour = currentTime.getHours();

    let angel__second = currentTime__second * 6;
    let angel__minute = (currentTime__minute * 6) + (currentTime__second * 0.1);
    let angel__hour   = (currentTime__hour * 30) + (currentTime__minute * 0.5) + (currentTime__second * 0.00833333);

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
// 每 250毫秒跑一次
// setInterval(clock,0);


// requestAnimationFrame 
// 根據使用者瀏覽器刷新頻率
requestAnimationFrame(clock);