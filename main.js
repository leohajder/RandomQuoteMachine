$(function() {
    var text = $('#quote-text');
    var author = $('#quote-author');
    var tweet = "";

    function getQuote(text, author) {
        var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"

        $.getJSON(url, function(data) {
            text.html(data.quoteText);
            if (data.quoteAuthor) {
                author.html(data.quoteAuthor);
            } else {
                author.html("Anonymous");
            }
            tweet = data.quoteText + " - " + data.quoteAuthor;
        });
    }

    getQuote(text, author);

    $('#getQuote').click(function(event) {
        event.preventDefault();
        getQuote(text, author);
    });

    $('#tweetOut').click(function() {
        $(this).attr("href", "https://twitter.com/intent/tweet?text=" + tweet);
    });
});
