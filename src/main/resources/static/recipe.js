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
                                searchResult += "<div id=res_" + data[i].id + ">" + data[i].name + "</div>"
                            }
                        }
                    } else{
                        searchResult = "<p>Please search for something</p>";
                    }
                    if (searchResult == "") {
                        searchResult += "<p>Nothing was found</p>"
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