/* ===== WRITE US ===== */

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
    if (!userName.value || !userEmail.value || !userText.value) {
      evt.preventDefault();
      writeUsOpen.classList.remove("popup--error");
      writeUsOpen.offsetWidth = writeUsOpen.offsetWidth;
      writeUsOpen.classList.add("popup--error");
    }
    else {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  });

  writeUsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsOpen.classList.remove("popup--show");
    writeUsOpen.classList.remove("popup--error");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (writeUsOpen.classList.contains("popup--show")) {
        writeUsOpen.classList.remove("popup--show");
        writeUsOpen.classList.remove("popup--error");
      }
    }
  });
}

/* ===== MAP ===== */

var mapLink = document.querySelector(".our-contacts__map-link");
var mapOpen = document.querySelector(".map-big");

if (mapLink && mapOpen) {
  var mapClose = mapOpen.querySelector(".popup__close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapOpen.classList.add("popup--show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapOpen.classList.remove("popup--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapOpen.classList.contains("popup--show")) {
        mapOpen.classList.remove("popup--show");
      }
    }
  });
}

/* ===== MESSAGE ===== */

var messageLinks = document.querySelectorAll(".product__btn--add-cart"), i;
var messageOpen = document.querySelector(".message");

if (messageLinks && messageOpen) {
  var messageContinue = messageOpen.querySelector(".message__btn--close");
  var messageClose = messageOpen.querySelector(".popup__close");

  for (i = 0; i < messageLinks.length; i++) {
      messageLinks[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        messageOpen.classList.add("popup--show");
      });
  }

  messageContinue.addEventListener("click", function (evt) {
    evt.preventDefault();
    messageOpen.classList.remove("popup--show");
  });

  messageClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    messageOpen.classList.remove("popup--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (messageOpen.classList.contains("popup--show")) {
        messageOpen.classList.remove("popup--show");
      }
    }
  });
}
