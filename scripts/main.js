/*
 *Method to change tab 
 */
function openPage(pageName, button){
    let tablinks = document.getElementsByClassName('tablink');
    let tabcontents = document.getElementsByClassName('tabcontent');

    for (let i = 0; i < tablinks.length; i++){
        //remove for every link
        if(tablinks[i].innerHTML == button.innerHTML)
            tablinks[i].classList.add('tablink-selected');
        else
            tablinks[i].classList.remove('tablink-selected')
    }


    for (let i = 0; i < tabcontents.length; i++) {
        //hide all tabs
        if(tabcontents[i].id != pageName)
            tabcontents[i].style.display = 'none';
        
        //show the named tab
        else
            tabcontents[i].style.display = 'block';
    }
}

/*
 *Set the default tab 
 */
document.getElementById('defaultOpen').click();