const animal = {
    members(num) {
        return num == 0 ? "possui nem um membro" : num == 1 ? "possui 1 membro": `possui ${num} membros`
    },
    wings(num) {
        return num == 0 ? "possui nem um asa" : num == 1 ? "possui 1 asa": `possui ${num} asas`
    },
    //Reino
    get Animal() {
        return class {
            constructor(name) {
                this.name = name;
                this.kingdom = "Animalia";
                this.characteristics = { // Objeto substituindo o array
                    'kingdom':  ["possui colágeno", "estagio embrionário blástula", "Heterotrófico"],
                    'phylum':   [],
                    'class':    []
                };
            }
            
            addFeature(type, feature) {
                if (!this.characteristics[type].includes(feature)) {
                    this.characteristics[type].push(feature);
                }
            }
            
            removeFeature(type, feature) {
                this.characteristics[type] = this.characteristics[type].filter(f => f.toLowerCase() !== feature.toLowerCase());
            }
            polymorphism(fatherGroup, oldFeature, newFeature) {
                this.removeFeature(fatherGroup, oldFeature)
                let childGroup;
                if(fatherGroup == 'kingdom') {
                    childGroup = 'phylum'
                }else if ( fatherGroup == 'phylum') {
                    childGroup = 'class'
                }
                this.addFeature(childGroup, newFeature)
            }
        };
    },
    //Filos
    get Chordate() {
        return class extends animal.Animal {
            constructor(name) {
                super(name) // herdando atributos da classe pai
                this.phylum = "cordados" // possui filo
                this.addFeature('phylum', "Coluna vertebral") // atribuindo caracteristica
                this.addFeature('phylum', animal.members(4)) // atribuindo caracteristica
                this.addFeature('phylum', "Sistema nervoso desenvolvido") // atribuindo caracteristica
            }
        }
    },
    get Arthropod() {
        return class extends animal.Animal {
            constructor(name) {
                super(name) // herdando atributos da classe pai
                this.phylum = "artrópede" // possui filo
                this.addFeature('phylum', "Exoesqueleto de quitina") // atribuindo caracteristica
                this.addFeature('phylum', "corpo segmentado em 3 tagmas") // atribuindo caracteristica
                this.addFeature('phylum', "Exoesqueleto de quitina") // atribuindo caracteristica
                this.addFeature('phylum', "Apêndices articulados") // atribuindo caracteristica
                this.addFeature('phylum', "Antenas") // atribuindo caracteristica
            }
        }
    },
    //Classes de Chordados
    get Mammal() {
        return class extends animal.Chordate {
            constructor(name) {
                super(name) // herdando atributos da classe pai
                this.class = "mamífero" // possui classe
                this.addFeature('class', "Sangue quente") // atribuindo caracteristica
                this.addFeature('class', "Presença de pelos") // atribuindo caracteristica
                this.addFeature('class', "Glândulas mamárias") // atribuindo caracteristica
            }
        };
    },
    get Reptile() {
        return class extends animal.Chordate {
            constructor(name) {
                super(name) // herdando atributos da classe pai
                this.class = "réptil" // possui classe
                this.addFeature('class', "Sangue frio") // atribuindo caracteristica
                this.addFeature('class', "Ovos com casca") // atribuindo caracteristica
                this.addFeature('class', "Pele com escamas") // atribuindo caracteristica
            }
        }
    },
    get Bird() {
        return class extends animal.Reptile {
            constructor(name) {
                super(name) // herdando atributos da classe pai
                this.class = "aves" // possui classe
                this.removeFeature('class', "Pele com Escamas")
                this.removeFeature('class', "Sangue frio")
                this.addFeature('class', "penas") // atribuindo caracteristica
                this.addFeature('class', "Bico córneo") // atribuindo caracteristica
                this.addFeature('class', animal.wings(2)) // atribuindo caracteristica
            }
        }
    },
    get Arachnid() {
        return class extends animal.Arthropod {
            constructor(name) {
                super(name) // herdando atributos da classe pai
                this.class = "aracnídeo" // possui classe
                this.addFeature('class', animal.members(8)) // atribuindo caracteristica
                this.addFeature('class', "Ovos com casca") // atribuindo caracteristica
                this.addFeature('class', "Pele com escamas") // atribuindo caracteristica
                this.removeFeature('phylum', 'Antenas')
                this.polymorphism('phylum', 'corpo segmentado em 3 tagmas', 'corpo segmentado em 2 tagmas')
            }
        }
    },
    get Insect() {
        return class extends animal.Arthropod {
            constructor(name) {
                super(name) // herdando atributos da classe pai
                this.class = "inseto" // possui classe
                this.addFeature('class', animal.members(6)) // atribuindo caracteristica
                this.addFeature('class', animal.wings(4)) // atribuindo caracteristica
                this.addFeature('class', 'metamorfose') // atribuindo caracteristica
            }
        }
    },
    get Crustacean() {
        return class extends animal.Arthropod {
            constructor(name) {
                super(name) // herdando atributos da classe pai
                this.class = "inseto" // possui classe
                this.addFeature('class', animal.members(6)) // atribuindo caracteristica
                this.addFeature('class', animal.wings(4)) // atribuindo caracteristica
                this.addFeature('class', 'metamorfose') // atribuindo caracteristica
            }
        }
    }
}
export default animal
