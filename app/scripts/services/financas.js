'use strict';

/**
 * @ngdoc service
 * @name Finanfox.financas
 * @description
 * # financas
 * Factory in the Finanfox.
 */
angular.module('Finanfox').factory('financas', function (pouchDB) {
	var financas = {};

	var dbReceitas	 	= new pouchDB('finanfox-receitas');
	var dbDespesas 		= new pouchDB('finanfox-despesas');
	var dbCategorias 	= new pouchDB('finanfox-categorias');
	var dbContas 		= new pouchDB('finanfox-contas');


	/* Receitas Pessoais */
	financas.receita = {};

	financas.receita.add = function () {

	};

	financas.receita.remove = function () {

	};

	financas.receita.get = function () {

	};

	financas.receita.edit = function () {

	};



	/* Despesas Pessoais */
	financas.despesas = {};

	financas.despesas.add = function () {

	};

	financas.despesas.remove = function () {

	};

	financas.despesas.get = function () {

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
