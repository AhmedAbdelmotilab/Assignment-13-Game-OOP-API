export class Ui {
  displayGame(data) {
    let gamesBox = ``;
    for (let i = 0; i < data.length; i++) {
      gamesBox += `
          <div class="col">
              <div data-id="${data[i].id}" class="card">
                <img  src="${data[i].thumbnail}" class="card-img-top" alt="Image-Thumbnail" />
                <div class="card-body">
                  <div class="title d-flex justify-content-between">
                    <div class="gameTitle pt-2">
                      <h3>${data[i].title}</h3>
                    </div>
                    <div class="gamePrice btn btn-primary">free</div>
                  </div>
                  <div class="shortDetails pt-4 text-center">
                    <p>  ${data[i].short_description.split(' ', 8)}</p>
                  </div>
                </div>
                <div class="card-footer d-flex justify-content-between">
                  <div class="gameCategory btn btn-primary btn-sm text-uppercase">${data[i].genre}</div>
                  <div class="gamePlatform btn btn-primary btn-sm text-uppercase">${data[i].platform}</div>
                </div>
              </div>
            </div>
         `;
    }

    document.getElementById('gameData').innerHTML = gamesBox;
  }

  displayGameDetails(data) {
    const content = `
      <div class="col-md-4">
      <img src="${data.thumbnail}" class="w-100" alt="image" />
   </div>
   <div class="col-md-8">
      <h3>Title: ${data.title}</h3>
      <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
      <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
      <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
      <p class="small">${data.description}</p>
      <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
   </div>
      `;

    document.getElementById('detailsContent').innerHTML = content;
  }
}
