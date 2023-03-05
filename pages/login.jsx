import styles from './../styles/Login.module.css'
import FormLogin from '../components/Forms/FormLogin'
import {useState} from 'react';
import { login } from './../auth'
import Router from 'next/router';
import { Image } from '@nextui-org/react';
import { userService, alertService } from 'services';
import { useRouter } from 'next/router';

export default function Login() {
    const [data, setData] = useState({
        email: 'admin',
        password: '123456'
    });

    const router = useRouter();

    const setInput = e => {
        setField(e.target.name, e.target.value);
    }
    const setField = (field, value) => {
        setData({
            ...data,
            [field] : value
        });
    }

    const logIn = async (e) => {
        e.preventDefault();
        // await login(data.email, data.password);
        // Router.push('/resumen');
        return userService.login(data.email, data.password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/resumen';
                router.push(returnUrl);
            })
        .catch(alertService.error);
    }


    return (
        <main className={styles.mainLogin}>
            <Image
                src="/backgroundCopa.png"
                alt="background"
                layout="fill"
                objectFit="cover"
            /> 
            <FormLogin
                setInput={setInput}
                data={data}
                login={logIn}
            />
        </main>
    )
}
