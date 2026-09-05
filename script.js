function parseMD(lines) {
  let heading = document.createElement("h1");
  document.body.appendChild(heading);

  let ul = document.createElement("ul");
  document.body.appendChild(ul);

  lines.forEach(line => {
    let text = line.split(" ").slice(1).join(" ");
    if (line.startsWith("# ")) {
      heading.textContent = text;
    } else if (line.startsWith("- ")) {
      let li = document.createElement("li");
      li.textContent = text;
      ul.appendChild(li);
    }
  });
}


fetch("README.md")
  .then(res => res.text())
  .then(text => {
    const lines = text.split("\n");
    parseMD(lines);
  })
  .catch(e => console.log(e));
