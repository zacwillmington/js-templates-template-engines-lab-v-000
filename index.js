

function createPost() {
    let author = document.getElementById('author').value;
    let post = document.getElementById('post').value;
    let title = document.getElementById('title').value;


    let pageTemplate = document.getElementById("page-template").innerHTML;
    let postTemplate = document.getElementById("post-template").innerHTML;
    let commentTemplate = document.getElementById("comment-template").innerHTML;

    let templateFn = _.template(postTemplate);

    let templateHTML = templateFn({'author': author, 'post': post, 'title': title});


    pageTemplate + templateHTML;
}

function postComment() {
    let commenterName = document.getElementById('commenterName').value;
    let  comment = document.getElementById('comment').value;

    let commentTemplate = document.getElementById('comment-template').innerHTML;

    let templateFn = _.template(commentTemplate);

    let commentsDiv = document.getElementById('comments');

    let templateHTML = templateFn({'comment': comment, 'commenterName': commenterName});

    commentsDiv.innerHTML + templateHTML;
}
