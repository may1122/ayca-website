const form = document.getElementById("demoForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(event){
  event.preventDefault();

  message.textContent = "Demo talebiniz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.";

  form.reset();
});
