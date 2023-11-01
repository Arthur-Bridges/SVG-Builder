import {Square, Circle, Triangle} from ('./shapes');

//Square Test
describe('Shapes Rendering', () => {
    test('Checking successful render for Square', () => {
        const shape = new Square();
        const color = 'blue';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});

//Circle Test
describe('Shapes Rendering', () => {
    test('Checking successful render for Circle', () => {
        const shape = new Circle();
        const color = 'blue';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});

//Triangle Test
describe('Shapes Rendering', () => {
    test('Checking successful render for Triangle', () => {
        const shape = new Triangle();
        const color = 'blue';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
    });
});