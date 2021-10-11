$.get( "recipe.txt", function( data ) {
    $( ".result" ).html( data );
    alert( "Load was performed." );
    });