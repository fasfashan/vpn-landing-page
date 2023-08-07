const header = document.querySelector("#header"); /* Get the element navbar*/

window.onscroll = function () {
  if (document.documentElement.scrollTop >= 30) {
    header.classList.add("active"); /* When user scroll more than 30 from body, header will add the class 'active  */
  } else {
    header.classList.remove("active"); /* When user scroll less than 30 from body, header will remove the class 'active  */
  }
};
