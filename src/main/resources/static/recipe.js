$(document).ready(function () {

    $("#search-button").click(function () {
        $.ajax({
            type: "get",
            url: "recipe.json",
            dataType: "json",
            success: function (data) {
                if (data) {
                    var searchResult = "";
                    if (!$("#search-text").val() == "") {
                        for (var i = 0; i < data.length; i++) {
                            if ((data[i].name).toLowerCase().includes($("#search-text").val().toLowerCase())) {
                                searchResult += "<div id=res_" + data[i].id + "><h1>" + data[i].name + "</h1></div>"
                            }
                        }
                    } else{
                        searchResult = "<h1>Please search for something</h1>";
                    }
                    if (searchResult == "") {
                        searchResult += "<h1>Nothing was found</h1>"
                    }
                    $("#search-content").html(searchResult);
                }
            }
        });
    });

    $('#res_1').click(function (e) {
        alert(1);
    });

});