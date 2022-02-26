  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let pindex = 0; pindex < 2; pindex++) {
    for (let aindex = 0; aindex < 2; aindex++) {
      for (let nindex = 0; nindex < 2; nindex++) {
        console.log(pronoun[pindex] + adj[aindex] + noun[nindex] + ".com");
      }
    }
  };
