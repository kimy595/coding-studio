
var trackname = "Don't Panic"
var lyricsvar = document.querySelector('.music_genre_name');
//(function (){
    const APIKEY='169f137f5fc6e376405ff0ec9b92f7ff';

    const proxy = 'http://cors-anywhere.herokuapp.com/';
    const api = `${proxy}http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackname}&apikey=169f137f5fc6e376405ff0ec9b92f7ff`;

    /*fetch(
        ``, {
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(function(response){
            console.log(response);
        })
        .catch(error => console.error(error))

}(*/
    fetch(api)
    .then(response => {
        return response.json();
        console.log(lyricsvar);
     })
    .then(data => {
     console.log(data);});

//));


    //   $("document").ready(function(){
    //     $.ajax({
    //       url: "http://tracking.musixmatch.com/t1.0/AMa6hJCIEzn1v8RuOP",
    //       success: function(data) {
    //         console.log(data);
    //         handleData(data)
    //       }
    //     });

    //     var q_lyrics = $("#lyrics")

    //     function handleData(data){
    //       $("#lyrics").html("The song is" + data.main.temp)
        
    //     }
      
    // });
