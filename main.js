import animal from './kingdom.js'

const exemplo = new animal.Arachnid("Tarantula")
console.log(`${exemplo.name} é do reino ${exemplo.kingdom}, do filo ${exemplo.filo} e da classe ${exemplo.class}.\nSuas caracteristicas são:`)

const tableData = {
    'Características do Reino': exemplo.characteristics.kingdom.join(', '),
    'Características do Filo': exemplo.characteristics.phylum.join(', '),
    'Características da Classe': exemplo.characteristics.class.join(', ')
};

console.table(tableData);