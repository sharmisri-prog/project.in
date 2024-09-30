
fetch("data.json")

.then((response) => response.json())
.then((data) => {

console.log(data.section);
console.log(data.section[0].h2);

document.getElementById("explore").innerHTML = data.section[0].h2;

console.log(data.section[0].p);

document.querySelector(".para").innerHTML = data.section [0].p;

console.log(data.section[1].p);

document.querySelector(".content").innerHTML = data.section[1].p;

console.log(data.section[2].h2);

document.querySelector("#thread").innerHTML = data.section[2].h2;

console.log(data.section[2].p);

document.querySelector("#content").innerHTML = data.section[2].p;

console.log(data.section[3].h2);

document.querySelector(".struct").innerHTML

data.section[3].h2;

data.section[3].p; document.querySelector("#struct").innerHTML

console.log(data.section[3].p);

console.log(data.section[4].h2);

document.querySelector(".method").innerHTML = data.section[4].h2;

console.log(data.section[4].p);

document.querySelector("#method").innerHTML = data.section[4].p;

const iframe (document.getElementById("video").src =

data.section[1].ytlink); console.log(data.section[4].a);

document.querySelector(".intro").innerHTML = data.section[4].a;
 });

