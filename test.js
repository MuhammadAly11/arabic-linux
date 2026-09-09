// let mdLink = "- [منتدى لنكس](https://www.linuxac.org/)"
//
// let tmp = "[hello]    so let's [see].";
// let test = [...tmp.matchAll(/\[[^\]]*\]/g)];
// console.log(test);
// test = tmp.match(/\[[^\]]*\]/g);
// console.log(test);

let text =
  "[first link](https://www.linuxac.org/) - some normal text & [another link](https://kernel.org/)";

let p = document.createElement("p");

console.count("CODE START");
while (true) {
  const match = text.match(/\[[^\]]*\]\([^\)]*\)/);
  if (!match) {
    p.append(text);
    break;
  }
  console.log(match);

  if (match.index > 0) {
    p.append(text.substring(0, match.index));
  }

  const [full, lable, url] = text.match(/\[([^\]]*)\]\(([^\)]*)\)/);
  let a = document.createElement("a");
  a.href = url;
  a.textContent = lable;
  p.append(a);

  text = text.substring(match.index + match[0].length);
}

console.log(p);
document.body.appendChild(p);
console.count("CODE END");
