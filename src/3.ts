interface ICharacter {
  name: string;
  level: number;
  introduce(phrase: string): void;
  levelUp(): void;
}

interface ISpellCaster {
  castSpell(): void;
}

// Клас Wizard уже правильний:
class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error('Level too low');
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ', ' + this.name);
  }

  castSpell(): void {
    console.log('Casting a spell, behold my power!');
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

export {};