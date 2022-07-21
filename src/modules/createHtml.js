const createLi = (d) => {
  const li = document.createElement('li');
  li.textContent = d;
  return li;
};
export default createLi;