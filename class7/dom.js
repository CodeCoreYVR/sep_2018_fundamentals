/**
 * go to wikipedia
 * open console
 * and execute the following:
 */

 // this is going change the color of every link available in the page loaded
for( let index = 0; index < document.links.length; index++ ) {
  document.links[index].style.color = "red";
}
