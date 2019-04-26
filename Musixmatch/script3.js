(function () {

   // Set up all the buttons and forms we'll need to manipulate
   const githubForm = document.querySelector('#github'),
         refreshBtn = document.querySelector('#refresh'),
         userInput = document.querySelector('#username'),
         dataWrapper = document.querySelector('.github-info'),
         // gives us all the url parameters
         urlParams = new URLSearchParams(window.location.search),
         // searches for a specific parameter called 'username' and assigns it to a variable
         usernameParam = urlParams.get('u');
         const getGithubInfo = event => {

      // this if statement allows us to call the action without submitting the form
      if (event) {
         // Keep the form from refreshing the page if called from a submit
         event.preventDefault();
      }

      /*
         fetch()
            .then()
            .catch()
      */

      // Add in the value from the form
      fetch(`https://api.github.com/users/${username.value}`)
         // convert it to readable data
         .then(response => response.json())
         // do something with the data
         .then(data => {
            // set up a variable we can add more things into it and eventually add the value in the page
            console.log(data);
            let formattedData = '';
            // A weird way to handle the error, message doesn't exist unless there is an error in the API call
            if (data.message) {
               formattedData += `Username not found!`;
            } else {
               // Logging the data gives us a picture of what's available!
               // console.log(data);
               githubForm.classList += ' hidden';
               formattedData += `<a href="${data.html_url}">`;
                  formattedData += `<img src="${data.avatar_url}" class="avatar"><br>`;
               formattedData += `</a>`;
               if (data.name) {
                  formattedData += `Name: ${data.name}<br>`;
               }
               formattedData += `Followers: ${data.followers}<br>`;
               formattedData += `Following: ${data.following}<br>`;
               formattedData += `Public Repos: ${data.public_repos}<br>`;
               document.body.classList += ' animated';
            }
            // finally, we put the content on the page, whether it's an error or a successful call
            dataWrapper.innerHTML = formattedData;
         })
         // Our error handling is actually handled up above in the response, but this will catch other errors
         .catch(error => console.error(error))
   }

   const refreshTheForm = () => {
      // gets rid of the classes
      document.body.classList = '';
      // resets the form to its original class
      githubForm.classList = 'pure-form';
      // resets the input value to blank
      userInput.value = '';
      // clears the info div
      dataWrapper.innerHTML = '';
      // puts the cursor inside the input for the user
      userInput.focus();
      // gets rid of the extra ?username=[username]
      window.history.pushState({}, document.title, window.location.href.split("?")[0]);
   }

   // makes sure the form exists before adding a listener to the submit action
   if (githubForm) {
      githubForm.addEventListener('submit', getGithubInfo);
   }

   if (refreshBtn) {
      refreshBtn.addEventListener('click', refreshTheForm);
   }

   if (usernameParam) {
      userInput.value = usernameParam;
      getGithubInfo();
   }

}());