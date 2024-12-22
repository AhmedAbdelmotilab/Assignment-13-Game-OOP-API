import { Ui } from './ui.js';
export class Details {
  constructor(id) {
    this.ui = new Ui();
    this.getDetails(id);
    const closeButton = document.getElementById('btnClose');
    closeButton.onclick = this.closeDetails;
  }
  closeDetails = () => {
    document.querySelector('.MainGames').classList.remove('d-none');
    document.querySelector('.details').classList.add('d-none');
  };

  getDetails(id) {
    const loading = document.querySelector('.loading');
    loading.classList.remove('d-none');
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '180b810a6dmsh8c6c06a03fe8de0p1b0e19jsnefdb2dd5d2a8',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.ui.displayGameDetails(data);
      })
      .finally(() => {
        loading.classList.add('d-none');
      });
  }
}
