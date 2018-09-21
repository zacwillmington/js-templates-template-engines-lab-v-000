

function createPost() {
    let author = document.getElementById('author').value;
    let post = document.getElementById('post').value;
    let title = document.getElementById('title').value;


    let pageTemplate = document.getElementById("page-template").innerHTML;
    let postTemplate = document.getElementById("post-template").innerHTML;
    let commentTemplate = document.getElementById("comment-template").innerHTML;

    let postTemplateFn = _.template(postTemplate);
    let pageTemplateFn = _.template(pageTemplate);
    let commentTemplateFn = _.template(commentTemplate);

    pageTemplate + templateHTML;
}

function postComment() {

}
