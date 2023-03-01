import { useState, useEffect } from 'react';

import { Link, Spinner } from 'components';
import { Layout } from 'components/users';
import { userService } from 'services';

export default Index;

function Index() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
    }, []);

    function deleteUser(id) {
        setUsers(users.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        userService.delete(id).then(() => {
            setUsers(users => users.filter(x => x.id !== id));
        });
    }

    function editUser(id) {
        userService.getById(id).then(() => {
            setUsers(users => users.filter(x => x.id !== id));
        });
    }
    

    return (
        <Layout>
            <div className="h-52 grid grid-cols-3 gap-4 content-center">
                <h1 className="text-2xl font-bold tracking-tight text-Slate-50 dark:text-white">Gestión de Brokers</h1>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <Link href="/users/add" className="bg-sky-600 hovser:bg-red-700 text-white font-bold py-2 px-4 rounded">Registrar Broker</Link>
                </div>
                <div className="form-group col">
                    <table className="mt-10 w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Nombre</th>
                            <th scope="col" className="px-6 py-3">Apellido</th>
                            <th scope="col" className="px-6 py-3">Broker</th>
                            <th style={{ width: '10%' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map(user =>
                            <tr className="bg-white items-left border-b dark:bg-gray-800 dark:border-gray-700" key={user.id}>
                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.firstName}</td>
                                <td className="px-6 py-4 items-center">{user.lastName}</td>
                                <td className="px-6 py-4 items-center">{user.username}</td>
                                <td style={{ whiteSpace: 'nowrap' }}>
                                    <button onClick={() => editUser(user.id)} className="bg-sky-600 hovser:bg-red-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                                    <button onClick={() => deleteUser(user.id)} className="ml-1 bg-red-500 hovser:bg-red-700 text-white font-bold py-2 px-4 rounded" disabled={user.isDeleting}>
                                        {user.isDeleting 
                                            ? <span className="spinner-border spinner-border-sm"></span>
                                            : <span>Delete</span>
                                        }
                                    </button>
                                </td>
                            </tr>
                        )}
                        {!users &&
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td colSpan="4">
                                    <Spinner />
                                </td>
                            </tr>
                        }
                        {users && !users.length &&
                            <tr>
                                <td colSpan="4" className="text-center">
                                    <div className="p-2">No Users To Display</div>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </Layout>
    );
}
