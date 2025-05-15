import animal from './kingdom.js'

//exemplo 1

const exemplo1 = new animal.Arachnid("Tarantula")
animal.introduceAnimal(exemplo1)

//exemplo 2

const exemplo2 = new animal.Crustacean("Carangueijo")
animal.introduceAnimal(exemplo2)

const exemplo3 = new animal.Reptile("Cobra")
exemplo3.polymorphism('phylum', 'possui 4 membros', animal.members(0))
animal.introduceAnimal(exemplo3)