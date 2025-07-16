// Seleziona gli elementi del DOM
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Aggiungi un'attività
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Inserisci un’attività valida!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    // Aggiungi evento per completare l'attività
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Crea il pulsante di eliminazione
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => {
        li.remove();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = ''; // Resetta l'input
}

// Aggiungi attività con il tasto Invio
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});