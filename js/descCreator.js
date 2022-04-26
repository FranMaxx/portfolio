// xhttp = new XMLHttpRequest();
// const desc = document.querySelector('.description');

// xhttp.open('GET', 'data.json', true);

// xhttp.send();

// xhttp.onreadystatechange = function () {

//     if (this.readyState == 4 && this.status == 200) {

//         const data = JSON.parse(this.responseText);

//         const { description } = data;

//         if (!description.length) {
//             const newElement = document.createElement("div");
//             newElement.textContent = "There is no description";
//             return desc.appendChild(newElement);
//         }

//         const descElement = document.createElement("div");
//         descElement.textContent = description;
//         desc.appendChild(descElement);
//     }

// }