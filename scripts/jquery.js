$(function() {
  $("#submit").click(function() {
    try {
      /*var results = */fetch();
      // for (var index = 0; index < results.length; index++) {
      //   appendResult(results[index][0]);
      // }
    } catch(errorMsg) {
      alert(errorMsg);
    }
  });
  $(".about").click(function() {
    $(".about_popup").show("slow");
    handler3()
  });
  $("#about_x").click(function() {
    $(".about_popup").hide("slow");
  });

  var handler1 = {
    mouseenter: function() {
      $(".center_search_icon").animate({
        right: "+=70px"
      }, "fast");
      $(".inputs_view").animate({
        right: "+=70px"
      }, "fast");
    },
    mouseleave: function() {
      $(".center_search_icon").animate({
        right: "-=70px"
      }, "fast");
      $(".inputs_view").animate({
        right: "-=70px"
      }, "fast");
    },
    click: function() {
      $(".about_popup").hide("normal");

      $("#search_icon").off();
      $("#inputs_tab").off();
      $(".center_search_icon").css("right", "-95px");
      $(".inputs_view").css("right", "-1580px");

      $(".center_search_icon").animate({
        right: "605px",
        top: "295px"
      }, {
        duration: 1000
      });
      $("#search_icon").animate({
        width: "300px"
      }, {
        duration: 1000
      });
      $(".inputs_view").animate({
        right: "-1070px"
      }, {
        duration: 980
      });
      $("#inputs_tab").animate({
        opacity: 0.75
      }, {
        duration: 1000
      });
      $(".center_title").animate({
        left: "120px",
        top: "210px"
      }, {
        duration: 1000
      });
    }
  };

  var handler2 = {
    mouseenter: function() {
      $(".center_search_icon").animate({
        right: "-95px"
      }, "fast");
      $(".inputs_view").animate({
        right: "-1580px"
      }, "fast");
    },
    mouseleave: function() {
      $(".center_search_icon").animate({
        right: "-165px"
      }, "fast");
      $(".inputs_view").animate({
        right: "-1650px"
      }, "fast");
    },
    click: function() {
      $(".about_popup").hide("normal");

      $("#search_icon").off();
      $("#inputs_tab").off();
      $(".center_search_icon").css("right", "-95px");
      $(".inputs_view").css("right", "-1580px");

      $(".center_search_icon").animate({
        right: "605px",
        top: "295px"
      }, {
        duration: 1000
      });
      $("#search_icon").animate({
        width: "300px"
      }, {
        duration: 1000
      });
      $(".inputs_view").animate({
        right: "-1070px"
      }, {
        duration: 980
      });
      $(this).animate({
        opacity: 0.93
      }, {
        duration: 1000
      });
      $(".center_title").animate({
        left: "120px",
        top: "210px"
      }, {
        duration: 1000
      });
    }
  };

  var handler3 = function() {
    $(".center_search_icon").animate({
      right: "-165px",
      top: "225px"
    }, {
      duration: 1000
    });
    $("#search_icon").animate({
      width: "450px"
    }, {
      duration: 1000
    });
    $(".inputs_view").animate({
      right: "-1650px"
    }, {
      duration: 980
    });
    $("#inputs_tab").animate({
      opacity: 1.0
    }, {
      duration: 1000
    });
    $(".center_title").animate({
      left: "220px",
      top: "260px"
    }, {
      duration: 1000,
      complete: function() {
        $("#search_icon").on(handler1);
        $("#inputs_tab").on(handler2);
      }
    });
  }

  $("#search_icon").on(handler1);

  $("#inputs_tab").on(handler2);

  $("#x").click(handler3);
});
