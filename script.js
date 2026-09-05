const body = document.body;

fetch("README.md")
  .then(res => res.text())
  .then(text => {
    let para = document.createElement(p);
    p.innerText = text;
    document.body.appendChild(para);
  })
  .catch(e => console.log(e));
