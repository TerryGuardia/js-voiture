class voiture {
    /**Créer et initialise les objets de la classe voiture.
     * @param {string} marque
     * @param {string} modele
     * @param {number} annee
     * @param {string} cylindree
     * @param {number} annee_fabriquation
     */
    constructor(marque, modele, annee, cylindree, annee_fabriquation) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.cylindree = cylindree;
        this.annee_fabriquation = annee_fabriquation;
    }
}
//On instancie la classe.
let voitureA = new voiture('bentley', 'Clio', '1990', '1461 cc', '2012');
let voitureB = new voiture('renault', 'Clio', '1990', '1461 cc', '2012');
let voitureC = new voiture('peugeot', 'Clio', '1990', '1461 cc', '2012');
let voitureD = new voiture('citroën', 'Clio', '1990', '1461 cc', '2012');

//On affiche l'objet voitureB dans la console.
console.log(voitureB);