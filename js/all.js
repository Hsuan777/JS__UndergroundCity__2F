



setInterval(function () {
    // 取得本地時間;
    // let currentTime__origin = Date();
    let currentTime = new Date();
    let currentTime__hour = currentTime.getHours();
    let currentTime__minute = currentTime.getMinutes();
    let currentTime__second = currentTime.getSeconds();
    // TODO:每分每秒轉 6度，時針轉 0.5度
    // 00:00:01 每一分鐘時針轉幾度 ?
    let angel__second = currentTime__second * 6;
    let angel__minute = currentTime__minute * 6;
    // 每一小時轉 30度
    let angel__hour = currentTime__hour * 30;

    let clockSecond = document.querySelector('.clock__second');
    let clockMinute = document.querySelector('.clock__minute');
    let clockHour = document.querySelector('.clock__hour');

    clockSecond.setAttribute(`style`, `transform: rotate(${180 + angel__second}deg)`);
    clockMinute.setAttribute(`style`, `transform: rotate(${angel__minute}deg)`);
    clockHour.setAttribute(`style`, `transform: rotate(${-90 + angel__hour}deg)`);

}, 1000)

// 試著使用 requestAnimationFrame 