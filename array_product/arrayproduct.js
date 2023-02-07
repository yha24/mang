var arrays = [];
function save() {
    var a = {
        fname: document.getElementById("fullname").value,
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        quantity: document.getElementById("quantity").value,
        price: document.getElementById("price").value,
    }
    console.log(a);
    arrays.push(a);
}
function show() {
    for (i in arrays) {
        var n = i;
        var discount = "10";
        var amount = "5000";
        n++;
        var data = "<tr>";
        data += "<th>" + n + "</th>";
        data += "<th>" + arrays[i].fname + "</th>";
        data += "<th>" + arrays[i].id + "</th>";
        data += "<th>" + arrays[i].name + "</th>";
        data += "<th>" + arrays[i].quantity + "</th>";
        data += "<th>" + arrays[i].price + "</th>";
        data += "<th>" + discount + "%</th>";
        data += "<th>" + amount + "</th>";
        data += "<th>" + ((arrays[i].quantity * arrays[i].price) * (1 - parseInt(discount) / 100)) + "</th>";
        data += "</tr>";
    }
    document.getElementById("tbl").innerHTML += data;
}
function reset() {
    document.getElementById("fullname").innerHTML = "";
    document.getElementById("id").innerHTML = "";
    document.getElementById("name").innerHTML = "";
    document.getElementById("quantity").innerHTML = "";
    document.getElementById("price").innerHTML = "";
}