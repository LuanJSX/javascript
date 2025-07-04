let num = document.querySelector("input#fnum");
let list = document.querySelector("select#flist");
let res = document.querySelector("div#res");
let valores = [];

const isNumero = (n) => Number(n) >= 1 && Number(n) <= 100;

const inLista = (n, l) => {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
};

const analisar = () => {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado`;
    list.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Valor invalido ou ja encontrado na lista");
  }
  num.value = "";
  num.focus();
}

const finalizar = () => {
  if (valores.length == 0) {
    alert("Adicione valores antes de Finalizar");
  } else {
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for( let pos in valores) {
        soma += valores[pos];
        if(valores[pos] > maior)
            maior = valores[pos];
        if (valores[pos] < menor)
            menor = valores[pos];             
}
    res.innerHTML = "";
    media = soma / total;
    res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`;
     res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
     res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
     res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`;
     res.innerHTML += `<p>A média dos valores digitados é ${media} </p>`;
  }
};
    

