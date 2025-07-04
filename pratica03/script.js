function contar() {
  var ini = document.getElementById("texti");
  var fim = document.getElementById("txtf");
  var passo = document.getElementById("txtp");
  var res = document.getElementById("res");

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert("ERRO! Preencha todos os campos");
  } else {
    res.innerHTML = `Contando:  <br>`;
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      alert("Passo inválido! Considerando passo 1");
      p = 1;
    }
    if (i < f) {
      //Contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449} `;
      }
    } else {
      //Contagem decrescente
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449} `;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
