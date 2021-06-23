inome = []
iqtprod =[]
ipreco = []

function addItem(){
    inome.push(document.getElementById('nomeProduto').value);
    iqtprod.push(parseInt(document.getElementById('qntProduto').value))
    ipreco.push(parseInt(document.getElementById('precoProduto').value))
    displayCart()
}
function displayCart(){
    cartdata = '<table><tr><th>Nome do Produto</th><th>Quantidade</th><th>Preço</th><th>Total</th></tr>'
    total =0;
    for(i=0;i<inome.length;i++){
        total += iqtprod[i]*ipreco[i]
        cartdata += "<tr><td>"+inome[i]+"</td><td>"+
        iqtprod[i]+"</td><td>"+ipreco[i]+"</td><td>"+
        iqtprod[i] * ipreco[i] + "</td><td><button onclick='delItem("+i+")'></button></td></tr>"
    }
    cartdata += '<tr><td></td><td></td><td></td><td>'+
    total  + '</td></tr></table>'

    document.getElementById('cart').innerHTML = cartdata
}
function delItem(a){
    inome.splice(a,1)
    iqtprod.splice(a,1)
    ipreco.splice(a,1)
    displayCart()

}