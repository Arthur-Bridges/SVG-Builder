class Shapes {
    constructor(){
        this.color
    }

    setColor (color) {
        this.color = color;
    }
}

class Render {
    squareRen (color) {
        return `<rect x="50" height="200" width="200" fill="${color}">`;
    }
    
    circleRen (color) {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`;
    }

    triangleRen (color) {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`;
    }
}

class squareRen extends Shapes {
    render(){
        let squareRend = new Render().squareRen(this.color);
        return squareRend;
    }
}

class circleRen extends Shapes {
     render(){
        let circleRend = new Render().circleRen(this.color);
        return circleRend;
    }
}

class triangleRen extends Shapes {
    render(){
        let triangleRend = new Render().triangleRen(this.color);
        return triangleRend;
    }
}

module.exports = {squareRen, circleRen, triangleRen};