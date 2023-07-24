function tabuada() {
    var numero = document.getElementById('n')
    var tabuada = document.getElementById('seltab')
    if(numero.value == 0){
        window.alert('Por favor, digite um numero!')
    } else {
        var n = Number(numero.value)
        tabuada.innerHTML = ''
        for(c = 1; c <= 10; c ++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
        }
    }   
}