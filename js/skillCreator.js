let xhttp = new XMLHttpRequest();
const lista1 = document.querySelector('.skillList-1');
const lista2 = document.querySelector('.skillList-2');

xhttp.open('GET', 'data.json', true);

xhttp.send();

xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

        const data = JSON.parse(this.responseText);

        const { frontend, backend } = data;

        const tick = document.createElement('i');
        tick.setAttribute("class", "fa-solid fa-check check-icon");

        if (!frontend.length) {
            const newElement = document.createElement("li");
            newElement.textContent = "No Frontend skills";
            lista1.appendChild(newElement);
        } else {
            for (const elem of frontend) {
                const newElement = document.createElement("li");
                newElement.textContent = elem;
                lista1.appendChild(newElement);
            }
        }

        if (!backend.length) {
            const newElement = document.createElement("li");
            newElement.textContent = "No Backend skills";
            lista2.appendChild(newElement);
        } else {
            for (const elem of backend) {
                const newElement = document.createElement("li");
                newElement.textContent = elem;
                lista2.appendChild(newElement);
            }
        }

        const listLi1 = document.querySelectorAll('.skillList-1 li');
        const listLi2 = document.querySelectorAll('.skillList-2 li');

        for (const li of listLi1) {
            li.prepend(tick.cloneNode(true));
        }

        for (const li of listLi2) {
            li.prepend(tick.cloneNode(true));
        }

    }

}