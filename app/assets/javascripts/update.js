function editIdeaListener(){

  $('#recent-ideas').delegate('.header-description', 'keyup', function(){
    alert("fdsa")
  });
}

function editTitle(){
  $('.header-description').keydown(function(event){
    debugger
    if(event.keyCode == 13){


      //var $title = event.currentTarget.textContent
      //var $idea = $(this).closest('li.collection-item.idea')
      //var $id = $(this).closest('li').attr('data-id')
      //var ideaParams = {
        //idea: {
          //title: $title
        //}
      //}

      $.ajax({
        type: 'PUT',
        url: '/api/v1/ideas/' + $id + '.json',
        data: ideaParams,
        success: function(idea){
          $(event.target).blur();
          updateTitle($idea, idea.title);
        }
      })
    }
  })
}
