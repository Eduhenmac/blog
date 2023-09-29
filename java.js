
var colapse = document.getElementById("menuCursos")
var menu = document.getElementsByTagName("body")

function pesquisar(){
    var iput, filtro, menu, menuItems, links, 
    iput = document.getElementById("pes")
    filtro = iput.value.toUpperCase()
    menu = document.getElementById("menu")
    menuItems = menu.getElementsByTagName("li")
    colapse.classList.remove("collapse")
    for(let i=0; i< menuItems.length; i++){
        links = menuItems[i].getElementsByTagName("a")[0]
        if(links.innerHTML.toUpperCase().indexOf(filtro)>-1){
            menuItems[i].style.display=""
        }else{
            menuItems[i].style.display="none"
        }
    }
}

menu[0].addEventListener('click', function() {
    colapse.classList.add("collapse")
})
