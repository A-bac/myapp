function showtext() {

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var occ = document.getElementById('occupation').value;
    var count = document.getElementById('country').value;

    document.getElementById("show").innerHTML = fname + "<br>" + lname + "<br>" + occ + "<br>" + count;

}