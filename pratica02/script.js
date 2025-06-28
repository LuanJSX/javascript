function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector(`div#res`)

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert(`Verifique os dados e tente novamente!`);
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value)
        var genero = " ";
        var img = document.createElement(`img`);
        img.setAttribute(`id`, `foto`);
        if (fsex[0].checked) {
          genero = `Homem`;
          if (idade >= 0 && idade < 10) {
             img.setAttribute('src', 'imagens/babeH.jpg');
               //criança  
          } else if (idade < 21) {
            img.setAttribute("src", "imagens/jovemM.jpg");
          } else if (idade < 50) {
            img.setAttribute("src", "imagens/adultoH.jpg");
          } else {
            img.setAttribute("src", "imagens/idoso.jpg");
          }
        
        } else if (fsex[1].checked) {
          genero = `Mulher`;
         if (idade >= 0 && idade < 10) {
            img.setAttribute("src", "imagens/babeM.jpg");
          } else if (idade < 21) {
            img.setAttribute("src", "imagens/jovemF.jpg");
          } else if (idade < 50) {
            img.setAttribute("src", "imagens/adultoM.jpg");
          } else {
            img.setAttribute("src", "imagens/idosa.jpg");
          }
        }

        res.style.textAlign = "center";
        res.innerHTML = `Sexo: ${genero} e a idade é de ${idade} anos`;
        res.appendChild(img);
        }
        
    }
