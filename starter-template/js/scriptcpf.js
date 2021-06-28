function consultaCep()
{
    $(".progress").show();
    var numeroCep = document.getElementById("numeroCep").value;
    console.log(numeroCep);
    var url =   "https://viacep.com.br/ws/"+numeroCep+"/json/";  
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            //console.log(response.bairro); 
            $("#cep").html("CEP "+response.cep);
            $("#rua").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#us").html(response.localidade);
            $(".table").show();
            $(".progress").hide();
        }
    })
}
$(function(){
    $(".table").hide();
}
);

//Outra forma de chamar o jquery
//$("#logradouro").html(response.logradouro);
//document.getElementById("#").innerHTML = response.localidade;