// TODO: move to utility file

const Color = (function () {
  const randColorValue = () => Math.floor(Math.random() * 255);
  const randRGBList = () => ['r','g','b'].map((c) => randColorValue());
  const randRGB = () => ({
    toString() { return `rgb(${randRGBList()})`; }
  });

  return {
    randColorValue,
    randRGBList,
    randRGB
  };
}());

class Torus {
  constructor({color = Color.randRGB().toString(), size = 1} = {color: Color.randRGB().toString(), size: 1}) {
    this.color = color; // (String) the color value to use for the foreground, e.g. #0000FF or rgba(0, 255, 0, 0.5). Default: #000000
    this.size = size; // (Integer) the size value of the torus
  }
}

export default Torus;
