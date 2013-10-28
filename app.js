;(function($){
  window.timeEntries = [];
  $(function(){
    $("ul.main-nav li a").click(function(){
      $("ul.main-nav li").removeClass("active");
      var $link = $(this);
      $link.parent().addClass("active");
      var sectionId = $link.attr("class");
      $("section.main-section").hide();
      $("section#"+sectionId).show();
      return false;
    });
    window.redrawTimeEntries = function() {
      $(".time-entries").html("");
      for(var idx in window.timeEntries) {
        var timeEntryObj = window.timeEntries[idx];
        var $template = $($('#time-entry-template').html());
        $template.find(".project").html(timeEntryObj.project);
        $template.find('.description').html(timeEntryObj.description);
        $template.find('.time').html(timeEntryObj.minutes + " minutes");
        if(timeEntryObj.billable) {
          $template.addClass("billable");
        }
        else {
          $template.addClass("non-billable");
        }
        $(".time-entries").append($template);
      }

    }
    $("ul.main-nav li a.time").click();
    var createTimeEntry =function() {
      var $form = $("form#timesheet-form")
      var timeEntryObj = {}
      var values = $form.serializeArray();
      for(var idx in values) {
        timeEntryObj[values[idx].name]=values[idx].value;
      }
      window.timeEntries.push(timeEntryObj);
      redrawTimeEntries();
      return false;
    }
    $("form#timesheet-form").submit(createTimeEntry);
    $("form#timesheet-form button").click(createTimeEntry);

  });
})(jQuery);
