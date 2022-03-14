function xd(str, set) {
    let xd = "";
    for(let e of str) {
        if(set.has(e.toLocaleLowerCase()))
            xd += e;
        else xd += "_";
    }
    return xd;
}

function xD(str) {
  let xd = str.length.toString();
  xd += " ".repeat(str.length - xd.length);
  return xd;
}

function XD(str) {
  return str.replace(/[^,. ]/g,(_,xd)=>((xd+1)%10).toString());
}

function ignore(ev) {
    ev.preventDefault();
    return ev;
}

function next(bool = true) {
    if(bool) ++I;
    else --I;
    cat.innerText = g[I][1];
    pre.innerText = "";
    set = new Set([",", ".", " "]);
    add(" ");
}

function add(key) {
    inp.value = "";
    if(["=", "+"].includes(key)) { next(key === "="); return; }
    set.add(key.toLocaleLowerCase());
    let last = pre.innerText.split('\n');
    let teso = xd(g[I][0], tes).replace(/[.,]/g," ");
    pre.innerText = teso.replace(/_+/g, xD) + '\n' + teso.replace(/_+/g, XD) + '\n' + last[last.length-1] + '\n' + xd(g[I][0], set);
}
const g = [
    ["Czarodziej z Mikołowa", "idol"],
    ["Im więcej techniki, tym gorsze wyniki.", "przysłowie"],
    ["Siła grawitacji jest proporcjonalna do iloczynu mas i odwrotnie proporcjonalna do kwadratu odległości między ich środkami.", "prawo"],
    ["lot na Marsa", "podróże"],
    ["influencer Rybosław Rybson", "znana osoba"],
    ["🐟", "🐟"],
    ["Rysunek Odręczny", "kierunek"],
    ["barszcz z automatu", "trunek"],
    ["🐟", "🐟"]
];

var I = -1;
var set, tes = new Set([",", ".", " "]);;
const pre = document.querySelector("pre");
const inp = document.querySelector("input");
const cat = document.querySelector("p");
next();
[document.body].forEach(f=>{f.onkeydown = (e) => add(ignore(e).key)});

