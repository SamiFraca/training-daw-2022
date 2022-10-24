
let value = 1;
function onClick() {
    let tbody = document.getElementsByTagName('tbody')[0]
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerText = value++;
    id = value -1;
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Example'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Surname'
    tr.appendChild(td)
    a = document.createElement('a')
    a.href = `http/localhost/edit/${id}`
    a.innerText = "enlace";
    tr.appendChild(a)

    tbody.appendChild(tr)
    console.log('add')
}