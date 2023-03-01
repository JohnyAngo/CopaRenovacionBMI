import { Layout, AddEdit } from 'components/users';

export default Add;

function Add() {
    return (
        <Layout>
            <h1 className="font-semibold text-xl tracking-tight">Registrar Broker</h1>
            <AddEdit />
        </Layout>
    );
}