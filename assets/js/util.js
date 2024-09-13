function navMenu()
{
    var menu = document.getElementById("navmenu");

    if (menu.className == "nav") {
    menu.className += "_responsive";
    } 
    else {
    menu.className = "nav";
    }
}
// function navActive()
// {
//     var menu = document.getElementById("navmenu");
//     var navlink = menu.getElementsByClassName("navlink")

//     for (var i = 0; i < navlink.length; i++)
//     {
//         navlink[i].addEventListener("click",function(){
//           var current = document.getElementsByClassName("active");
//           if (current.length > 0) { 
//             current[0].className = current[0].className.replace(" active", "");
//           }
//           this.className += " active";
//           });
//     }
// }
/*
function navScroll()
{
    var navmenu = document.getElementById("navmenu");
    var sticky = navmenu.offsetTop;

    if (window.pageYOffset >= sticky) {
        navmenu.classList.add("sticky");
      } 
      else {
        navmenu.classList.remove("sticky");
      }
}*/