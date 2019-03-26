class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGretting() {
    return `Hi! ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year${this.age > 1 ? "s" : ""} old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description = `${description} Their major is ${this.major}`;
    }

    return description;
  }
}

const me = new Student("Shock Liang", 1, "Computer Science");
console.log(me.getDescription());
const other = new Student("Some one", 17);
console.log(other.getDescription());
