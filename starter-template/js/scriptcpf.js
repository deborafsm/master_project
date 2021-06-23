function consultaCep()
{
    var numeroCep = document.getElementById("numeroCep").value;
    console.log(numeroCep);
    var url =   "https://viacep.com.br/ws/"+numeroCep+"/json/";  
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            //console.log(response.bairro); 
            document.getElementById("cep").innerHTML = response.cep;
            $("#rua").html(response.logradouro);
            
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("us").innerHTML = response.localidade;
        }
    })
}

//Outra forma de chamar o jquery
//$("#logradouro").html(response.logradouro);