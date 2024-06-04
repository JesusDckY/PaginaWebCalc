function calcular(){
    var valor1=parseFloat(document.getElementById("v1").value)
    var valor2=parseFloat(document.getElementById("v2").value)
    var Operador=document.getElementById("Ope").value
    var h3=document.getElementById("res")

    if(isNaN(valor1) || isNaN(valor2)){
        if(isNaN(valor1)){
            h3.innerHTML="el valor 1 no es valido"
            document.getElementById("v1").focus()
        }else{
            h3.innerHTML="el valor 2 no es valido"
            document.getElementById("v2").focus()
        }
        return
    }
    
    if (Operador=="/" && valor1==0 && valor2==0) {
        h3.innerHTML="Operacion invalida"
        return
    } else if( Operador=="/" && valor2==0){
        h3.innerHTML="No se puede dividir entre 0"
        document.getElementById("v2").focus()
        return
    }

    if (Operador=="+") {
        var resultado=valor1+valor2
        h3.innerHTML=resultado
    }
    else if(Operador=="-"){
        var resultado=valor1-valor2
        h3.innerHTML=resultado
    }
    else if (Operador=="*") {
        var resultado=valor1*valor2
        h3.innerHTML=resultado
    }
    else if (Operador=="/") {
        var resultado=valor1/valor2
        h3.innerHTML=resultado
    }

}