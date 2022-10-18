import "./index.scss";

class ButtonClass {
  strText = "hello !";
  render() {
    const button = document.createElement("button");
    button.innerText = "Click";
    button.onclick = this.handleClick;
    document.querySelector("body").appendChild(button);
  }

  handleClick = () => {
    const p = document.createElement("p");
    p.innerText = this.strText;
    document.querySelector("body").appendChild(p);
  };
}

export default new ButtonClass();
