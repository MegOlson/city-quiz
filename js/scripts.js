$(document).ready(function() {
  $("form").submit(function(event) {
      var question1 = $("input:radio[name=activity]:checked").val();
      var question2 = $("input:radio[name=weather]:checked").val();
      var question3 = $("input:radio[name=food]:checked").val();

      event.preventDefault();

      if (!question1, !question2, !question3) {
        alert("Please fill out all questions");
      } else {
        if (question1 === "outdoor activities" && question2 === "warm and sunny" && question3 === "seafood") {
          $(".croatia").show();
          $("form").hide();
        } else if (question === "sightsee")
      }
  });
});
