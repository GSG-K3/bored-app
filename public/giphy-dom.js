const searchForm = document.getElementById('search__form')
const gifDiv = document.getElementById('gifs')
const activityType = document.getElementById('menu');
const gif = document.createElement('img')
const title = document.createElement('h1');

gif.classList.add("gif__style");

let xhr = new XMLHttpRequest();
gifDiv.appendChild(title)
gifDiv.appendChild(gif);

let apiCall = (url, callback) => {
  xhr.onreadystatechange = function() {
    if (xhr.status == 200 && xhr.readyState == 4) {
      const response = JSON.parse(xhr.responseText);
      if (callback) {callback(response)
    }
    }
  }
  xhr.open('POST', url);
  xhr.send();
};

document.getElementById("bu").addEventListener('click', (e) => {
    e.preventDefault();
    let type = activityType.value;
    apiCall(`/giphy/${type}`, (res) => {
      title.innerHTML= res.activityTitle;
        gif.src =`https://media.giphy.com/media/${res.gifurls}/giphy.gif`;

    })
})


