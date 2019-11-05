export class Personne {
  id: number;
  nom: string;
  prenom: string;
  age: number;
  cin: number;
  Job: string;
  path: string;
  constructor(id: number = 0, nom: string = '', prenom: string = '', age: number = 0,
              cin: number = 0, Job: string =  '', path: string = '') {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.cin = cin;
    this.Job = Job;
    this.path = path;
  }
}
