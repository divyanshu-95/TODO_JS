showNotes();
let addBtn = document.getElementById('addbtn');
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addtxt');
    let title = document.getElementById('title');

    let notes = localStorage.getItem('mynotes');
    if (notes == null) {    
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push([title.value, addTxt.value]);
    localStorage.setItem("mynotes", JSON.stringify(notesObj));
    addTxt.value = "";
    title.value = ""
    // console.log(notesObj);
    showNotes();
});
function showNotes() {
    let notes = localStorage.getItem('mynotes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    if (notesObj.length > 0) {    
    notesObj.forEach(function (element, index) {
        html += `
            <div class="card my-2 mx-2 noteCard" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${index + 1}.&nbsp${element[0]}</h5>
                <p class="card-text">${element[1]}</p>
                <button id='${index}' onclick=deleteNote(this.id) class="btn btn-primary">Delete Note
                </button>
            </div>
        </div>
            `
    });
    }
    let elem = document.getElementById('notes');
    if (notesObj.length == 0) {
        elem.innerText = "No Notes to show . ";
    }
    else {
        elem.innerHTML = html;
    }

}
function deleteNote(index) {
    let notes = localStorage.getItem('mynotes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("mynotes", JSON.stringify(notesObj));
    showNotes();
}