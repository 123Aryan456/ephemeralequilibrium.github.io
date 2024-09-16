//locomotive js - smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//gsap to animate
gsap.from(".nlink",{
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0,

})
Shery.textAnimate("#headings h1", {
    style: 2,
    y: 10,
    delay: 0.3,
    duration: 3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,

  });

gsap.from(".anim2",{
    y: 50,
    stagger: .3,
    opacity: 0,
    ease: Expo,
    duration: 0.4,
})  


var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic {ACCESS_TOKEN}");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "start_node_id": "axi1-start",
  "end_node_id": "AQ6K-end",
  "result_node_id": "AQ6K-end",
  "node_settings": {
    "axi1-start": {
      "data": {
        "1": {STRING}
      }
    }
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.scade.pro/api/v1/scade/flow/37375/execute", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//Shery.imageEffect("#imgntexts img", {
    //style: 4,
    //debug: true,
//})

//shery js to animate images
