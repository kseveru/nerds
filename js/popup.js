var writeUsLink = document.querySelector(".our-address__link");
var writeUsOpen = document.querySelector(".write-us");

if (writeUsLink && writeUsOpen) {
  var writeUsClose = writeUsOpen.querySelector(".popup__close");

  var writeUsForm = writeUsOpen.querySelector("form");
  var userName = writeUsOpen.querySelector("#write-us-name");
  var userEmail = writeUsOpen.querySelector("#write-us-email");
  var userText = writeUsOpen.querySelector("#write-us-text");
  var storageName = localStorage.getItem("userName");
  var storageEmail = localStorage.getItem("userEmail");

  writeUsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsOpen.classList.add("popup--show");
    if (storageName) {
      userName.value = storageName;
      if (storageEmail) {
        userEmail.value = storageEmail;
        userText.focus();
      }
      else {
        userEmail.focus();
      }
    }
    else {
      userName.focus();
    }
  });

  writeUsForm.addEventListener("submit", function (evt) {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userEmail", userEmail.value);
  });

  writeUsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsOpen.classList.remove("popup--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (writeUsOpen.classList.contains("popup--show")) {
        writeUsOpen.classList.remove("popup--show");
      }
    }
  });
}
