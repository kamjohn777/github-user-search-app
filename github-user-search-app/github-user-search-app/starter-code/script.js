$(document).ready(function() {
  $('.light-theme-button').click(function() {
    $('.body-wrap').removeClass('dark-theme');
    $('.ui.segment').removeClass('dark-theme');
    $('.ui.header').removeClass('dark-theme');
    $('.ui.search').removeClass('dark-theme');
    $('.ui.segment.container').removeClass('dark-theme'); 
    // $('.ui.icon.input input').removeClass('dark-theme');
    $('.ui.icon.input input:not(#profile-picture)').removeClass('dark-theme');

    console.log('Light theme activated');
  });

  $('.dark-theme-button').click(function() {
    $('.body-wrap').addClass('dark-theme');
    $('.ui.segment').addClass('dark-theme');
    $('.ui.header').addClass('dark-theme');
    $('.ui.search').addClass('dark-theme');
    $('.ui.segment.container').addClass('dark-theme');
    // $('.ui.icon.input input').addClass('dark-theme');
    $('.ui.icon.input input:not(#profile-picture)').addClass('dark-theme');
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
        $('#username').text(data.login || "No information");

        // Set the src of the #profile-picture img to the user's avatar
        $('#profile-picture').attr('src', data.avatar_url || "");

        // Set the number of repos
        $('#num-repos').parent().text(data.public_repos || "0");

        // Set the number of followers
        $('#num-followers').parent().text(data.followers || "0");

        // Set the number of people the user is following
        $('#num-following').parent().text(data.following || "0");

        // Set the date the user joined
        $('#joined').text(data.created_at ? new Date(data.created_at).toLocaleDateString() : "No information");

        // Set the user's location
        $('#location').text(data.location || "No information");

        // Set the href of the #username-link anchor to the user's GitHub URL
        $('#username-link').attr('href', data.html_url || "#");


        // Set the user's Twitter link
        if (data.twitter_username) {
          $('#twitter-link').attr('href', `https://twitter.com/${data.twitter_username}`);
          $('#twitter-link').text(data.twitter_username);
        } else {
          $('#twitter-link').attr('href', "#");
          $('#twitter-link').text("No information");
        }

        // Set the user's GitHub link
        if (data.html_url) {
          $('#github-link').attr('href', data.html_url);
          $('#github-link').text(data.login);
        } else {
          $('#github-link').attr('href', "#");
          $('#github-link').text("No information");
        }
      })
      .catch(error => {
        // Handle the error here
        console.log(error);
      });
  }
});