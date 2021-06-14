$(document).ready(function () {
  $("#myModal").modal("show");

  $("#openInvitee").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#header"),
      },
      500
    );

    // SOUND
    const audio = new Audio();
    // "music/backsound.mp3"
    //   "https://freesound.org/data/previews/501/501690_1661766-lq.mp3"
    if (typeof audio.loop == "boolean") {
      audio.loop = true;
    }
    audio.play();
  });

  // PARAM
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const to = urlParams.get("to");
  $("#tamu").append(to);

  //   DATA
  $.getJSON("data/mainData.json", function (data) {
    var groomNick = "";
    var brideNick = "";
    var image_1 = "";

    $.each(data, function (key, value) {
      groomNick += value.nick_groom;
      brideNick += value.nick_bride;
      image_1 += value.image_start;
    });
    $(".groom_name").append(groomNick);
    $(".bride_name").append(brideNick);
    $(".galery_1").attr("src", image_1);
    // $(".content-onload").css("background", "pink !important");

    // $(groomName).name_groom.appendTo;
  });

  // PARTICLE JS
  $(".header").each(function () {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 155,
          density: {
            enable: true,
            value_area: 789.1476416322727,
          },
        },
        color: {
          value: "#fff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.48927153781200905,
          random: false,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 83.91608391608392,
            size: 1,
            duration: 3,
            opacity: 1,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  });

  // GIFT
  // $(".gift-button").on("click", function () {
  //   // var url = $(this).attr("href");
  //   $.ajax({
  //     url: "modal/gift.html",
  //     success: function (result) {
  //       $(".modal-content").html(result);
  //       $("#myGift").modal("show");
  //     },
  //   });
  // });

  // $(".gift-button").on("click", function (e) {
  //   e.preventDefault();
  //   $("#myGift")
  //     .modal("show")
  //     .find(".modal-content")
  //     .load($(this).attr("href"));
  // });

  //======================== FORM LOVE STORY========================================
  // FORM
  const scriptURLGift =
    "https://script.google.com/macros/s/AKfycbx20h5w1pwJu_1yHuPy4aZT4U1aK3SOlojHtdu2ylx6Cbbo8TVXePedTbi8Y1XmfZSU/exec";
  const formGift = document.forms["gift-form"];

  const btnSend = document.querySelector(".btn-send");
  const btnSending = document.querySelector(".btn-sending");
  const alertGift = document.querySelector(".alert-gift");

  formGift.addEventListener("submit", (e) => {
    e.preventDefault();
    // when submit
    btnSending.classList.toggle("d-none");
    btnSend.classList.toggle("d-none");

    fetch(scriptURLGift, { method: "POST", body: new FormData(formGift) })
      .then((response) => {
        btnSending.classList.toggle("d-none");
        btnSend.classList.toggle("d-none");
        alertGift.classList.toggle("d-none");

        formGift.reset();

        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
  });

  // ======================FORM WISHES
  const scriptURLWishes =
    "https://script.google.com/macros/s/AKfycbz5Cnw7FxilrNxInlMwtgZDq-nFqCl5gLGVSIheuWch5zjk5JZJdWmsGIJCvwPsDIUw/exec";
  const formWishes = document.forms["wishes-form"];

  const sendWishes = document.querySelector(".send-wishes");
  const sendingWishes = document.querySelector(".sending-wishes");
  // const alertGift = document.querySelector(".alert-gift");
  formWishes.addEventListener("submit", (e) => {
    e.preventDefault();

    sendingWishes.classList.toggle("d-none");
    sendWishes.classList.toggle("d-none");

    fetch(scriptURLWishes, { method: "POST", body: new FormData(formWishes) })
      .then((response) => {
        sendingWishes.classList.toggle("d-none");
        sendWishes.classList.toggle("d-none");
        // alertGift.classList.toggle("d-none");

        formWishes.reset();
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
  });
});

// COUNTDOWN
function updateTimer() {
  future = Date.parse("sept 2, 2021 11:30:00");
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  document.getElementById("timer").innerHTML =
    "<div>" +
    d +
    "<span>days</span></div>" +
    "<div>" +
    h +
    "<span>hours</span></div>" +
    "<div>" +
    m +
    "<span>minutes</span></div>" +
    "<div>" +
    s +
    "<span>seconds</span></div>";
}
setInterval("updateTimer()", 1000);
