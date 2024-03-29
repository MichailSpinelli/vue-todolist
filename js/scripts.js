/*
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodo: '',
            todos : [
                {
                    text: 'Mangiare',
                    done: true,
                },
                {
                    text: 'Dormire',
                    done: false,
                },
                {
                    text: 'Respirare',
                    done: true,
                },
            ]
        };
    },
    methods: {
        addTodo(){
            if (this.newTodo.trim().length > 0) {}
            const newTodoObj ={
                text: this.newTodo,
                done: false
            };

            this.todos.push(newTodoObj);

            this.newTodo = '';
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        }
    }

}).mount('#app');