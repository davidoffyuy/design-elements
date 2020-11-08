const loadShadow = () => {
  const lorem_main = document.querySelector("#lorem_main>p");
  const shadow_text = document.getElementById("shadow_text");
  const scroll_val = document.getElementById("scroll_val");
  
  shadow_text.innerHTML = lorem_main.innerHTML.slice(0, 1000);
  
  window.addEventListener("scroll", function() {
    // generate scroll percentage
    const scroll_percentage = Math.round((document.documentElement.scrollTop / (document.body.scrollHeight - window.innerHeight)) * 100);
    scroll_val.innerHTML =  scroll_percentage + "%";
    shadow_text.style.transform = "translateY(" + (-20 - (scroll_percentage / 2)) + "px)";
  });
}

