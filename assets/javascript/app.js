console.log("Hello")


$("button").on("click", function () {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "44512a5578684c6eb2978ddbff2e0b20",
      'q': "popcorn"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).then(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });
});