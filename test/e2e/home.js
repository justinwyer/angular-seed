'use strict';

describe('todos', function () {
    var todos;

    beforeEach(function () {
        browser.get('app/index.html');
        todos = element.all(by.repeater('todo in todos'));
    });

    it('should not have any todo items initially', function () {
        expect(todos.count()).toEqual(0);
    });

    it('should change the menu when logged in', function () {
        element(by.model('todoText')).sendKeys('Do something\n');
        expect(todos.count()).toEqual(1);
        expect(todos.get(0).getText()).toEqual('Do something');
    });

    it('should strike through a todo once it is marked as done', function () {
        element(by.model('todoText')).sendKeys('Do something\n');
        element(by.css('.toggle')).click();
        element(by.css('li')).getAttribute('class').then(function (value) {expect(value).toContain('completed')});
    });
});