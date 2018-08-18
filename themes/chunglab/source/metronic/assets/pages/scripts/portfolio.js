var Portfolio = function () {
  return {
    //main function to initiate the module
    init: function () {
     if (location.hash) {

    var projectName = location.hash;
    var categoryName = location.hash;
    var projectLink = $("a[href=" + projectName + "]");
    var categoryLink = $(".filter").filter(function() { return $(this).data("filter") == categoryName.substr(1); });
    if(categoryLink.length > 0){
      $('.mix-grid').mixitup();
      categoryLink.click();
    } else if(projectLink.length > 0){
      showProject(projectLink.parent().parent().parent());
	} else{
      $('.mix-grid').mixitup();
	}
      } else {
    $('.mix-grid').mixitup();
      }

      doCommon();

      function doCommon(){
        $('.mix-preview, .mix-link').click(function(){
          showProject($(this).parent().parent().parent());
        });

        $(".mix-filter, .back").click(function(){

          $(".mix_all").removeClass("col-xs-12");
          $(".mix_all").addClass("col-sm-6");
          $(".mix_all").addClass("col-md-4");

          $(".mix-info").hide();
          $(".mix-details").show();
          $(".mix-grid").children().show();
           location.hash = "";
        });
      }

      function showProject(root){
	  $(".mix-grid").children().hide();
	  root.show();
	  root.removeClass("col-md-4");
	  root.removeClass("col-sm-6");
	  root.addClass("col-xs-12");
	  root.find(".mix-details").hide();
	  root.find(".mix-info").show();
      }

      function hideProject(root){

      }

      function showCategory(root){
        root.trigger("click");
      }
    }
  };

}();
