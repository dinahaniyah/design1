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
