import customImage from "./image.png";
import "./index.scss";

class CustomImage {
  render() {
    const img = document.createElement("img");
    img.src = customImage;
    img.alt = "image";
    img.classList.add("custom-image");
    document.querySelector("body").appendChild(img);
  }
}

export default new CustomImage();
