console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}
// function handleKlikButtonClick(event) {
//   const buttonKlikElement = event.target;
//   buttonKlikElement.classList.toggle("post__button");
// }
const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);
// const klikbutton = document.querySelector(".post__button");
// klikbutton.addEventListener("click", handleKlikButtonClick);
// Exercise:
// Use document.createElement() and append another social media post to the body.

const h1 = document.createElement("h1");
h1.textContent = "Social Media Post 2";
document.body.append(h1);

const article = document.createElement("article");
article.className = "post";
document.body.append(article);

const p = document.createElement("p");
p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
p.className = "post__content";
article.append(p);

const footer = document.createElement("footer");
footer.className = "post__footer";
article.append(footer);

const span = document.createElement("span");
span.textContent = "@username";
span.className = "post__username";
footer.append(span);

const button = document.createElement("button");
button.textContent = "KLIK";
button.className = "post__button";
button.setAttribute("data-js", "like-button");
button.type = "button";
footer.append(button);
