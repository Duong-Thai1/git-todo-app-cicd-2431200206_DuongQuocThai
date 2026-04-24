const { TodoService } = require('../../js/model');

describe('TodoService Unit Tests', () => {
    let service;

    beforeEach(() => {
        // Create a new service instance for each test to ensure isolation
        service = new TodoService();
        // This is a bit of a hack to reset the singleton for testing purposes
        service.todos = [];
    });

    test('should add a new todo', () => {
        // TODO: Call the addTodo method with some text.
        // Then, assert that the service's todos array has a length of 1.
        // Assert that the text of the first todo matches the input text.

        // Arrange
        const text = "Rua chen";

        // Act
        service.addTodo(text);

        // Assert
        const todos = service.getTodos();
        expect(todos.length).toBe(1); 
        expect(todos[0].text).toMatch(text);
    });

    test('should toggle the completed state of a todo', () => {
        // TODO: First, add a todo.
        // Then, get its ID and call the toggleTodoComplete method.
        // Assert that the 'completed' property of that todo is now true.
        // Call toggleTodoComplete again and assert that it's false.

        // Arrange
        const text = "Nau an";

        // Act
        service.addTodo(text);
        const todos = service.getTodos();
        const todo = todos[0];
        const todoId = todo.id;

        // Assert
        service.toggleTodoComplete(todoId);
        expect(todo.completed).toBe(true);
        service.toggleTodoComplete(todoId);
        expect(todo.completed).toBe(false);
    });

    test('should remove a todo', () => {
        // TODO: Add a todo.
        // Get its ID and call the removeTodo method.
        // Assert that the service's todos array is now empty (length of 0).

        // Arrange
        const text = "Hoc bai";

        // Act
        service.addTodo(text);
        const todos = service.getTodos();
        const todo = todos[0];
        service.removeTodo(todo.id);

        // Assert
        expect(service.getTodos().length).toBe(0);

    });

    test('should not add a todo if text is empty', () => {
        // TODO: Call addTodo with an empty string.
        // Assert that the todos array still has a length of 0.

        // Arrange
        text = '';

        // Act
        service.addTodo(text);

        // Assert
        expect(service.getTodos.length).toBe(0);
    });
});
