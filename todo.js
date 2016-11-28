angular.module('todoApp', [])
    .controller('todoListController', function () {
            var todoList = this;
            todoList.todos = [
                {
                    text: 'rodrigo',
                    done: false,
                    nota1: '10',
                    nota2: '9',
                    nota3: '8',
                    nota4: '9.5'
                }];

   todoList.addTodo = function () {
                    todoList.todos.push({
                        text: todoList.todoText,
                        done: false,
                        nota1: todoList.todoNota1,
                        nota2: todoList.todoNota2,
                        nota3: todoList.todoNota3,
                        nota4: todoList.todoNota4
                    });
                    todoList.todoText = '';
                    todoList.todoNota1 = '';
                    todoList.todoNota2 = '';
                    todoList.todoNota3 = '';
                    todoList.todoNota4 = '';
   };
   todoList.remaining = function () {
                    var count = 0;
                    angular.forEach(todoList.todos, function (todo) {
                        count += todo.done ? 0 : 1;
                    });
                    return count;
   };
   todoList.archive = function () {
                    var oldTodos = todoList.todos;
                    todoList.todos = [];
                    angular.forEach(oldTodos, function (todo) {
                        if (!todo.done) todoList.todos.push(todo);
                    });
   };
    todoList.avaliacao = function(todo){
        var conceito = '';
        var status = '';
        $('#nome').text(todo.text);
        
        var n1 = parseFloat(todo.nota1);
        var n2 = parseFloat(todo.nota2);
        var n3 = parseFloat(todo.nota3);
        var n4 = parseFloat(todo.nota4);
        
        var media = (n1+n2+n3+n4)/4;
        
        
        
        $('#media').text(media);
    
        if (media<5){
            conceito = 'não demonstrou competência!';
            status = 'Reprovado';
        } else if (media < 7.5){
            conceito = 'demonstrou competência!';
            status = 'Aprovado';
        } else if (media < 10){
            conceito = 'demonstrou competência com louvor!';
            status = 'Aprovado';
        } else if (media = 10){
            conceito = 'demonstrou competência com máximo louvor!';
            status = 'Aprovado';
        };
        $('#conceito').text(conceito);
        $('#status').text(status);
    };


})



