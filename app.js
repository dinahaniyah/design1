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

    $.each(data, function (key, value) {
      groomNick += value.nick_groom;
      brideNick += value.nick_bride;
    });
    $(".groom_name").append(groomNick);
    $(".bride_name").append(brideNick);

    // $(groomName).name_groom.appendTo;
  });

  // GIFT

  $(".gift-button").on("click", function (e) {
    e.preventDefault();
    $("#myGift")
      .modal("show")
      .find(".modal-content")
      .load($(this).attr("href"));
  });

  // FORM
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
