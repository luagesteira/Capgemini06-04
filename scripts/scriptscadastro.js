function onSubmit() {
    var nome = document.getElementsByTagName("input")[0];
   for(i=[0]; i <[10]; i++) {
        alert("Campo Obrigatório");
        [i].focus();

        
        document.getElementsByTagName("form")[i].submit();
        return;
    }

}

function cancel() {
        return;
    }

    document.getElementById("fCredito").onkeyup = function() {myFunction()};

 
    function formatarMoeda() {
        var elemento = document.getElementById('valor');
        var valor = elemento.value;

        valor = valor + '';
        valor = parseInt(valor.replace(/[\D]+/g, ''));
        valor = valor + '';
        valor = valor.replace(/([0-9]{2})$/g, ",$1");

        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }

        elemento.value = valor;
        if(valor == 'NaN') elemento.value = '';
    }