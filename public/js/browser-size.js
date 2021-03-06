function updateSizeValues() {
    document.querySelector("#rowClientWidth > span:nth-child(2)").innerHTML = document.documentElement.clientWidth;
    document.querySelector("#rowClientHeight > span:nth-child(2)").innerHTML = document.documentElement.clientHeight;
    document.querySelector("#rowBodyClientWidth > span:nth-child(2)").innerHTML = document.body.clientWidth;
    document.querySelector("#rowBodyClientHeight > span:nth-child(2)").innerHTML = document.body.clientHeight;
    document.querySelector("#rowInnerWidth > span:nth-child(2)").innerHTML = window.innerWidth;
    document.querySelector("#rowInnerHeight > span:nth-child(2)").innerHTML = window.innerHeight;

    const viewport_test = document.querySelector("#viewport_test");
    document.querySelector("#row100VWClientWidth > span:nth-child(2)").innerHTML = viewport_test.clientWidth;
    document.querySelector("#row100VHClientHeight > span:nth-child(2)").innerHTML = viewport_test.clientHeight; 
    document.querySelector("#row100VWOffsetWidth > span:nth-child(2)").innerHTML = viewport_test.offsetWidth;
    document.querySelector("#row100VHOffsetHeight > span:nth-child(2)").innerHTML = viewport_test.offsetHeight;
}

function showFullViewport() {
    const viewport_test = document.querySelector("#viewport_test");
    const displayVal = getComputedStyle(viewport_test).display;
    const viewportButton = document.querySelector("#showFullViewport_Button");
    if (displayVal == "block") {
        viewport_test.style.display = "none";
        viewportButton.innerHTML = "Show Full Viewport"
    }
    else {
        viewport_test.style.display = "block";
        viewportButton.innerHTML = "Hide Full Viewport"
    }
}