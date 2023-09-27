function pesquisar(){
    var iput, filtro, menu, menuItems, links, colapse
    iput = document.getElementById("pes")
    filtro = iput.value.toUpperCase()
    colapse = document.getElementById("menuCursos")
    menu = document.getElementById("menu")
    menuItems = menu.getElementsByTagName("li")
    colapse.classList.toggle("collapse")
    for(let i=0; i< menuItems.length; i++){
        links = menuItems[i].getElementsByTagName("a")[0]
        if(links.innerHTML.toUpperCase().indexOf(filtro)>-1){
            menuItems[i].style.display=""
        }else{
            menuItems[i].style.display="none"
        }
    }
}