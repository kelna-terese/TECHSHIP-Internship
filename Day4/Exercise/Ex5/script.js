document.getElementById("addBtn").addEventListener("click", function() {

    let itemText = document.getElementById("item").value;

    let li = document.createElement("li");
    li.textContent = itemText;

    document.getElementById("list").appendChild(li);

    document.getElementById("item").value = "";
});