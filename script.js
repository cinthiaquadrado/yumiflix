var listaFilmes = ["https://br.web.img2.acsta.net/r_1280_720/img/28/50/285078da24bb2229c76a76bea302e447.jpg", 
"https://upload.wikimedia.org/wikipedia/en/9/9e/Turning_Red_poster.jpg", 
"https://i.pinimg.com/originals/c6/cb/45/c6cb45c2e90e098f045fff121a37e324.jpg", 
"https://media.fstatic.com/Fo3T27cjpT6XW5rTchneon4wzxs=/210x312/smart/media/movies/covers/2021/07/717142526f95b40c997d021a496d964d.jpg",
"https://cinemacomrapadura.com.br/imagens/2019/11/20191107-soul-poster-br.jpg"]

for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
}