var fruits = ["banana", "Orange", "Apple", "Kiwi"];
document.getElementById("demo").innerHTML = fruits;
function myFunction() {
    fruits.splice(2, 0, "Lemon", "Mango");
    document.getElementById("demo").innerHTML = fruits;
}