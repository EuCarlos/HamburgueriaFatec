// Login
function enviar(){
    var usuarioValue = document.querySelector(".entrada-usuario").value;
    var senhaValue = document.querySelector(".entrada-senha").value;
    
    if ((usuarioValue === "admin") && (senhaValue === "admin123")){
        window.location.href = "calculadora.html";
    }
    else {
    	let frase = document.querySelector('#mensagem_erro');
      mensagem_erro.innerHTML = "<p>Usuario ou senha incorreta, tente novamente!<p>";
    }
}

// calculadora
var ul = document.getElementById("myList");
var li;
var itemId;
var item;
var preco = 0;

// Produtos
function picanha(){
    var produto = "Picanha";
    preco = preco + 5;
    add_prod(produto)
}
function cebola(){
    var produto = "Cebola";
    preco = preco + 5;
    add_prod(produto)
}
function tomate(){
    var produto = "Tomate";
    preco = preco + 5;
    add_prod(produto)
}
function cheddar(){
    var produto = "Cheddar";
    preco = preco + 5;
    add_prod(produto)
}
function grao_bico(){
    var produto = "Grão de Bico";
    preco = preco + 5;
    add_prod(produto)
}
function bacon(){
    var produto = "Bacon";
    preco = preco + 5;
    add_prod(produto);
}
function maionese(){
    var produto = "Maionese";
    preco = preco + 5;
    add_prod(produto);
}
function alface(){
    var produto = "Alface";
    preco = preco + 5;
    add_prod(produto);
}
function carne_jaca(){
    var produto = "Carne de Jaca";
    preco = preco + 5;
    add_prod(produto);
}
function molho_esp(){
    var produto = "Molho Especial";
    preco = preco + 5;
    add_prod(produto);
}
function ovo_frito(){
    var produto = "Ovo Frito";
    preco = preco + 5;
    add_prod(produto);
}
function pepino(){
    var produto = "Pepino";
    preco = preco + 5;
    add_prod(produto);
}
function champignon(){
    var produto = "Champignon";
    preco = preco + 5;
    add_prod(produto);
}
function mussarela(){
    var produto = "Mussarela";
    preco = preco + 5;
    add_prod(produto);
}
function frango(){
    var produto = "Frango";
    preco = preco + 5;
    add_prod(produto);
}
function muss_veg(){
    var produto = "Mussarela Vegana";
    preco = preco + 5;
    add_prod(produto);
}

// listar produtos
function add_prod(produto) {
    item = produto;
    itemId = ul.childElementCount; 
    li = createItemEl(produto, itemId)

    li.appendChild(createRemoveTaskBtn(itemId));
    ul.appendChild(li);
}

function removeTask(itemId) {
    for(i = 0; i< ul.children.length; i++){
        if(ul.children[i].getAttribute("index") == itemId) {
            ul.children[i].remove();
            preco = preco - 5;
        }
    }
    
}

function createItemEl(itemValue, itemId) {
    let li = document.createElement("li"); 
    li.setAttribute("index", itemId); 
    li.appendChild(document.createTextNode(itemValue));
    return li;
}

function createRemoveTaskBtn() {
    let btn = document.createElement("button"); 
    btn.setAttribute("onclick", "removeTask("+itemId+")");
    btn.setAttribute("class", "btn btn-light  btn-sm")
    btn.innerHTML = "🗑️";
    return btn;
}

function valor_total() {
    document.getElementById("preco_total").innerHTML = "R$ " + preco + ",00"
}