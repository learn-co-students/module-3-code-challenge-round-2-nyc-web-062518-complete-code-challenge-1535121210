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

  const commentForm = document.getElementById("comment_form")

  const submitButton = document.getElementById("submit-button")

  const commentInput = document.getElementById("comment_input")

fetch(imageURL).then( res => res.json() ).then( data => {
  console.log("this is data:", data)

  likeButton.addEventListener('click', e => addLike() )

  imageElement.src = data.url

  imageName.innerText = data.name

  likeSpan.innerText = data.like_count

  function addLike(){
    data.like_count += 1
    likeSpan.innerText = data.like_count
    likePostFetch()
  }

  data.comments.forEach( comment => {
    ulID.innerHTML += `<li> ${comment.content}`
  })

  commentForm.addEventListener('click', e=> {
    if (e.target === submitButton){
      e.preventDefault()

      let inputVal = commentInput.value


      const newLI = document.createElement("li")
      newLI.innerText = inputVal
      ulID.appendChild(newLI)
      commentInput.value = ' '
      commentPostFetch(inputVal)
    }
  })


})


function commentPostFetch(inputVal){

  const objData = {
    method: "POST",
    headers: {'Accept': 'application/json',
    'Content-Type': 'application/json'},
    body: JSON.stringify({
      content: inputVal,
      image_id: 3
    }),
  }

  fetch(commentsURL, objData)

}






function likePostFetch(){
  const objData = {
    method: "POST",
    headers: {'Accept': 'application/json',
    'Content-Type': 'application/json'},
    body: JSON.stringify({id_number: 3})
    }

  fetch(likeURL, objData)
    
}


})
