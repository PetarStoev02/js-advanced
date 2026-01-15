function cityTaxes(name, population, treasury) {
  const result = {
    name: name,
    population: population,
    treasury: treasury,
    taxRate: 10,
    collectTaxes() {
        this.treasury+= Math.floor(this.population*this.taxRate)
    },
    applyGrowth(persent) {
        this.population+=Math.floor(this.population*persent/100)
    },
    applyRecession(persent) {
        this.treasury-=Math.floor(this.treasury*persent/100)
    },
  };
  return result;
}
const city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);
