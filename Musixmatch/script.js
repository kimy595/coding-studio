var trackform = document.querySelector('#trackform');
var lyricsvar = document.querySelector('.music_genre_name');
var artist = document.querySelector('.artist');
var trackname = document.querySelector('#trackname');
var dataWrapper = document.querySelector('.music_genre_name');

//(function (){
    const APIKEY='169f137f5fc6e376405ff0ec9b92f7ff';

    const proxy = 'http://cors-anywhere.herokuapp.com/';
    
    const getTrackdata = function(e){
        const api = `${proxy}https://api.musixmatch.com/ws/1.1/track.search?q_track=${trackname.value}&s_track_rating=desc&s_artist_rating=desc&apikey=169f137f5fc6e376405ff0ec9b92f7ff`;
        e.preventDefault();
        fetch(api)
        .then(response => {
            return response.json();
            console.log(lyricsvar);
        })
        .then(data => {
            console.log(data.message.body.track_list);
            let data_tracklist = data.message.body.track_list;

            let formattedData = '';
            let formattedDataartist = '';

            if(data_tracklist[0].track.primary_genres.music_genre_list.length === 0){
                //lyricsvar.innerHTML = "sorry";
                alert("Sorry! No genre found");
                return;
            }

            if (!data.message) {
                formattedData += `genre not found!`;
            } else {
                // Logging the data gives us a picture of what's available!
                // console.log(data);
                formattedData += `${data.message.body.track_list[0].track.primary_genres.music_genre_list[0].music_genre.music_genre_name}`;
                formattedDataartist += `${data.message.body.track_list[0].track.artist_name}`;
            }

            lyricsvar.innerHTML = "          "+ "Genre: " + formattedData;

            artist.innerHTML = "Artist: " +formattedDataartist ;


        })
    };
     if (trackform) {
        trackform.addEventListener('submit', getTrackdata);
     }
     
