export class User {
  id: number;
  name: string;
  surname1: string;
  nick: string;
  password: string;
  image: string;

  constructor(id?: number, name?: string, surname1?: string, nick?: string, password?: string, image?: string) {
        this.setId(id);
        this.setName(name);
        this.setSurname1(surname1);
        this.setNick(nick);
        this.setPassword(password);
        this.setImage(image);
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getSurname1(): string {
    return this.surname1;
  }

  getNick(): string {
    return this.nick;
  }

  getPassword(): string {
    return this.password;
  }

  getImage(): string {
    return this.image;
  }

  setId(id): void {
    this.id = id;
  }

  setName(name): void {
    this.name = name;
  }

  setSurname1(surname1): void {
    this.surname1 = surname1;
  }

  setNick(nick): void {
    this.nick = nick;
  }

  setPassword(password): void {
    this.password = password;
  }

  setImage(image: string): void {
    this.image= image;
  }
}
