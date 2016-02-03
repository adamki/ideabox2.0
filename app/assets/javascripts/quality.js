var raiseQualities = {
  genius: "genius",
  plausible: "genius",
  swill: "plausible"
}

var lowerQualities = {
  genius: "plausible",
  plausible: "swill",
  swill: "swill"
}

function qualityListener(){
  lowerIdeaQuality();
  raiseIdeaQuality();
}

function raiseIdeaQuality(){
  $("i#raise-quality").on('click', function(event){
    var $idea      = $(this).closest('.idea');
    var $quality   = $idea.attr('data-quality');
    var $id        = $idea.attr('data-id');
    
    var params = {
      idea: {
        quality: raiseQualities[$quality]
      } 
    }

    $.ajax({
      type: 'PUT',
      url: '/api/v1/ideas/' + $id,
      data: params,
      success: function(idea){
        updateQuality($idea, idea.quality);
      },
      error: function(xhr){
        console.log(xhr.responseText);
      }
    })
  })
}

function lowerIdeaQuality(){
  $("i#lower-quality").on('click', function(event){
    var $idea      = $(this).closest('.idea');
    var $quality   = $idea.attr('data-quality');
    var $id        = $idea.attr('data-id');
    
    var params = {
      idea: {
        quality: lowerQualities[$quality]
      } 
    }

    $.ajax({
      type: 'PUT',
      url: '/api/v1/ideas/' + $id,
      data: params,
      success: function(idea){
        updateQuality($idea, idea.quality);
      },
      error: function(xhr){
        console.log(xhr.responseText);
      }
    })
  })
}

function updateQuality(idea, quality){
  $(idea).find('.quality-description').html(quality)
  $(idea).attr('data-quality', quality)
}
