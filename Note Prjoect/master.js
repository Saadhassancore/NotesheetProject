//console.log("welcomes to Notes App");
shownotes();


// If user add a note, add it to be local storage.

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);

    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    //console.log(notesObj);
    shownotes();
})

// Function to show elements from localStorage

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);

    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem; display: -webkit-inline-box;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;

    });

    let notesElm = document.getElementById("notes");

    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show use add a note section above to add notes.`
    }
}


// Function to delete a note.

function deleteNote(index) {
    //console.log("i am deleting", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    }
    else {

        notesObj = JSON.parse(notes);

    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();

}


let search = document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let inputval = search.value.toLowerCase();
    //console.log("input event fired!",inputval);
    let notecard = document.getElementsByClassName("notecard");
    Array.from(notecard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
       // console.log(cardTxt);
    })
})

