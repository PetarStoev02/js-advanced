
describe("movieTheater", () => {
    describe("ageRestrictions", () => {
      it("the value of the parameter movieRating  is equal to G", () => {
        expect(() => movieTheater.ageRestrictions('G')).to.equal(
          "All ages admitted to watch the movie"
        );
      });
      it("the value of the parameter movieRating  is equal to PG", () => {
        expect(
          movieTheater.ageRestrictions('PG')
        ).to.equal("Parental guidance suggested! Some material may not be suitable for pre-teenagers");
      });
      it("the value of the parameter movieRating  is equal to R", () => {
        expect(
          movieTheater.ageRestrictions('R')
        ).to.equal("Restricted! Under 17 requires accompanying parent or adult guardian");
      });
      it("the value of the parameter movieRating  is equal to NC-17", () => {
        expect(
          movieTheater.ageRestrictions('NC-17')
        ).to.equal("No one under 17 admitted to watch the movie");
      });
      it("if the above conditions are not met", () => {
        expect(
          movieTheater.ageRestrictions('RE')
        ).to.equal("There are no age restrictions for this movie");
      });
    });
    describe("moneySpent", () => {
      it("total cost is bigger than 50", () => {
        expect(() => movieTheater.moneySpent(5,["Nachos"],["Soda"])).to.equal(
          `The total cost for the purchase with applied discount is ${totalCost}`
        );
      });
      it("total cost is less than 50", () => {
        expect(() => movieTheater.moneySpent(1,["Nachos"],["Soda"])).to.equal(
          `The total cost for the purchase is ${totalCost}`
        );
      });
      it("validate input", () => {
        expect(movieTheater.moneySpent("132",123,"23")).to.throw("Invalid input");
      });

      it("validate input", () => {
        expect(movieTheater.moneySpent(12,["Nachos"],23)).to.throw("Invalid input");
      });

      it("validate input", () => {
        expect(movieTheater.moneySpent(12)).to.throw("Invalid input");
      });

      it("validate input", () => {
        expect(movieTheater.moneySpent(12,["Nachos"])).to.throw("Invalid input");
      });
      it("validate input", () => {
        expect(movieTheater.moneySpent(1,1)).to.throw("Invalid input");
      });

      it("validate input", () => {
        expect(movieTheater.moneySpent([], "1")).to.throw("Invalid input");
      });

      it("check with valid inputs", () => {
        expect(
          movieTheater.moneySpent(1,["Nachos"],["Soda"])
        ).to.equal(`The total cost for the purchase is 23.50`);
        expect(
          movieTheater.moneySpent(["Peter", "Ivan", "John"], 0)
        ).to.equal("Ivan, John");
      });
      
    });

    describe("reservation", () => {
      it("check with invalid inputs", () => {
        expect(() => movieTheater.reservation(1, 1)).to.throw(
          "Invalid input"
        );
        expect(() => movieTheater.reservation([], "1")).to.throw(
          "Invalid input"
        );
        expect(() => movieTheater.reservation([], -1)).to.throw(
          "Invalid input"
        );
        expect(() => movieTheater.reservation(["Peter"], 1)).to.throw(
          "Invalid input"
        );
        expect(() => movieTheater.reservation(["Peter"], [])).to.throw(
          "Invalid input"
        );
        expect(() => movieTheater.reservation("1", 1)).to.throw(
          "Invalid input"
        );
      });
      it("check with valid inputs", () => {
        expect(
          movieTheater.reservation(([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }]), 6)
        ).to.equal("2");
        expect(
          movieTheater.reservation(([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }]), 0)
        ).to.deep.equal([]);
      });
    });
  });
  