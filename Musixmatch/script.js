
(function (){
    const APIKEY='169f137f5fc6e376405ff0ec9b92f7ff';

    fetch(
        `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=15953433&apikey=169f137f5fc6e376405ff0ec9b92f7ff`, {
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(function(response){
            console.log(response);
        })
        .catch(error => console.error(error))

}());


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
