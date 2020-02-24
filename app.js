const serachRes = document.querySelector('.search__list');


// Searches for value within the input tag once the search button has been pressed
function booksearch() {
  var search = document.getElementById('search').value
  document.querySelector('.search__list').innerHTML = ""
  console.log(search)
   
  // Makes an ajax call to the google api 
  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    data: "json",
   
    success:(data) => {
      console.log(data)
        for(i = 0; i < data.items.length; i++) {
          serachRes.innerHTML += `<div class="table">
          <h3 class="book-text">${data.items[i].volumeInfo.title}</h3>
          <img src=${data.items[i].volumeInfo.imageLinks.smallThumbnail} alt="">
          <div class="info">
          <h6> Author: ${data.items[i].volumeInfo.authors}</h6>
          <h6> Publish date: ${data.items[i].volumeInfo.publishedDate}</h6>
          <h6> Page count: ${data.items[i].volumeInfo.pageCount}</h6>
          <h6> <a class="book__link"href="${data.items[i].volumeInfo.previewLink}">book preview</a> </h6>
          <a href=""></a>
          </div>
          </div>
          `
        }
    },
    type: 'GET'
  })
}


//Loader







document.getElementById('button').addEventListener('click', booksearch, false)