// https://s3.amazonaws.com/codecore/jquery-lab/index.html
// slide 31

// #1 
// select all shapes
// this will select all divs in the entire page
$('div') // 19
// this will select all html elements with the
// class .shape  in the entire page
$('.shape') // 16
// this will select all html elements with the
// class .shape within the section. (more specific)
$('section .shape') // 16

// #2 
// select all black shapes
// this will target all html elements that have the
// class .black.
$('section .black') // 4
// this is more specific because it will target
// all the html items that have both .black and
// shape class, within a section html tag.
$('section .shape.black') // 4
// this will expect an item with the .shape class
// to be within an item with the .black class
// which in turn, is within a section html tag.
// In other words, this is not meeting the critera
// requested.
// $('section .black .shape') // 4

// #3
// count the number of shapes
$('section .shape').length

// #4
// count the number of black shapes
$('section .shape.black').length

// #5
// count the number of black shapes AND blue shapes
// $('section .shape, .black, .blue').length // 16
$('section .black.shape, section .blue.shape').length // 8

// #6
// Select all h1 tags
$('h1')

// #7
// Select all small circles
$('section .small.circle') // 4
$('section .small.circle.shape') // 4


// this will target the first anchor
$('a:nth(0)')
$('a').eq(0)




