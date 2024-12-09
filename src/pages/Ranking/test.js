var points = [{
    id: 1,
    point: 0
  }, {
    id: 2,
    point: 0
  }, {
    id: 3,
    point: 1
  }]
  
  var data = {
    id: 1
  }

  let temp = points.find(e => e.id === data.id)
  if (temp != undefined) { // This is just for understanding. `undefined` inside `if` will give false. So you can use `if(!temp)`
    temp.point+= 1
  } else {
    points.push(data)
  }
  
  console.log(points);
  

  function aumentarAcessos() {
    // Localiza a obra "Epopeia de Gilgamesh"
    let obra = Contos.find(item => item.nome === "Epopeia de Gilgamesh");

    if (obra) {
        obra.qntAcessos += 1; // Aumenta o valor de qntAcessos
        document.getElementById('access-count').textContent = `Acessos: ${obra.qntAcessos}`;
        Contos.push(obra)
    }
}
function aumentarAcessos2() {
    // JavaScript
    let obra = Contos.find(item => item.nome === "Epopeia de Gilgamesh");



}


function aumentarAcessos() {
    var json = [
        {"nome":"Coisa A", qtd:2},
        {"nome":"Coisa A", qtd:3},
        {"nome":"Coisa B", qtd:5},
        {"nome":"Coisa B", qtd:7}
      ];
      
      var result = json.reduce(function(res, obj) {
      
        if (res._array.indexOf(obj.nome) === -1) {  
          res._array.push(obj.nome);
          res[obj.nome] = obj.qtd;
        }
        else {
          res[obj.nome] += obj.qtd;
        }
      
        return res;
      
      }, {_array:[]});
      
      console.log(result);
}

function aumentarAcessos2() {      
      var result = Contos.reduce(function(res, obj) {
      
        if (res._array.indexOf(obj.nome) === -1) {  
          res._array.push(obj.nome);
          res[obj.nome] = obj.qntAcessos;
        }
        else {
          res[obj.nome] += obj.qntAcessos;
        }
      
        return res;
      
      }, {_array:[]});
      
      console.log(result);
}
