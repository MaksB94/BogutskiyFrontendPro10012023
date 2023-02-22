class Human {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  }
  class Apartment {
    constructor() {
      this.residents = [];
    }
    addResident(human) {
      this.residents.push(human);
    }
  }  
  class House {
    constructor(maxApartments) {
      this.apartments = [];
      this.maxApartments = maxApartments;
    }
    addApartment(apartment) {
      if (this.apartments.length >= this.maxApartments) {
        console.log("Max apartments.");
        return;
      }
      this.apartments.push(apartment);
    }
  }
  const maks = new Human("Maks", "male");
  const anne = new Human("Anne", "female");
  const apartment1 = new Apartment();
  const apartment2 = new Apartment();
  apartment1.addResident(maks);
  apartment1.addResident(anne);
  const house = new House(2);
  house.addApartment(apartment1);
  house.addApartment(apartment2);