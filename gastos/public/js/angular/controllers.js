meusGastos.controller('homeController', function ($scope, $http) {
    var titulo = 'Controle de Gastos';
    $scope.titulo = titulo;


    $scope.displayData = function () {
        $http.get("http://localhost/gastos/database/connection.php")
            .then(function (response) {
                $scope.rendimentoMensais = response.data;
            });
    };


    // adcionar no banco
    $scope.add = function (recebimento) {
        var valor = recebimento;
        data = {
            meses: valor.meses,
            valorMensal: valor.valorMensal,
            gastoMensal: valor.gastoMensal,
            saldoMes: valor.saldoMes,
        };
        $http.post('http://localhost/gastos/database/insert.php', data, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function () {
            alert('Dados cadastrado com sucesso!');
            window.location.reload(3);
        });
      
    };
    

    //atualizar    
    $scope.atualizar = function (recebimento) {
        var valor = recebimento;
        data = {
            id: valor.id,
            meses: valor.meses,
            valorMensal: valor.valorMensal,
            gastoMensal: valor.gastoMensal,
            saldoMes: valor.saldoMes,
        };

        $http.post('http://localhost/gastos/database/update.php', data, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function () {
            console.log("Atualizado com sucesso!");
            $scope.tr_edit = false;
            window.location.reload(3);    
        });
    };

    // editar    
    $scope.editar = function (index) {
        if ($scope.tr_edit = true) {
            $scope.rendimento_editar = index;
        }
    };


    //cancelar 
    $scope.cancelar = function (rendimento) {
        $scope.tr_edit = false;
        $scope.cadastrar = false;
        $scope.tr_deletar = false;
        if (rendimento) {
            rendimento.meses = "";
            rendimento.gastoMensal = "";
            rendimento.valorMensal = "";
        }
    };

    $scope.deletar = function (index) {
        if ($scope.tr_deletar = true) {
            $scope.rendimento_remover = index;
        }
    }
    $scope.confirmarDelete = function (index) {
        var indexof = $scope.rendimentoMensais.indexOf(index);
        $scope.rendimentoMensais.splice(indexof, 1);
        data = {
            id: index.id
        };
        $http.post('http://localhost/gastos/database/delete.php', data, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function () {

            alert('Removido com sucesso!');
            console.log("Deletado com sucesso!");
            $scope.tr_edit = false;
            $scope.cadastrar = false;
            $scope.tr_deletar = false;
        });
    };

});
meusGastos.controller('mesesController', function ($scope, $routeParams, $http) {
    $scope.idRendimento = $routeParams.id;

    data = {
        id: $routeParams.id,
    };
    $http.get("http://localhost/gastos/database/connection.php", data)
        .then(function (response) {
            if (response) {
                $pegar_array = response.data;
                for (var i = 0; i < $pegar_array.length; i++) {
                    $pegar_id = $pegar_array[i];
                    if ($pegar_id.id == data.id) {
                        $scope.rendimentoMensais = $pegar_id;
                    }
                }
            }
        });
});

//include header
header = '/app/views/header.html';

// filtro    
orderByMe = function (redimento) {
    myOrderBy = redimento;
};
