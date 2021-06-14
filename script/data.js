$.getJSON("../script/client/mainData.json", function (data) {
  var groomNick = "";
  var brideNick = "";
  var image_1 = "";

  $.each(data, function (key, value) {
    groomNick += value.nick_groom;
    brideNick += value.nick_bride;
    // image_1 += value.image_start;
  });
  $(".groom_name").append(groomNick);
  $(".bride_name").append(brideNick);
  // $(".content-onload").css("background", "pink !important");

  // $(groomName).name_groom.appendTo;
});
