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
        "prendere il caffè",
        "rifare il letto",
        "seguire la lezione di Gianluca",
        "pranzare",
        "fare l'esercitazione"
      ],
      todo: "",
    },

    methods: {

      addTodo() {

        let lowerCaseInput = this.todo.toLowerCase();

        if (lowerCaseInput == "" || this.taskList.includes(lowerCaseInput)) {
          alert("Non inserire attività vuote o doppie");
        } else {
          this.taskList.push(lowerCaseInput);
          this.todo = "";
        }

      },

      removeTodo(indexToRemove) {
        this.taskList.splice(indexToRemove, 1);
      }

    }

  }
);
