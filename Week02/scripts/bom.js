// Element references
const input = document.querySelector('#favchap');
const button = document.querySelector("button");
const list = document.querySelector('#list');

// Valid Book of Mormon books
const bomBooks = [
"1 Nephi","2 Nephi","Jacob","Enos","Jarom","Omni",
"Words of Mormon","Mosiah","Alma","Helaman",
"3 Nephi","4 Nephi","Mormon","Ether","Moroni"
];

button.addEventListener('click', function () {

let chapter = input.value.trim();

// Prevent empty input
if (chapter === '') {
    alert("Please enter a Book of Mormon chapter.");
    input.focus();
    return;
}

// Standardize formatting (capitalize book name)
chapter = chapter.replace(/\s+/g, ' ');

// Validate book name
const bookName = chapter.replace(/[0-9]/g,'').trim();

if (!bomBooks.some(book => book.toLowerCase() === bookName.toLowerCase())) {
    alert("Please enter a valid Book of Mormon book.");
    input.focus();
    return;
}

// Limit list to 10 entries
if (list.children.length >= 10) {
    alert("Only 10 favorite chapters are allowed.");
    input.focus();
    return;
}

// Prevent duplicates
for (let item of list.children) {
    if (item.firstChild.textContent === chapter) {
        alert("That chapter is already in the list.");
        input.value = '';
        input.focus();
        return;
    }
}

// Create list item
const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = chapter;

// Delete button
deleteButton.textContent = '❌';
deleteButton.setAttribute('aria-label', `Remove ${chapter}`);

li.append(deleteButton);
list.append(li);

// Delete functionality
deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});

// Clear input
input.value = '';
input.focus();

});