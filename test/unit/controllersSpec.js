'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function () {
    var scope, controller;

    beforeEach(module('myApp.controllers'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = $controller('TodoController', {
            $scope: scope
        });
    }));


    it('should add a todo item', function () {
        scope.addTodo('Do something');
        expect(scope.todos.length).toBe(1);
    });

    it('should add a todo item text', function () {
        scope.addTodo('Do something');
        expect(scope.todos[0].text).toBe('Do something');
    });

    it('should create a todo as not done', function () {
        scope.addTodo('Do something');
        expect(scope.todos[0].done).toBeFalsy();
    });

    it('should know there can be no remaining todos', function() {
        expect(scope.remaining()).toBe(0);
    });

    it('should know there can be remaining todos', function() {
        scope.todos = [{text: '', done: false}]
        expect(scope.remaining()).toBe(1);
    });

    it('should know todos which are done can be archived', function() {
        scope.todos = [{text: '', done: true}]
        scope.archive();
        expect(scope.todos.length).toBe(0);
    });

    it('should know todos which are not done can not be archived', function() {
        scope.todos = [{text: '', done: false}]
        scope.archive();
        expect(scope.todos.length).toBe(1);
    });
});
