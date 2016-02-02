function fetchAllIdeas(){
  $.ajax({
    type: "GET",
    url: 'api/v1/ideas',
    success: function(ideas){
      $.each(ideas, function(index, idea){
        renderIdea(idea)
      })
    }, 
    error: function(xhr){
      console.log(xhr.reponseText);
    }
  })
}

function renderIdea(idea){
  $("#recent-ideas").append(
    "<div class='item' data-id='"
    + idea.id
    + "'><div class='content><a class='header'>"
    + idea.title
    + "</a>"
    + "<div class='description'>"
    + idea.body
    + "</div><div class='description'>"
    + idea.quality
    + "<button id='delete-post' name='button-fetch' class='btn btn-default btn-xs'>Delete</button>"
    + "</div>"
    + "</div>"
  )
}