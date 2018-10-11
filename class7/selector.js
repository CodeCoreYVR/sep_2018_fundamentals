// this selects all html tags
$('*').css('border', '1px solid red')

// selects all the html img tags
// eg. <img /> <img /> <img />
$('img')

// will select all the images that
// have the large class.
// eg. <img class="class" />
$('img.large');

// this will select any element with =
// the id reset-button;
// eg. <div id="reset-button">sample</div>
// eg. <button id="reset-button">sample</button>
$('#reset-button');

// this will select all the li items
// that are within a ul item with an id
// set to homework
// eg. <ul id="homework">
//       <li>list item</li>
//       <li>list item</li>
//     </ul>
$('ul#homework li');

// this will select all the image
// tags and a tags.
// eg. <img /><img /><a>link</a><a>link</a>

$('img, a');

// this will select 2 elements with the
// ids mentioned in the selector string
// eg. <hr id="reset-button" />
//     <hr id="publish-button" />
$('#reset-button, #publish-button');

/**
 * NOTE: If the html element is not found
 * no error will be triggered. Only an empty
 * object.
 */


