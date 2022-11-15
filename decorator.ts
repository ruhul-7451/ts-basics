function MenuItem(target: Function) {
  target.prototype.id = "menu-item";
}
@MenuItem
class Pizza {
  id: string;
}

class Hamburger {
  id: string;
}

console.log(new Pizza().id);
console.log(new Hamburger().id);
