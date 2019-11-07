export class Personne {
  id: number;
  name: string;
  firstname: string;
  age: number;
  cin: number;
  job: string;
  path: string;
  constructor(id: number = 0, nom: string = '', prenom: string = '', age: number = 0,
              cin: number = 0, Job: string =  '', path: string = '') {
    this.id = id;
    this.name = nom;
    this.firstname = prenom;
    this.age = age;
    this.cin = cin;
    this.job = Job;
    this.path = path;
  }
}
