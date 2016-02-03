function editIdeaListener(){
  editTitle();
}

function editTitle(){
  $('#recent-ideas').delegate('#idea', 'keydown', function(event){
    if(event.which == 13 || event.keyCode == 13){
      var $title = event.currentTarget.textContent
      var $body  = $(this).siblings('.body.description')[0].innerHTML
      var $id    = $(this).closest('.idea').attr('data-id')
      var params = {
        idea: {
          title: $title,
          body: $body
        }
      }

    event.preventDefault();
      $.ajax({
        type: 'PUT',
        url: '/api/v1/ideas/' + $id + '.json',
        data: params,
        success: function(idea){
          renderIdea(idea);
        }
      })
    }
  })
}

