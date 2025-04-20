
// function filCity(){
//     const zipField = document.getElementById('zip')
//     const cityField = document.getElementById('city')
// }

function filCity() {
    let cityName;
    let zipValue = document.getElementById('zip').value;
    switch (zipValue) {
        case "123abc":
            cityName = "peshawar";
            break;
        case "456def":
            cityName = "karchi";
            break;
    }
    let youtCity = document.getElementById('city');
    youtCity.value = cityName;
}



function expand() {
    let newText = "this is expand paragraph now you are in expand paragraph.";
    document.getElementById("para").innerHTML = newText;
}
function list() {
    let listTo = "<ol><li>fist</li> <li>secound</li></ol>";
    document.getElementById("p1").innerHTML = listTo;
}
function toDo() {
    let wathTere = document.getElementById("ex").innerHTML;
}
// function showLink() {
//     let cLink = document.getElementById("link");
//     let address = cLink.href;
//     console.log(address);
// }


const showLink = document.getElementById('showLink')
showLink.addEventListener('click', function(){
    let click = document.getElementById("link");
    const address = click.href
    // console.log(address)
    document.body.innerHTML += address
})
console.log(showLink)