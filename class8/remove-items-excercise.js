// 1. remove all blue shapes
$('.blue.shape').remove();

// 2. remove all shapes in orange container
$('#orange-container .shape').remove();

// 3. remove all small red cirlces
$('.small.red.circle').remove();

// 4. get the html contents of the reset button
$('#reset').html();
$('button#reset').html();

// 5. Try to get the html contents of all links
// this will only return google because the methods
// will automatically select the first item in the list
$('a').html();
// $('a').html('test'); // different behaviour????
// * Getter methods, will only grab the first item
// * Setter methiods, will apply changes to all items
//   found

// 6. change the reset button to "Launch Missiles!"
$('button#reset').text("Launch Missiles!")
$('button#reset').html("Launch Missiles!")
// same outcome in this situation

// change all the h1 tags to read "[your name] is cool"
$('h1').text("Arturo is cool")


$('.shape').html('!!!').css('color', 'white')