const PeopleController = {
  getAllPeople: (req, res) => {
    const order = req.query?.order;
    res.send(200, people.sort(peopleOrderer(order)));
  },

  getById: (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id == id);

    if (person) {
      return res.send(200, person);
    }

    return res.send(404);
  },

  postNewUser: (req, res) => {
    const lastId = maxId(people) + 1;
    const body = req.body;

    const newUser = { id: lastId, ...body };
    people.push(newUser);
    res.send(201, newUser);
  },

  updateUser: (req, res) => {
    let { id } = req.params;
    const { name, address } = req.body;

    id = Number(id);

    const exists = people.some((person) => person.id === id);

    if (!exists) {
      return res.send(400, { error: "User does not exist." });
    }

    const newUser = { id, name, address };

    people = people.map((person) => (person.id === id ? newUser : person));
    res.send(200, newUser);
  },

  deleteUser: (req, res) => {
    let { id } = req.params;
    id = Number(id);

    const exists = people.some((person) => person.id === id);

    if (!exists) {
      return res.send(404, { error: "User does not exist." });
    }

    people = people.filter((person) => person.id !== id);
    res.send(200, { deleted: true });
  },
};

const maxId = (people) => {
  const ordered = people.sort(peopleOrderer("desc"));
  const lastCreated = ordered[0];
  return lastCreated?.id;
};

const peopleOrderer = (order) => {
  if (order?.toLowerCase() === "desc")
    return (person1, person2) => (person2.id > person1.id ? 1 : -1);

  return (person1, person2) => (person1.id > person2.id ? 1 : -1);
};

let people = [
  { id: 1, name: "bryan", address: "madrid - spain" },
  { id: 2, name: "lan", address: "ourinhos - brasil" },
  { id: 3, name: "bah", address: "madrid - spain" },
  { id: 4, name: "predo", address: "madrid - spain" },
  { id: 5, name: "fernanda", address: "barcelona - spain" },
];

export default PeopleController;
