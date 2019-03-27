$(function() {
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burger_name").val().trim(),
          devoured: 0
        };
        console.log(newBurger);
    
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

    $(".devour-burger").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var devour = 1;
        console.log(id);

        var isDev = {
            devoured: devour
        };

        $.ajax(`/api/burger/${id}`, {
            type: "PUT",
            data: isDev
          }).then(
            function() {
              console.log("devoured burger, new value: ", devour);
              // Reload the page to get the updated list
              location.reload();
            }
          );
        });

    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");

      $.ajax(`/api/burger/${id}`, {
        type: "DELETE"
      }).then(
        function() {
          console.log("record deleted!");
          location.reload();
        });
    });

    });


  console.log("hello!");