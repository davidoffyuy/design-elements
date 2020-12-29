function initSizeValues() {
    document.querySelector("#rowClientWidth > span:nth-child(2)").innerHTML = document.documentElement.clientWidth;
    document.querySelector("#rowClientHeight > span:nth-child(2)").innerHTML = document.documentElement.clientHeight;
    document.querySelector("#rowBodyClientWidth > span:nth-child(2)").innerHTML = document.body.clientWidth;
    document.querySelector("#rowBodyClientHeight > span:nth-child(2)").innerHTML = document.body.clientHeight;
    document.querySelector("#rowInnerWidth > span:nth-child(2)").innerHTML = window.innerWidth;
    document.querySelector("#rowInnerHeight > span:nth-child(2)").innerHTML = window.innerHeight;
}