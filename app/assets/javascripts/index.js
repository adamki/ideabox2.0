String.prototype.trunc =
function( n, useWordBoundary ){
   var isTooLong = this.length > n
   var s_ = isTooLong ? this.substr(0, n-1) : this;
   s_ = (useWordBoundary && isTooLong) ? s_.substr(0,s_.lastIndexOf(' ')) : s_;
   return isTooLong ? s_ + '...' : s_;
};

function fetchAllIdeas(){
  $.ajax({
    type: "GET",
    url: 'api/v1/ideas',
    success: function(ideas){
      $.each(ideas, function(index, idea){
        var html = buildHtml(idea)
        renderIdea(html)
        editIdeaListener();
        qualityListener();
      })
    }, 
    error: function(xhr){
      console.log(xhr.reponseText);
    }
  })
}

function renderIdea(html){
  $("#recent-ideas").prepend(html);
}

function buildHtml(idea){
  return "<div class='idea' data-id='" + idea.id
          + "'data-quality='" + idea.quality
          + "'><div class='content'><a id='ideaTitle' class='header-description' contenteditable='true'>"
          + idea.title
          + "</a>"
          + "<div id='ideaBody' contentEditable='true' class='body-description'>"
          + idea.body.trunc(100, true)
          + "</div>"
          + "<div class='quality-description'>"
          + idea.quality 
          + "</div>"
          + "</div>"
          + "<i id='raise-quality' class='thumbs up icon'></i>"
          + "<i id='lower-quality' class='thumbs down icon'></i>"
          + "<button id='delete-idea'>Delete</button>"
          + "<button id='edit-idea'>Edit</button>"

}
