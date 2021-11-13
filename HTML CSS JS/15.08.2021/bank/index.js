const client = [
  {
    name: "liel",
    email: "jhggbhnjm@gmail.com",
    phone: "0547080093",
    balanc: 525141,
    id: 958471843,
  },
  {
    name: "dana",
    email: "xcvbnm@gmail.com",
    phone: "0544589621",
    balanc: 5263,
    id: 847193825,
  },
  {
    name: "rachel",
    email: "jhgfd@gmail.com",
    phone: "054419572",
    balanc: 85412,
    id: 718293461,
  },
  {
    name: "or",
    email: "zsawertyui@gmail.com",
    phone: "0548197340",
    balanc: -54123,
    id: 718092548,
  },
  {
    name: "lea",
    email: "xswed@gmail.com",
    phone: "0547185249",
    balanc: -21463,
    id: 809372815,
  },
];

function addclient(client1) {
  client.push(client1);
  return client;
}

function Withdraw(id, client, amount) {
  for (let i = 0; i < client.length; i++) {
    if (id == client[i].id) {
      client[i].balanc -= amount;
      return client;
    }
  }
}

function deletclient(client1) {
  client.pop(client1);
  return client;
}

function findByID(addId) {
  for (let i = 0; i < client.length; i++) {
    if (addId == client[i].id) {
      return client[i];
    }
  }
}

function Deposit(id, client, balanc) {
  for (let i = 0; i < client.length; i++) {
    if (id == client[i].id) {
      client[i].balanc += balanc;
      return client;
    }
  }
}

function blockClient( client = []) {
  for (let i = 0; i < client.length; i++) {
    for (let j = 0; j < client[i].balanc; j++) {
      if (client[i].balanc < 100) {
        let block = client[i];

        return block;
      }
    }
  }
}
console.log(client);
console.log(blockClient());
