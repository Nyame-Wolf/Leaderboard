import createLi from './createHtml.js';

const ul = document.querySelector('ul');

const createScore = (listContent) => {
  const x = `${listContent.user}: ${listContent.score}`;
  const li = createLi(x);
  return li;
};

const createScores = (content) => {
  let child = ul.lastElementChild;
  while (child) {
    ul.removeChild(child);
    child = ul.lastElementChild;
  }
  content.forEach((name) => {
    const score = createScore(name);
    ul.appendChild(score);
  });
};

export default createScores;