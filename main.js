'strict mode'

const shoppingList = [
    'pane',
    'pasta',
    'pannolini',
    'pappette',
    'giocattoli'
]

console.log(shoppingList);

const listContainer = document.getElementById("list");

let i = 0;

while ( i < shoppingList.length ) {
    console.log(i);
    let listItem = document.createElement("li");
    listItem.innerHTML = shoppingList[i];
    listContainer.append(listItem);
    i++;
}