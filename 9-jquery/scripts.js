// DO NOT CHANGE THE HTML FILE

//note: I did change the HTML file when I sourced in the jquery file

	// 1 - After the DOM loads, add a paragraph tag that says "Page loaded"
	// to the section element
$(document).ready( function(){
  $('.status').append('<p>Page loaded</p>');
	// 2 - Change the text of the h1 element to something (anything!) else.
  $('h1').text('Good afternoon!');
  // 3 - Get rid of (delete) the useless unordered list (ul) by first
  // selecting the h2 nested within its list item.
  $('h2').parent().parent().remove();
});
