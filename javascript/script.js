

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length


next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})

// login - register
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");

  function showLoginForm() {
      loginForm.style.display = "block";
      registerForm.style.display = "none";
  }

  function showRegisterForm() {
      loginForm.style.display = "none";
      registerForm.style.display = "block";
  }

  // Initial state: show login form
  showLoginForm();

  // Add click event listeners
  loginLink.addEventListener("click", showLoginForm);
  registerLink.addEventListener("click", showRegisterForm);
});
