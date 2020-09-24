export class Kitty {
  public name: string;
  public breed: string;
  public imagePath: string;
  public description: string;
  public isSelected: boolean;

  constructor(name: string, breed: string, imagePath: string, description: string, isSelected: boolean = false) {
    this.name = name;
    this.breed = breed;
    this.imagePath = imagePath;
    this.description = description;
    this.isSelected = isSelected;
  }
}
