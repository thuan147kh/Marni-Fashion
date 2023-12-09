<<<<<<< HEAD
=======
<<<<<<< HEAD:public/script.js
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const comment = document.querySelector("#list-comment");
const commentItem = document.querySelectorAll("#list-comment .item");
var translateY = 0;
var count = commentItem.length;

next.addEventListener("click", function (event) {
  event.preventDefault();
=======


>>>>>>> 165e7661f4ddce29fa2780c6566b386d74191124
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length


next.addEventListener('click', function (event) {
  event.preventDefault()
>>>>>>> 9dee4da51dcfbffed3a9ac9068d00577d16fa6f0:javascript/script.js
  if (count == 1) {
    // Xem hết bình luận
    return false;
  }
  translateY += -400;
  comment.style.transform = `translateY(${translateY}px)`;
  count--;
});

prev.addEventListener("click", function (event) {
  event.preventDefault();
  if (count == 3) {
    // Xem hết bình luận
    return false;
  }
<<<<<<< HEAD:public/script.js
  translateY += 400;
  comment.style.transform = `translateY(${translateY}px)`;
  count++;
});
=======
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})





>>>>>>> 9dee4da51dcfbffed3a9ac9068d00577d16fa6f0:javascript/script.js
