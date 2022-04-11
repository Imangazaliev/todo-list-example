const tasks = [
    'Купить молоко',
    'Выгулять кота',
    'Изучить Git',
];

function renderList() {
    const tasksEl = document.querySelector('.tasks');
    const templateEl = document.querySelector('[data-template="task"]').cloneNode(true);

    templateEl.removeAttribute('data-template');

    const templateStr = templateEl.outerHTML;

    tasksEl.innerHTML = tasks.map(task => {
        return templateStr.replace(/{{\stext\s}}/g, task)
    }).join('\n');

    Array.from(tasksEl.children).forEach(taskEl => {
        taskEl.addEventListener('click', () => {
            taskEl.classList.toggle('task-done');
        });
    });
}

(() => {
    renderList();

    const newTaskTextInputEl = document.querySelector('.new-task-text');

    const addTask = () => {
        const newTaskText = newTaskTextInputEl.value.trim()

        if (newTaskText !== '') {
            tasks.push(newTaskText);

            newTaskTextInputEl.value = ''

            renderList();
        }
    }

    newTaskTextInputEl.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    document.querySelector('.add-button').addEventListener('click', addTask);
})();
