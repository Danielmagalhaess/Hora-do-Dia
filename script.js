function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    var txt = document.getElementById('txt')
    if(hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'm.png'
        txt.innerHTML = 'Bom dia!'
    } else if(hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 't.png'
        txt.innerHTML = 'Boa tarde!'
    } else{
        // BOA NOITE
        img.src= 'n.png'
        txt.innerHTML = 'Boa noite!'
    }
}
