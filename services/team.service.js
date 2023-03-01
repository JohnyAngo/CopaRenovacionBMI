import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';

import { fetchWrapper } from 'helpers';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/teams`;
const teamSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('team')));

export const teamService = {
    team: teamSubject.asObservable(),
    get teamValue () { return teamSubject.value },
    getAll,
    getById,
    update,
    delete: _delete
};


function getAll() {
    return fetchWrapper.getTeam(baseUrl);
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

function update(id, params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params)
        .then(x => {
            // update stored team if the logged in team updated their own record
            if (id === teamSubject.value.id) {
                // update local storage
                const team = { ...teamSubject.value, ...params };
                localStorage.setItem('team', JSON.stringify(team));

                // publish updated teams to subscribers
                teamSubject.next(team);
            }
            return x;
        });
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}
