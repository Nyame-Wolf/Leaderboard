import './style.css';
import createScores from './modules/populateScores.js';
import id from './modules/data.js';
import postUser from './modules/addScores.js';
import getUser from './modules/getScores.js';

const form = document.querySelector('.score-form');
const submit = document.querySelector('.score-submit');
const getId = id;
const nameInput = form.name;
const scoreInput = form.score;
const refreshBtn = document.querySelector('.refresh');

const refresh = async (e) => {
  e.preventDefault();
  const scores = await getUser(await getId);
  createScores(scores.result);
};

submit.addEventListener('click', async (e) => {
  e.preventDefault();
  await postUser(await getId, nameInput.value, scoreInput.value);
  form.reset();
});

refreshBtn.addEventListener('click', refresh);
