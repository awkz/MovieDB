window.fn = {};
window.fn.open = function() {
var menu = document.getElementById('menu');
menu.open();
};
window.fn.load = function(page) {
var content = document.getElementById('content');
var menu = document.getElementById('menu');
content.load(page)
.then(menu.close.bind(menu));
};

function searchMovie(){
    var title = document.getElementById('input').value;
    console.log(title);
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/search/movie?api_key=44e3ea863d83bffa4d061fc5bfcfb197&query="+title,
        "method": "GET",
        "headers": {},
        "data": "{}"
      }
      
      $.ajax(settings).done(function (response) {
        document.getElementById('isiPencarianFilm').innerHTML = '<br><p>Hasil Pencarian :</p><br>';
        results = response['results'];
        var isi = document.getElementById('isiPencarianFilm');
        for (i in results){
            let onsheader = document.createElement('ons-list-header');
            onsheader.innerHTML = results[i].title;
            isi.appendChild(onsheader);

            let listitem = document.createElement('ons-list-item');
            // listitem.innerHTML = "<div><img width='100%' src='https://image.tmdb.org/t/p/w500"+results[i].poster_path+"' alt='Poster Film'></div><br><ons-row><ons-col width='30%'>Judul</ons-col><ons-col>"+results[i].title+"</ons-col></ons-row><br><ons-row><ons-col width='30%'>Overview</ons-col><ons-col>"+results[i].overview+"</ons-col></ons-row>";
            listitem.innerHTML = "<ons-row><ons-col width='30%'><img width='100%' src='https://image.tmdb.org/t/p/w500"+results[i].poster_path+"' alt='Poster Film'></ons-col><ons-col>Title : "+results[i].title+"<br>Rating : "+results[i].vote_average+"<br>Release Date : "+results[i].release_date+"</ons-col></ons-row><ons-row><ons-col>Overview : <br> "+results[i].overview+"</ons-col></ons-row>";
            isi.appendChild(listitem);
        }
      });
}