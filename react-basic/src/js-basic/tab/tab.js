function openTab(evt, tabName){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].computedStyleMap.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active","");
    }
    document.getElementsById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementsByClassName("tab-content")[0].style.display = "block";
document.getElementsByClassName("tab-link")[0].className += "active";