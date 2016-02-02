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
  return "<div class='idea' data-id='"
          + idea.id
          + "'><div class='content'><a class='header-description' contenteditable='true'>"
          + idea.title
          + "</a>"
          + "<div contentEditable='true' class='body description'>"
          + idea.body.trunc(100, true)
          + "</div>"
          + "<div class='description'>"
          + idea.quality 
          + "</div>"
          + "</div>"
          + "<button id='delete-idea'>Delete</button>"
          + "<button id='edit-idea'>Edit</button>"
}
