export class Post {
  id: string;
  titre: string;
  contenu: string;

  constructor(id: string, titre: string, contenu: string) {
    this.id = id;
    this.titre = titre;
    this.contenu = contenu;
  }
}
