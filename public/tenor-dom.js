const searchForm = document.getElementById("search__form");
const imgDiv = document.getElementById("image")
const img = document.createElement('img');
const selectMenu = document.getElementById('menu')
const title = document.createElement('h1');

let xhr = new XMLHttpRequest;
imgDiv.appendChild(title)
imgDiv.appendChild(img)
img.classList.add("activity__img")
// Get APIs
let apiCall = (url, callback) => {
    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)
            if (callback) {
                callback(response);
            }
        }
    }
    xhr.open('POST', url)
    xhr.send();
}


searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
   let type = selectMenu.value;
    apiCall(`/tenor/${type}`,(res)=>{
        title.innerHTML = res.activityTitle;
        img.src= res.imgurls ;
        img.alt = "Gif describes the activity"
        })
} )