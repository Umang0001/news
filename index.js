document.body.style.backgroundColor="black"
let newsArticles;

async function fetchNews(category) {
  let url =`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=5e09973beee64f18a7ea95c8c139a900&pageSize=100`;
  let data = await fetch(url);
  console.log("data");
  let response = await data.json();
  newsArticles = response.articles;
  // console.log(newsArticles);
  displayNews(i);
}
let i = 0;

function displayNews(i) {
  let urlToImage = newsArticles[i].urlToImage;
  let title = newsArticles[i].title;
  let description = newsArticles[i].description;
  let url = newsArticles[i].url;
  let str = `
    <div style="height:500px">
     <div  class="card" style="width: 30rem;">
     <img style="max-height:200px" src="${urlToImage ? urlToImage:"https://tse3.mm.bing.net/th?id=OIP.L1nR_3pSUTMMXbrIf4Nz8QHaFj&pid=Api&P=0&w=236&h=177"}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 style="max-height:100px" class="card-title">${title? title:'sorry!, unable to fetch title'}</h5>
      <p style="max-height:100px" class="card-text">${description? description:"sorry!, unable to fetch description"}</p>
      <a  href="${url}" class="btn btn-primary" target="_blank" style="font-size: 12px !important;">Read More</a>
      <div class="page">
      <p>${i + 1}/100</p>
        </div>
    </div>
    </div>`;
  document.getElementsByClassName("news")[0].innerHTML = str;
}
// displayNews();

function next() {
  document.getElementsByClassName("news")[0].innerHTML = `<h1 style="text-align:center ;">
  <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
</h1>`;
i++;
if (i > 99) {
  i = 0;
}
setTimeout(() => {
  displayNews(i);
}, 500);
}
function previous() {
  document.getElementsByClassName("news")[0].innerHTML = `<h1 style="text-align:center ;">
  <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </h1>`;
  i--;
  if (i < 1) {
    i = 99;
  }
  setTimeout(() => {
    displayNews(i);
  }, 500);
}
let category="general";
i=0
fetchNews(category)
function Science(){
  document.getElementById('headline').innerHTML="Top Science headlines of the day";
  i=0
  category="science"
  fetchNews(category)
}
function Business(){
  document.getElementById('headline').innerHTML="Top Business headlines of the day";
  i=0
  category="business"
  fetchNews(category)
}
function Entertainment(){
  document.getElementById('headline').innerHTML="Top Entertainment headlines of the day";
  i=0
  category="entertainment"
  fetchNews(category)
}
function Sports(){
  document.getElementById('headline').innerHTML="Top Sports headlines of the day";
  i=0
  category="sports"
  fetchNews(category)
}
function Health(){
  document.getElementById('headline').innerHTML="Top Health headlines of the day";
  i=0
  category="health"
  fetchNews(category)
}
function General(){
  document.getElementById('headline').innerHTML="Top headlines of the day";
  i=0
  category="general"
  fetchNews(category)
}
