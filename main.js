'strict mode'

const shoppingList = [
    'pannolini extra',
    'salviette',
    'pannolini',
    'ciucci',
    'pappette',
    'giocattoli'
]

console.log(shoppingList);

const listContainer = document.getElementById("list");

let i = 0;

while ( i < shoppingList.length) {
    i++;
    console.log(i);
    let listItem = document.createElement("li");
    listItem.innerHTML = shoppingList[i];
    listContainer.append(listItem);
}