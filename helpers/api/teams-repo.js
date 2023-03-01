const fs = require('fs');

// teams in JSON file for simplicity, store in a db for production applications
let teams = require('data/teams.json');

export const teamsRepo = {
    getAll: () => teams,
    getById: id => teams.find(x => x.id.toString() === id.toString()),
    find: x => teams.find(x),
    create,
    update,
    delete: _delete
};

function create(team) {
    // generate new team id
    team.id = teams.length ? Math.max(...teams.map(x => x.id)) + 1 : 1;

    // set date created and updated
    team.dateCreated = new Date().toISOString();
    team.dateUpdated = new Date().toISOString();

    // add and save team
    teams.push(team);
    saveData();
}

function update(id, params) {
    const team = teams.find(x => x.id.toString() === id.toString());

    // set date updated
    team.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(team, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted team and save
    teams = teams.filter(x => x.id.toString() !== id.toString());
    saveData();
    
}

// private helper functions

function saveData() {
    fs.writeFileSync('data/teams.json', JSON.stringify(teams, null, 4));
}