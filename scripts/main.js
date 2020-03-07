/*
 *Method to change tab 
 */
function openPage(pageName, button){
    let tabcontents = document.getElementsByClassName('tabcontent');

    for (let i = 0; i < tabcontents.length; i++) {
        //hide all tabs
        if(tabcontents[i].id != pageName)
            tabcontents[i].style.display = 'none';
        else
            //show the named tab
            tabcontents[i].style.display = 'block';
    }
}

/*
 *Set the default tab 
 */
document.getElementById('defaultOpen').click();