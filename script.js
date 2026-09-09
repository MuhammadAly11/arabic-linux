function parseMD(lines) {
  let wrapper = document.querySelector(".wrapper");

  let heading = document.createElement("h1");
  wrapper.appendChild(heading);

  let ul = document.createElement("ul");
  wrapper.appendChild(ul);

  lines.forEach((line) => {
    let text = line.split(" ").slice(1).join(" ");
    if (line.startsWith("# ")) {
      heading.textContent = text;
    } else if (line.startsWith("- ")) {
      let li = parseLine(text);
      ul.appendChild(li);
    }
  });
}

fetch("README.md")
  .then((res) => res.text())
  .then((text) => {
    const lines = text.split("\n");
    parseMD(lines);
  })
  .catch((e) => console.error(e));

function parseLine(line) {
  let li = document.createElement("li");
  while (true) {
    const match = line.match(/\[[^\]]*\]\([^\)]*\)/);
    if (!match) {
      li.append(line);
      break;
    }

    if (match.index > 0) {
      li.append(line.substring(0, match.index));
    }

    const [full, lable, url] = line.match(/\[([^\]]*)\]\(([^\)]*)\)/);

    let a = document.createElement("a");
    a.href = url;
    a.textContent = lable;
    li.append(a);

    line = line.substring(match.index + match[0].length);
  }
  return li;
}
