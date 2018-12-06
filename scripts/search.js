"use strict";

function myFunction() {
    let a = ''; 
    let i = ''; 
    let txtValue = '';
    let input = document.getElementById('myInput');
    let filter = input.value.toUpperCase();
    let tbody = document.querySelector('tbody');
    let tr = tbody.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
        a = tr[i].getElementsByTagName("td")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}