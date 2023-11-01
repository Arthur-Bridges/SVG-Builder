import inquirer from 'inquirer';
import {writeFile} from 'fs/promises';
import {Square, Circle, Triangle} from './lib/shapes';

class SvgFile {
    constructor(){
        this.textElement = '';
        this.shapeElement = '';
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

const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to (3) Characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword (OR a hexadecimal number):',
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword (OR a hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shapeImg',
      message: 'Choose which Shape Image you would like?',
      choices: ['Circle', 'Square', 'Triangle'],
    },
  ];

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

      case 'square':
        userShape = new Square();
        break;

      case 'circle':
        userShape = new Circle();
        break;
      
      case 'triangle':
        userShape = new Triangle();
        break;

      default:
        console.log('Invalid input');
        return;
    }
  
    userShape.setColor(shapeColor);
  
    const svg = new SvgFile();

    svg.setTextElement(text, textColor);

    svg.setShapeElement(userShape);

    svgString = svg.render();

    console.log('Writing shape to file...');
  
    await writeToFile(svgFile, svgString);
  }
  
  init();


