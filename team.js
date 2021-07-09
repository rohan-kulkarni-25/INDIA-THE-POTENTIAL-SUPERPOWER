fetch('teamsdetails.json')
    .then(response => response.json())
    .then(data => {

        for (let index = 0; index < data.length; index++) {

            let memberdiv = document.createElement('div');
            memberdiv.className = `memberbox`;
            memberdiv.innerHTML = `<div class="self">
        <img class="avatar" src="${data[index].Github}.png">
        <p>${data[index].Name}</p>
    </div>
    <div class="socials">
    <a href="${data[index].Instagram}" target="_blank"><img src="assets/images/instagram-2447888.png"></a>
        <a href="${data[index].Github}" target="_blank"><img src="assets/images/github.png"></a>
        <a href="${data[index].LinkedIn}" target="_blank"><img src="assets/images/linkedin.png"></a>
    </div>`

            document.getElementById('teams').appendChild(memberdiv);

        }
    });
