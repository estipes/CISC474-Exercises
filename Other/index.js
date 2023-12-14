$( document ).ready(function() {
    console.log( "ready!" );
    $("#go").on("click", function(event){
        event.preventDefault();
        let x = document.getElementById("fname").value;
        let y = document.getElementById("lname").value;
        let xy = x + " " + y;
        $("#jumbotron").html(`${xy}`);
        return false;
    });
});