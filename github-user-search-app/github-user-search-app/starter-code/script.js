



$(document).ready(function() {
  $('.light-theme-button').click(function() {
    $('.body-wrap').removeClass('dark-theme');
    $('.ui.segment').removeClass('dark-theme');
    $('.ui.header').removeClass('dark-theme');
    $('.ui.search').removeClass('dark-theme');
    $('.ui.segment.container').removeClass('dark-theme'); 
    console.log('Light theme activated');
  });

  $('.dark-theme-button').click(function() {
    $('.body-wrap').addClass('dark-theme');
    $('.ui.segment').addClass('dark-theme');
    $('.ui.header').addClass('dark-theme');
    $('.ui.search').addClass('dark-theme');
    $('.ui.segment.container').addClass('dark-theme');
    console.log('Dark theme activated');
  });



  
});





$(document).ready(function() {
  $('.ui.button').click(function() {
    var username = $('.ui.input input').val();
    searchUsers(username);
  });
  
  function searchUsers(username) {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        // Set the text of the #username span to the user's login
        $('#username').text(data.login);

        // Set the src of the #profile-picture img to the user's avatar
        $('#profile-picture').attr('src', data.avatar_url);

        // Set the number of repos
        $('#num-repos').parent().text(`${data.public_repos}`);

        // Set the number of followers
        $('#num-followers').parent().text(`${data.followers}`);

        // Set the number of people the user is following
        $('#num-following').parent().text(`${data.following}`);

        // Set the date the user joined
        $('#joined').text(new Date(data.created_at).toLocaleDateString());

        // Set the user's location
        $('#location').text(data.location);

        // Set the user's Twitter link
        $('#twitter-link').attr('href', `https://twitter.com/${data.twitter_username}`);
        $('#twitter-link').text(data.twitter_username);

        // Set the user's GitHub link
        $('#github-link').attr('href', data.html_url);
        $('#github-link').text(data.login);
      })
      .catch(error => {
        // Handle the error here
        console.log(error);
      });
  }
});