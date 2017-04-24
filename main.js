$(function() {
    function getQuote() {
        $.ajax({
            url: "https://api.icndb.com/jokes/random?escape=javascript",
            method: "GET",
            success: function(response) {
                $("#quote-text").text(response.value.joke);
            },
            error: function() {
                $("#out").text("ERROR :(");
            }
        });
    }

    getQuote();

    $("#getQuote").click(getQuote);

    $("#tweetOut").click(function() {
        $(this).attr("href", "https://twitter.com/intent/tweet?text=" + $("#quote-text").text());
    });
});
