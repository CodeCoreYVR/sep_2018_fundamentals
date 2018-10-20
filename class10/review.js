/**
 * Selectors
 * 
 *  . selectors in jquery are the same
 *    as css selctors
 *  . Space between selector items
 *    dictate hierarchy.
 *  , the '>' character dictates that
 *    the hierarchy is immediate.
 *  . We also know that to target ids, you will
 *    need to use a hash in front of the id value
 *   ( eg. <input id="password" /> #password )
 *  . We also know that to target classes, you will
 *    need to use a period in front of the clas value
 *   ( eg. <input class="an-input" /> .an-input )
 */

// we want to target
// medium black squares
$('section .medium.black.square');

// gethow do we get the length
// of the previous target
$('section .medium.black.square').length;

// target element with id purple-container
$('#purple-container');

// select the first item within the html element
// with id purple-container
$('#purple-container .shape:nth(0)');
const index = 2;
$(`#purple-container .shape:nth(${index})`);


/**
 * Event Listener
 * 
 * when "X" occurs, do "Y"
 * $( {target} ).on({event}, {action})
 * $( {target} ).on({X}, {Y})
 * $( '#link' ).on('click', function(){
 *   alert('Hello world');
 * })
 */

// print a message to the console when
// the user clicks the "large blue square"
// element

$('section .large.blue.square:nth(0)').on('click', () => {
  console.log('Hello World');
});
$('section .large.blue.square:nth(0)').click(() => {
  console.log('Hello World');
});

/**
 * Animations with jquery
 */

$('section .large.blue.square:nth(0)').slideUp();
$('section .large.blue.square:nth(0)').slideDown();



