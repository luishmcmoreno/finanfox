'use strict';

/**
 * @ngdoc service
 * @name Finanfox.financas
 * @description
 * # financas
 * Factory in the Finanfox.
 */
angular.module('Finanfox').factory('financas', function ($rootScope) {
	var financas = {};

	var dbReceitas	 	= new PouchDB('finanfox-receitas');
	var dbDespesas 		= new PouchDB('finanfox-despesas');
	var dbCategorias 	= new PouchDB('finanfox-categorias');
	var dbContas 		= new PouchDB('finanfox-contas');


	/* Receitas Pessoais */
	financas.receitas = {};

	financas.receitas.add = function (receita) {
		dbReceitas.put(receita, function (err, response) {
			console.log(err, response);
		}).then(function (response) {
			console.log(	response);
			financas.receitas.get();
		});
	};

	financas.receitas.remove = function () {

	};

	financas.receitas.get = function () {
		dbReceitas.allDocs({
			include_docs: true
		}).then(function (docs) {
			$rootScope.$broadcast('financas.receitas.updated', docs.rows);
		});
	};

	financas.receitas.edit = function () {

	};



	/* Despesas Pessoais */
	financas.despesas = {};

	financas.despesas.add = function (despesa) {
		dbDespesas.put(despesa, function (err, response) {
			console.log(err, response);
		}).then(function (response) {
			console.log(	response);
			financas.despesas.get();
		});
	};

	financas.despesas.remove = function () {

	};

	financas.despesas.get = function () {
		dbDespesas.allDocs({
			include_docs: true
		}).then(function (docs) {
			$rootScope.$broadcast('financas.despesas.updated', docs.rows);
		})
	};

	financas.despesas.edit = function () {

	};


	/* Contas de Receitas */
	financas.contas = {};


	financas.contas.add = function () {

	};

	financas.contas.remove = function () {

	};	

	financas.contas.get = function () {

	};


	/* Categorias de Despesas */
	financas.categorias = {};


	financas.categorias.add = function () {

	};

	financas.categorias.remove = function () {

	};	

	financas.categorias.get = function () {

	};



	return financas;
});
