document.addEventListener('DOMContentLoaded', function() {

  const imageId = 3 //Enter your assigned imageId here

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const likeButton = document.getElementById("like_button")

  const imageElement = document.getElementById("image")

  const imageName = document.getElementById("name")

  const likeSpan = document.getElementById("likes")

  const ulID = document.getElementById("comments")


fetch(imageURL).then( res => res.json() ).then( data => {
  console.log("this is data:", data)

  likeButton.addEventListener('click', e => addLike(e) )


  imageElement.src = data.url

  imageName.innerText = data.name

  likeSpan.innerText = data.like_count

  function addLike(e){
    data.like_count += 1
    likeSpan.innerText = data.like_count
  }

  data.comments.forEach( comment => {
    ulID.innerHTML += `<li> ${comment.content}`
  })


})


})
