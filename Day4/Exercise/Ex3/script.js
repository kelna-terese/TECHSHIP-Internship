document.getElementById("text").addEventListener("keyup", function() {
    let length = this.value.length;
    document.getElementById("count").innerText =
    "Characters Typed: " + length;
});