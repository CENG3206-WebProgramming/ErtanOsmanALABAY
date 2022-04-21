"use strict";
(function () {
  window.addEventListener('load', () => {
    init()
  });
  function init() {
    id("answer-btn").addEventListener("click", showAnswer);
    id("start-btn").addEventListener("click", fillJar);
  }
  
  function showAnswer() {
    let length = qsa(".green").length
    let pElement = document.getElementById("game-play").lastElementChild
    pElement.classList.remove("hidden")
    let numberOfGreenSkittleText = document.getElementById("count")
    numberOfGreenSkittleText.innerHTML = length
  }

  function fillJar() {
    console.log("filljar")
    var skittle = document.createElement("div");
    skittle.classList.add("skittle", "green");
    var element = document.getElementById("jar");
    element.appendChild(skittle);
  }

  function getRandomColor() {
    let COLORS = ["red", "green", "blue"];
    Math.floor(Math.random() * 3);
    return COLORS[Math.floor(Math.random() * 3)]
  }

  function id(idName) {
    return document.getElementById(idName);
  }

  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  function qs(selector) {
    return document.querySelector(selector);
  }
})();