// Subtask 1, Delay function
// const delay = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(ms), ms);
//     });
// };

const logger = time => console.log(`Fulfilled after ${time}ms`);

// Tests
// delay(2000).then(logger); // Fulfilled after 2000ms
// delay(1000).then(logger); // Fulfilled after 1000ms
// delay(1500).then(logger); // Fulfilled after 1500ms


//Subtask 2, toggleUserState function refactoring
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: false },
];

const toggleUserState = (allUsers, username, callback) => {
  const updatedUsers = allUsers.map(user =>
    user.name === username ? { ...user, active: !user.active } : user
  );

  callback(updatedUsers);
};

// Currently the function works like this
toggleUserState(users, 'Mango', console.table);
toggleUserState(users, 'Ajax', console.table);

// The function should work like this
// toggleUserState(users, 'Mango').then(console.table);
// toggleUserState(users, 'Ajax').then(console.table);