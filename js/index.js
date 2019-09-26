// your code here
const rootPath = 'https://api.github.com/'

function getRepositories(page = 1){
  const username = document.querySelector('#username').value;
  const req = new XMLHttpRequest();
  let path = rootPath + `users/${username}/repos`
  path = addQueries(path, {page: page, per_page: 100})
  req.open('get', path);
  req.addEventListener('load', () => displayRepositories.call(req, page));
  req.send();
}

function displayRepositories(page = 1){
  let repositories = JSON.parse(this.responseText);
  if(repositories.length > 0){
    getRepositories(page + 1)
  }
  showRepos(repositories, page == 1); 
}
