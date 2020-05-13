"use strict"

let todo_list = [
            {
                description: 'pasigaminti kavos',
                crated_on: '2020-05-05 15:01',
                deadline: '2020-05-06 15:55',
                status: 'todo'
            },
            {
                description: 'nueit i bara',
                crated_on: '2020-05-06 15:01',
                deadline: '2020-05-07 15:55',
                status: 'todo'
            },
            {
                description: 'paguleti',
                crated_on: '2020-07-05 15:01',
                deadline: '2020-05-06 15:55',
                status: 'todo'
            }
        ];
        for (let i=0; i<todo_list.length; i++){
        const todo = todo_list[i];
        const sentence = `Darbas kuri reikia atlikti yra"${todo.description}" ir ji reikia atlikti iki '${todo.deadline}' siuo metu yra busenoje "${todo.status}".`;
        console.log(sentence);
        }
    
