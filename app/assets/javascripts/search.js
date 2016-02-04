function searchIdeasListener(){
  $("#search-box").keyup(function(){
    var $searchInput = $('.input input').val().toLowerCase();
    var $ideas        = $("#recent-ideas").children()
    $ideas.hide()

    var visibleIdeas = $ideas.filter(function(){
    var currentIdeas = $(this).find("#ideaTitle").text().toLowerCase()
                       + $(this).find("#ideaBody").text().toLowerCase()
                       + $(this).attr("data-quality")
      return (currentIdeas.includes($searchInput))
    })

    visibleIdeas.show()
  })
}

