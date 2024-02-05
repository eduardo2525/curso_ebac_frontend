document.addEventListener('DOMContentLoaded', () => {
    const profileAvatar = document.querySelector('.profile-avatar');
    const profileName = document.querySelector('.profile-name');
    const profileUsername = document.querySelector('.profile-username');
    const repositories = document.querySelector('.repositories');
    const followers = document.querySelector('.followers');
    const following = document.querySelector('.following');
    const profile = document.querySelector('.profile-link');

    const response = fetch('https://api.github.com/users/eduardo2525')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            profileAvatar.src = json.avatar_url;
            profileName.innerText = json.name;
            profileUsername.innerText = json.login;
            repositories.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            profile.href = json.html_url;
        })
        .catch(function(erro) {
            alert("Ocorreu um Erro na API");
        })
})