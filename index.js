// - Add to html page table with header and some rows
// - Add to header event listener to implement sorting functionality across the table data (alphabetical)
// - Add to cells user interaction feature (click and edit text)
// - Table in whole should be created with JS and appended to the document body on DOMContentLoaded event*

let container = document.createElement('div'),
    table = document.createElement('table'),
    thead = document.createElement('thead'),
    tbody = document.createElement('tbody');

container.classList.add('container');
container.appendChild(table);
table.setAttribute('id', 'table');  
table.classList.add('table');  
table.classList.add('table-striped');  
table.classList.add('table-hover');  
table.appendChild(thead);
table.appendChild(tbody);

let headingRow = document.createElement('tr');
let heading1 = document.createElement('th');
heading1.innerText = '№';
let heading2 = document.createElement('th');
heading2.innerText = 'Brand';
let heading3 = document.createElement('th');
heading3.innerText = 'Model';
let heading4 = document.createElement('th');
heading4.innerText = 'Country';

headingRow.appendChild(heading1);
headingRow.appendChild(heading2);
headingRow.appendChild(heading3);
headingRow.appendChild(heading4);

thead.appendChild(headingRow);

let row1 = document.createElement('tr');
let row1_data1 = document.createElement('td');
row1_data1.innerText = '1';
let row1_data2 = document.createElement('td');
row1_data2.innerText = 'Mazda';
let row1_data3 = document.createElement('td');
row1_data3.innerText = 'RX-8';
let row1_data4 = document.createElement('td');
row1_data4.innerText = 'Japan';

tbody.appendChild(row1);
row1.appendChild(row1_data1);
row1.appendChild(row1_data2);
row1.appendChild(row1_data3);
row1.appendChild(row1_data4);

let row2 = document.createElement('tr');
let row2_data1 = document.createElement('td');
row2_data1.innerText = '2';
let row2_data2 = document.createElement('td');
row2_data2.innerText = 'BMW';
let row2_data3 = document.createElement('td');
row2_data3.innerText = 'X5';
let row2_data4 = document.createElement('td');
row2_data4.innerText = 'Germany';

tbody.appendChild(row2);
row2.appendChild(row2_data1);
row2.appendChild(row2_data2);
row2.appendChild(row2_data3);
row2.appendChild(row2_data4);

let row3 = document.createElement('tr');
let row3_data1 = document.createElement('td');
row3_data1.innerText = '3';
let row3_data2 = document.createElement('td');
row3_data2.innerText = 'Honda';
let row3_data3 = document.createElement('td');
row3_data3.innerText = 'Civic';
let row3_data4 = document.createElement('td');
row3_data4.innerText = 'Japan';

tbody.appendChild(row3);
row3.appendChild(row3_data1);
row3.appendChild(row3_data2);
row3.appendChild(row3_data3);
row3.appendChild(row3_data4);

let row4 = document.createElement('tr');
let row4_data1 = document.createElement('td');
row4_data1.innerText = '4';
let row4_data2 = document.createElement('td');
row4_data2.innerText = 'Alfa Romeo';
let row4_data3 = document.createElement('td');
row4_data3.innerText = 'Stelvio';
let row4_data4 = document.createElement('td');
row4_data4.innerText = 'Italy';

tbody.appendChild(row4);
row4.appendChild(row4_data1);
row4.appendChild(row4_data2);
row4.appendChild(row4_data3);
row4.appendChild(row4_data4);

let row5 = document.createElement('tr');
let row5_data1 = document.createElement('td');
row5_data1.innerText = '5';
let row5_data2 = document.createElement('td');
row5_data2.innerText = 'Hyundai';
let row5_data3 = document.createElement('td');
row5_data3.innerText = 'i30';
let row5_data4 = document.createElement('td');
row5_data4.innerText = 'South Korea';

tbody.appendChild(row5);
row5.appendChild(row5_data1);
row5.appendChild(row5_data2);
row5.appendChild(row5_data3);
row5.appendChild(row5_data4);

let row6 = document.createElement('tr');
let row6_data1 = document.createElement('td');
row6_data1.innerText = '6';
let row6_data2 = document.createElement('td');
row6_data2.innerText = 'Lincoln';
let row6_data3 = document.createElement('td');
row6_data3.innerText = 'Navigator';
let row6_data4 = document.createElement('td');
row6_data4.innerText = 'USA';

tbody.appendChild(row6);
row6.appendChild(row6_data1);
row6.appendChild(row6_data2);
row6.appendChild(row6_data3);
row6.appendChild(row6_data4);

let row7 = document.createElement('tr');
let row7_data1 = document.createElement('td');
row7_data1.innerText = '7';
let row7_data2 = document.createElement('td');
row7_data2.innerText = 'Volkswagen';
let row7_data3 = document.createElement('td');
row7_data3.innerText = 'Polo';
let row7_data4 = document.createElement('td');
row7_data4.innerText = 'Germany';

tbody.appendChild(row7);
row7.appendChild(row7_data1);
row7.appendChild(row7_data2);
row7.appendChild(row7_data3);
row7.appendChild(row7_data4);

let row8 = document.createElement('tr');
let row8_data1 = document.createElement('td');
row8_data1.innerText = '8';
let row8_data2 = document.createElement('td');
row8_data2.innerText = 'Renault';
let row8_data3 = document.createElement('td');
row8_data3.innerText = 'Duster';
let row8_data4 = document.createElement('td');
row8_data4.innerText = 'France';

tbody.appendChild(row8);
row8.appendChild(row8_data1);
row8.appendChild(row8_data2);
row8.appendChild(row8_data3);
row8.appendChild(row8_data4);

let tds = table.querySelectorAll('td');

for (let i = 0; i < tds.length; i++) {
    tds[i].contentEditable = true;
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(container );
});

let rows = Array.from(table.rows).slice(1),
    sortedRows,
    direction = 1;

function sort(target) {

    switch (target.innerText) {
        case '№':
            sortedRows = rows.sort((rowA, rowB) => rowA.cells[0].innerText.toLowerCase() > rowB.cells[0].innerText.toLowerCase() ? direction : -direction);
            break;
        case 'Brand':
            sortedRows = rows.sort((rowA, rowB) => rowA.cells[1].innerText.toLowerCase() > rowB.cells[1].innerText.toLowerCase() ? direction : -direction);
            break;
        case 'Model':
            sortedRows = rows.sort((rowA, rowB) => rowA.cells[2].innerText.toLowerCase() > rowB.cells[2].innerText.toLowerCase() ? direction : -direction);
            break;
        case 'Country':
            sortedRows = rows.sort((rowA, rowB) => rowA.cells[3].innerText.toLowerCase() > rowB.cells[3].innerText.toLowerCase() ? direction : -direction);
            break;
    }

    direction *= -1;
    return table.tBodies[0].append(...sortedRows);
}

table.onclick = function (event) {
    let target = event.target;
    if (target.tagName != 'TH') return;
    sort(target);
}