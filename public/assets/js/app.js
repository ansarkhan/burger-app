$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger_name").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/new-burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

//   $(".create-form").on("submit", function(event) {
//       event.preventDefault();

//       var newBurger = {
//           burger_name: $("#burger_name").val().trim(),
//           devoured: false
//       };
//       console.log(newBurger);

//       $.ajax({
//           type: "POST",
//           url: "/api/burgers",
//           data: {
//               burger_name: "Hello1",
//               devoured: false
//           }
//       }).then( function() {
//           console.log("created new burger");
//         //   location.reload();
//       });
//   });

  console.log("hello!");