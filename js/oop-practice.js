// STEP 1
// class Cat {
//     constructor(){

//     }   
// }

// function Dog() {

// }
// STEP 2
// const cat = new Cat();
// const dog = new Dog();
// STEP 3
// class Animal {
//     constructor(){
//         console.log ('The Animal has been created.');
//     }
// }
// STEP 4
// class Animal {
//     constructor(type){
//         this.type = type;
//         console.log ('The ' + type + ' has been created.');
//     }
// }
// const mouse = new Animal('mouse');
// const lion = new Animal('lion');
// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length){
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//         console.log("The animal is a " + type + " the breed is " + breed + " , the color is " + color + " and it is " + height + " tall and " + length + " in length.")
//     }
// }
// const cheetah = new Animal('cheetah', 'Tanzanian', 'white-yellowish', '3.1 ft', '135 cm');
// STEP 6
// class Animal {
//     constructor(type, breed, color, height, length){
//          this.type = type;
//          this.breed = breed;
//          this.color = color;
//          this.height = height;
//          this.length = length;
//          let animals = [this.type, this.breed, this.color, this.height, this.length]
        
//         for(let animal in animals){
//             console.log(animals);
//         }
//     }
// }
// const monkey = new Animal('monkey', 'africa', 'brown', '2ft', '2.2 ft');
// const bear = new Animal('bear', 'grizzle', 'brown', '8ft', '9 ft');
// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length){
//          this.type = type;
//          this.breed = breed;
//          this.color = color;
//          this.height = height;
//          this.length =  length;
//          let animals = [this.type, this.breed, this.color, this.height, this.length]
        
//         for(let animal in animals){
//             console.log(animals[animal]);
//         }
//     }
//     speak = function () {
//         if (this.type == 'dog') {
//             //console.log(this.type);
//            console.log( 'The ' +  this.color + " " + this.type + ' is barking!');
//         }else if (this.type == 'cat') {
//             console.log( 'The ' + this.color + " " + this.type + ' is meowing!');
//         }
//     }
// }
// const cat = new Animal('cat', 'pet', 'black', '2ft', '2ft');
// cat.speak();
// const dog = new Animal('dog', 'pit bull', 'brown and white', '3ft', '3 ft');
// dog.speak();
// STEP 8
// class Animal {
//     constructor(type, breed, color, height, length){
//          let _type = type;
//          let _breed = breed;
//          let _color = color;
//          let _height = height;
//          let _length =  length;
//          let animals = [_type, _breed, _color, _height, _length]
//         for(let animal in animals){
//             console.log(animals[animal]);
//         }
//         let checkType = function(){
//             if (_type === 'dog'){
//              console.log( `The ${_type} has made a noise!`);   
//             }
//             else {
//                 console.log( `The ${_type} has made a noise!`);
//             }
//         }
//         this.speak = function(){
//             return checkType();
//         }
//     }
    
// }
// const cat = new Animal('cat', 'pet', 'black', '2ft', '2ft');
// cat.speak();
// const dog = new Animal('dog', 'pit bull', 'brown and white', '3ft', '3 ft');
// dog.speak();
// STEP 9
