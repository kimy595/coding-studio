(function () {

   const APIKEY = '53f978ba680e6656fa6ae8444295da63',
      proxy = 'https://cors-anywhere.herokuapp.com/',
      artistForm = document.querySelector('#artist__form'),
      artistSelect = document.querySelector('#artist__select');

   const getArtistInfo = (event) => {

      event.preventDefault();

      if(!artistSelect.value) {
         window.alert('Please select an artist');
         return;
      }

      fetch(`${proxy}http://api.musixmatch.com/ws/1.1/artist.get?artist_id=${artistSelect.value}&apikey=${APIKEY}`)
         .then(response => response.json())
         .then(data => {
            console.log(data);
         })
         .catch(error => console.error(error));
   };

   if(artistForm) {
      artistForm.addEventListener('submit', getArtistInfo);
   }

}());