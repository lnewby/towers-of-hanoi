class Peg {
  constructor({color = 'brown', torusStack = []} = {color: 'brown', torusStack: []}) {
    this.color = color; // (String) the color value to use for the foreground, e.g. #0000FF or rgba(0, 255, 0, 0.5). Default: #000000
    this.torusStack = torusStack; // (Array) the list of torus objects on the peg.
  }

  canAdd(torus) {
    if (this.torusStack) {
      return this.torusStack.length ? torus.size < this.torusStack[0].size : true;
    } else {
      return false;
    }
  }

  pushTorus(torus) {
    const status = {
      error: {
        status: 'ERROR',
        message: 'Pushed torus\' size must be less than torus on the peg'
      },
      success: {
        status: 'SUCCESS',
        message: 'Torus added to the peg'
      },
    };

    if (this.canAdd(torus)) {
      this.torusStack = [torus, ...this.torusStack];
      return status.success;
    } else {
      return status.error;
    }
  }

  popTorus() {
    let poppedTorus = null
    if ((this.torusStack || []).length) {
      const [torus, ...rest] = this.torusStack;
      poppedTorus = torus;
      this.torusStack = rest;
    }

    return poppedTorus;
  }
}

export default Peg;
