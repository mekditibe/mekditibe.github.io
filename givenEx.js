let chc="<label>Add new lebel</label>";
// let ch= document.getElementById("buttonId").firstChild;
// ch.appendChild(chc);

// document.getElementById("inner").style.color = "blue";
// const h= document.createElement("h1");
// h.innerText="loran";
// const p= document.createElement("p");
// p.innerText="Jojo";
// document.body.appendChild(h).appendChild(p);
// const d= document.createElement("div");
// d.innerText="Demo";
// document.body.appendChild("id2").appendChild(d);

let saved=[];
saved.push(["mekdes",22,"mekdes@cznk","femal"]);

let out = saved.map((a, index,array)=>index+" - [ "+a+" ] .");

console.log(out);