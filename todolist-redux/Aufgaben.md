1. nextId, setNextId ersetzen
2. localStorage aktivieren
3. Bearbeiten soll eine eigene Seite sein,
   /todos/:id/edit
4. InPlace-Editing

const json = localStorage.getItem("todoState"))

localStorage.setItem("todoState", JSON.stringify({todos: state.todos, nextId: state.nextId}))
