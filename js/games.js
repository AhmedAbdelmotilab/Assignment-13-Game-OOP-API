import { Details } from './details.js';
import { Ui } from './ui.js';
export class Games {
  constructor() {
    this.ui = new Ui();
    this.startApp();
  }
  startApp() {
    this.getGames('mmorpg');
    this.gamesLinksCategory();
  }
  gamesLinksCategory() {
    const menuLinks = document.querySelectorAll('.menu a');
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', (e) => {
        this.gamesLinksCategoryClick(e);
      });
    }
  }
  gamesLinksCategoryClick(e) {
    e.preventDefault();
    const activeLink = document.querySelector('.menu .active');
    if (activeLink) activeLink.classList.remove('active');
    e.target.classList.add('active');
    const category = e.target.dataset.category;
    this.getGames(category);
  }
  async getGames(category) {
    this.toggleLoading(true);
    try {
      const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, this.getApiOptions());
      const games = await response.json();
      this.ui.displayGame(games);
      this.setupCardListeners();
    } catch (error) {
      console.error('Error fetching games:', error);
    } finally {
      this.toggleLoading(false);
    }
  }
  getApiOptions() {
    return {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '180b810a6dmsh8c6c06a03fe8de0p1b0e19jsnefdb2dd5d2a8',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
  }
  toggleLoading(isVisible) {
    const loading = document.querySelector('.loading');
    if (isVisible) {
      loading.classList.remove('d-none');
    } else {
      loading.classList.add('d-none');
    }
  }
  setupCardListeners() {
    const cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener('click', () => this.showDetails(cards[i].dataset.id));
    }
  }
  showDetails(idGame) {
    const details = new Details(idGame);
    document.querySelector('.MainGames').classList.add('d-none');
    document.querySelector('.details').classList.remove('d-none');
  }
}
