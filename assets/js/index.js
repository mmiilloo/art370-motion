$(document).ready(  function GetValue() {
    var myarray= new Array();





  // Randomizer 2.0

  // Create an empty array for us to populate
  // var myarray = [];

  // Parses the DOM for every "#roster li a" element
  $("#roster li a").each(function() {
    // Get that item's text and it's href attribute
    var names = $(this).html();
    var href = $(this).attr('href');
    // Pushes the name and href into the array as one string
    myarray.push(names + ", " + href);
  });






  // Log our now populated array to the console to check
  console.log(myarray);


  // Click the Randomizer button!
  $("#randomizer").click(function() {

    // Remove any classes
    $("#chosenOne span").attr('class', '');

    // Choose a random whole number based on the roster.
    var chosenOne = Math.floor(Math.random() * myarray.length);

    // We could do something more exciting/suspenseful here... maybe play an animation for 2-3 seconds?

    // If there are myarray...
    if (myarray.length >= 1) {
      // Split our custom string into a name and an href
      var chosenName = myarray[chosenOne].split(", ")[0];
      var chosenLink = myarray[chosenOne].split(", ")[1];

      // Show their name in the console.
      console.log(myarray.length + ": " + myarray[chosenOne]);

      // Get first name
      var firstName = chosenName.split(" ")[0];

      // Display the "Chosen One" inside our <h1> element, and wrap it with a link.
      $("#chosenOne span").show();
      $("#chosenOne span").html(firstName);
      $("#chosenOne span").addClass(firstName);

      // Fade out our current "Chosen One"
      $("#roster li a:contains(" + chosenName + ")").addClass('selected');

      // Splice is an array method that removes our "Chosen One" from the list of myarray
      myarray.splice(chosenOne, 1);
    }

    // Once everyone has presented
    else {
      $("#chosenOne span").addClass('done');
      $("#chosenOne span").html("That's Everyone");
      setTimeout(function() {
        $("#chosenOne span").fadeOut('fast');
      }, 900);
    }
  });

  // Click the Randomizer button!
  $("#chosenOne span.done").click(function() {
    $(this).hide();
  });


});
