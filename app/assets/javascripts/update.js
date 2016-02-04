function editIdeaListener(){
  editTitle();
  editBody();
}

var sendAjax = function(params, $id, $idea){
  $.ajax({
    type: 'PUT',
    url: '/api/v1/ideas/' + $id + '.json',
    data: params,
    success: function(idea){
      renderIdea(idea);
      updateQuality(idea, $idea)
    },
    error: function(xhr){
      console.log(xhr.responseText); 
    }
  })
}

function editTitle(){
  $('#recent-ideas').delegate('#ideaTitle', 'keydown', function(event){
    if(event.which == 13 || event.keyCode == 13){
      var $title = event.currentTarget.textContent
      var $body  = $(this).siblings('.body-description')[0].innerHTML
      var $id    = $(this).closest('.idea').attr('data-id')
      var params = {
        idea: {
          title: $title,
        }
      }
      event.preventDefault();
      this.blur();
      sendAjax(params, $id);
    }
  })
}

function editBody(){
  $('#recent-ideas').delegate('#ideaBody', 'keydown', function(event){
    if(event.which == 13 || event.keyCode == 13){
      var $title = event.currentTarget.textContent
      var $body  = this.textContent;
      var $id    = $(this).closest('.idea').attr('data-id')
      var params = {
        idea: {
          body: $body
        }
      }
      event.preventDefault();
      this.blur();
      sendAjax(params, $id)
    }
  })
}

