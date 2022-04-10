function carregar() {
    var msg = window.document.getElementById('open')
    var data = new Date()
    var hora = data.getHours()
    var agora = new Date()
    var diasem = agora.getDay()

    if (hora >= 19 && hora <=22 && diasem >= 5 && diasem < 7){
        msg.innerHTML = "Estamos funcionando, prontos para atender seu pedido!"
    } else if (hora >= 19 && hora <=22 && diasem == 0) {
        msg.innerHTML = "Estamos funcionando, prontos para atender seu pedido!"
    }else{
        msg.innerHTML = "Estamos fechados, abrimos as noites de Sexta à Domingo"
    }
}