function createColumn(col) {
    const source = [];
    for (let i = 0; i < 15; i++) {
        source[i] = i + 1 + 15 * col;
    }
    
    const column = [];
    for (let i = 0; i < 5; i++) {
        column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    return column;
}

function createColumns() {
    const columns = [];
    for (let i = 0; i < 5; i++) {
        columns[i] = createColumn(i);
    }
    columns[2][2] = 'free';
    return columns;
}

function renderBingo (columns) {
    const thead = document.createElement('thead');
    document.getElementById('view').appendChild(thead);

    const bingoTitle = ['B', 'I', 'N', 'G', 'O'];
    const tr = document.createElement('tr');
    for (let i = 0; i < 5; i++) {
        const th = document.createElement('th');
        th.textContent = bingoTitle[i];
        tr.appendChild(th);
    }
    thead.append(tr);

    const tbody = document.createElement('tbody');
    document.getElementById('view').appendChild(tbody);

    for (let row = 0; row < 5; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < 5; col++) {
            const td = document.createElement('td');
            td.textContent = columns[col][row];
            tr.appendChild(td);
        }
        document.querySelector('tbody').appendChild(tr);
    }
}

const columns = createColumns();
renderBingo(columns);

const number = [];
for (let i = 0; i < 75; i++) {
    number[i] = i + 1;
}

const hitNum = document.getElementById('hitNum');
hitNum.addEventListener('click', function() {
    let chooseNum = number.splice(Math.floor(Math.random() * number.length), 1)[0];
   
    alert(`数字は${chooseNum}です！`);

    let table = document.getElementById('view');

    for (let row of table.rows) {
        for (let cell of row.cells) {
            if (cell.innerHTML == chooseNum) {
                cell.classList.add('hit-num');
            }
        }
    }
});