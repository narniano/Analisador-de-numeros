var lista = [];
var res = document.getElementById("res");

function adicionar() {
  res.innerHTML = "";
  var num = document.getElementById("num");
  var n = Number(num.value);
  var sel = document.getElementById("sel");

  if (lista.includes(n)) {
    //Checa para ver se o número já está na lista para não repetir
    alert("Número não pode ser repetido!");
  } else if (n >= 1 && n <= 100) {
    lista.push(n);
    var item = document.createElement("option");
    item.text = `Valor ${n} adicionado`;
    sel.appendChild(item);
  } else {
    alert("O número deve estar entre 1 e 100");
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (lista.length == 0) {
    res.innerHTML = `Nenhum valor cadastrado`;
  } else {
    lista.sort(); //Coloca os valores em ordem crescente

    let soma = 0; //Por meio de loop, pega e soma todos os elementos do array
    for (let i of lista) {
      soma += i;
    }

    var div = soma / lista.length; // Divide o total da soma pelo número de elementos do array

    res.innerHTML = `Ao todo, temos ${lista.length} números cadastrados<br>`;
    res.innerHTML += `O maior valor informado foi ${
      lista[lista.length - 1]
    }<br>`;
    res.innerHTML += `O menor valor informado foi ${lista[0]}<br>`;
    res.innerHTML += `A soma de todos os valores dá ${soma}<br>`;
    res.innerHTML += `A média dos valores digitados é ${div}`;
  }
}
