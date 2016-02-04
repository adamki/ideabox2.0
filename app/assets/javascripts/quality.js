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

var editQuality = function(action){
  $("i#" + action + "-quality").on('click', function(event){
    var $idea      = $(this).closest('.idea');
    var $quality   = $idea.attr('data-quality');
    var $id        = $idea.attr('data-id');
    var params = {
      idea: {
        quality: eval(action + 'Qualities[$quality]')
      } 
    }
    sendAjax(params, $id, $idea)
  })
}

function qualityListener(){
  editQuality("raise");
  editQuality("lower");
}

function updateQuality(idea, $idea){
  $idea.find('.quality-description').html(idea.quality)
  $idea.attr('data-quality', idea.quality)
}
