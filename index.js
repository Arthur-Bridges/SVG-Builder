import inquirer from "inquirer";
const {writeFile} = require('fs').promises
const {squareRen, circleRen, triangleRen} = require("./lib/shapes");

const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'TEXT: Enter up to (3) Characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'TEXT COLOR: Enter a color keyword (OR a hexadecimal number):',
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):',
    },
    {
      type: 'list',
      name: 'pixelImage',
      message: 'Choose which Pixel Image you would like?',
      choices: ['Circle', 'Square', 'Triangle'],
    },
  ];

class SvgFile {
    constructor(){
        this.textEl = '';
        this.shapeEl = '';
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
      }
    
      setTextElement = (text, color) => {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
      }
    
      setShapeElement = (shape) => {
        this.shapeElement = shape.render();
      }
}

const writeToFile = async (fileName, data) => {
    console.log(`Writing [${data}] to file [${fileName}]`);
    try {
      await writeFile(fileName, data);
      console.log('You have Generated a logo.svg');
    } catch (err) {
      console.error(err);
    }
  }
  
  const init = async () => {
    let svgString = '';
    const svgFile = 'logo.svg';
  
    const answers = await inquirer.prompt(questions);
    
    const {text, textColor, shapeColor, shapeImg} = answers;
  
    let userShape;
  
    switch (shapeImg.toLowerCase()) {

      case 'Square':
        userShape = new squareRen();
        break;

      case 'Circle':
        userShape = new circleRen();
        break;
      
      case 'Triangle':
        userShape = new triangleRen();
        break;

      default:
        console.log('Invalid input');
        return;
    }
  
    userShape.setColor(shapeColor);
  
    const svg = new Svg();

    svg.setTextElement(text, textColor);

    svg.setShapeElement(userShape);

    svgString = svg.render();

    console.log('Writing shape to file...');
  
    await writeToFile(svgFile, svgString);
  }
  
  init();