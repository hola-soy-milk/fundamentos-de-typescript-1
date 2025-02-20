/*
 * 👇 Clase abstracta y subclases para los dulces.
 * Tienen un nombre y precio.
 */

export abstract class Candy {
  // ❗️ A `priceCents` y `name` les falta tipo. Démosles `any`.
  abstract priceCents();
  abstract name();
}

class Chocolate extends Candy {
  priceCents() {
    return 99;
  }
  name() {
    return 'Chocolate';
  }
}

class Caramel extends Candy {
  priceCents() {
    return 199;
  }
  name() {
    return 'Caramelo';
  }
}

class Marzipan extends Candy {
  priceCents() {
    return 499;
  }
  name() {
    return 'Mazapán';
  }
}

// 🛎 Todos los dulces
export const availableCandies = [
  new Chocolate(),
  new Caramel(),
  new Marzipan(),
];
