//Use better comments

//Method to call the good button from other links
function openPageButton(buttonName){
    document.getElementsByClassName(buttonName)[0].click();
}

//Method to switch between tabs
function openPage(pageName, button){

    //get all the tab buttons
    let tablinks = document.getElementsByClassName('tablink');

    //get tabs
    let tabcontents = document.getElementsByClassName('tabcontent');


    //foreach buttons
    for (let i = 0; i < tablinks.length; i++){
        //
        //remove the 'selected' class if it's 
        //  not the caller with innerHTML
        //
        if(tablinks[i].innerHTML == button.innerHTML)
            tablinks[i].classList.add('tablink-selected');
        else
            tablinks[i].classList.remove('tablink-selected')
    }


    //foreach tabs
    for (let i = 0; i < tabcontents.length; i++) {
        //
        //hide unselected tabs with id
        //
        if(tabcontents[i].id != pageName)
            tabcontents[i].style.display = 'none';
        else
            tabcontents[i].style.display = 'block';
    }
}

//Select the default tab
document.getElementsByClassName('tablink-default')[0].click();