function parseMD(lines) {
  let wrapper = document.querySelector(".wrapper");

  let heading = document.createElement("h1");
  wrapper.appendChild(heading);

  let ul = document.createElement("ul");
  wrapper.appendChild(ul);

  lines.forEach(line => {
    let text = line.split(" ").slice(1).join(" ");
    if (line.startsWith("# ")) {
      heading.textContent = text;
    } else if (line.startsWith("- ")) {
      let a = document.createElement("a");
      let li = document.createElement("li");

      let link = text.match(/\(.*\)/)[0].replace(/\(|\)/g, "");
      console.log(link);
      let linkText = text.match(/\[.*\]/)[0].replace(/\[|\]/g, "");
      console.log(linkText);

      a.href = link;
      a.textContent = linkText;
      li.appendChild(a)
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
  .catch(e => console.error(e));
