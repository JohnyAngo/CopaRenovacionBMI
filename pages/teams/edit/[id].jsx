import { useState, useEffect } from 'react';

import { Layout, AddEdit } from 'components/users';
import { Spinner } from 'components';
import { teamService, alertService } from 'services';

export default Edit;

function Edit({ id }) {
    const [team, setTeam] = useState(null);

    useEffect(() => {
        // fetch team and set default form values if in edit mode
        teamService.getById(id)
            .then(x => setTeam(x))
            .catch(alertService.error)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout>
            <h1>Edit team</h1>
            {team ? <AddEdit team={team} /> : <Spinner /> }
        </Layout>
    );
}

export async function getServerSideProps({ params }) {
    return {
        props: { id: params.id }
    }
}