import "./index.scss";

class Header {
  render(name) {
    const div = document.createElement("div");
    const nav = document.createElement("div");
    div.classList.add("header");
    nav.classList.add("nav");

    const link1 = document.createElement("a");
    const link2 = document.createElement("a");

    link1.href = "main.html";
    link1.innerText = "Main";

    link2.href = "second.html";
    link2.innerText = "Second";

    const h1 = document.createElement("h1");
    h1.innerText = name || "Page #";

    nav.appendChild(link1);
    nav.appendChild(link2);
    div.appendChild(nav);
    div.appendChild(h1);
    document.querySelector("body").appendChild(div);
  }
}

export default new Header();
