function addIdeaListener(){
  $("#add-idea").on('click', function(){
    var title = $(".field input").val();
    var body  = $(".field textarea").val();
    var params = {
      idea: {
        title: title,
        body: body
      }
    };
    addIdea(params);
  })
}

function addIdea(params){
  $.ajax({
    type: 'POST',
    url: 'api/v1/ideas',
    data: params,
    success: function(idea) {
      var html = buildHtml(idea)
      renderIdea(html);
      clearForm();
      qualityListener();
    },
    error: function(xhr){
      console.log(xhr.responseText);
      clearForm();
    }
  })
}

function clearForm(){
  $(".field input").val("");
  $(".field textarea").val("");
}
