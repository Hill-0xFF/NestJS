export class Barber {
  private name: string;
  private email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  public getEmail() {
    return this.email;
  }

  public setEmail(email) {
    this.email = email;
  }

  public getName() {
    return this.name;
  }

  public setName(name) {
    return (this.name = name);
  }
}
