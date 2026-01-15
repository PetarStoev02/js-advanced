function solve(arr) {
  let result = [];
  for (let card of arr) {
    const face = card.slice(0, -1);
    const suit = card.slice(-1);

    try {
      const card = createCard(face, suit);
      result.push(card);
    } catch (err) {
      result = [`Invalid card: ${card}`];
    }
  }

  console.log(result.join(" "));

  function createCard(face, suit) {
    const validFaces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    let validSuit = {
      S: "\u2660",
      H: "\u2665",
      D: "\u2666",
      C: "\u2663",
    };

    if (validFaces.includes(face) === false) {
      throw new Error(`Invalid card: ${face}`);
    }

    if (validSuit[suit] === undefined) {
        throw new Error(`Invalid suit: ${suit}`);
      }

    let result = {
      face,
      suits: validSuit[suit],
      toString() {
        return this.face + this.suits;
      },
    };

    return result;
  }
}
solve(["AS", "10D", "KH", "2C"]);
