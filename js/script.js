// Esercizio:
// - creare una lista di cose da fare e mostrarla in pagina con Vue;
// - aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;
// - cancellare un item dalla lista, al click sulla relativa icona 'X'.
// Bonus:
// - Oltre al click sul pulsante, consentire l'inserimento del nuovo item anche premendo il tasto Invio della tastiera, dopo aver scritto il testo nel campo di input.

var app = new Vue(
  {

    el: "#root",

    data: {
      taskList: [
        "Prendere il caffè",
        "Rifare il letto",
        "Seguire la lezione di Gianluca",
        "Pranzare",
        "Fare l'esercitazione"
      ],
      todo: "",
    },

    methods: {

      addTodo() {
        this.taskList.push(this.todo);
        this.todo = "";
      },

      removeTodo(i) {
        let todoIndex = this.taskList.indexOf(i);
        this.taskList.splice(todoIndex, 1);
      }

    }

  }
);
