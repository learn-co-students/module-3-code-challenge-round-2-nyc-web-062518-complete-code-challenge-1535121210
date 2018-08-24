document.addEventListener('DOMContentLoaded', function() {

  const imageId = 2 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imageCard = document.getElementById("image_card")
  const image = document.getElementById("image")
  const name = document.getElementById("name")
  const likes = document.getElementById("likes")
  const likeButton = document.getElementById("like_button")
  let likesCounter = parseInt(likes.innerText)
  const commentForm = document.getElementById("comment_form")
  const commentInput = document.getElementById("comment_input")
  const comments = document.getElementById("comments")

  fetch(imageURL).then(res => res.json()).then(data => displayImageAndLikes(data))

  function displayImageAndLikes(data) {
    image.src = data.url
    name.innerText = data.name
    likes.innerText = data.like_count
  }

  likeButton.addEventListener("click", event => incrementLikes(event))

  function incrementLikes(event) {
    likesCounter += 1
    likes.innerText = likesCounter
    const post = {image_id: 2}
    const postConfig = {
      method: "POST",
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(post)
    }
    fetch(likeURL, postConfig)
  }

   commentForm.addEventListener("submit", event => createComments(event))

   function createComments(event) {
     event.preventDefault()
     if (commentInput.value.length > 0) {
       let li = document.createElement("li")
       li.innerText = commentInput.value
       comments.appendChild(li)
       const post = {image_id: 2, content: commentInput.value}
       const postConfig = {
         method: "POST",
         headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
         body: JSON.stringify(post)
       }
       fetch(commentsURL, postConfig)
       commentInput.value = ""
     }
   }

})
