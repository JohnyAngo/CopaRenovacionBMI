import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from 'components';
import { userService, alertService } from 'services';

export { AddEdit };

function AddEdit(props) {
    const user = props?.user;
    const isAddMode = !user;
    const router = useRouter();
    
    // form validation rules 
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('Ingrese un nombre'),
        lastName: Yup.string()
            .required('Ingrese un apellido'),
        username: Yup.string()
            .required('Nombre de Broker'),
        password: Yup.string()
            .transform(x => x === '' ? undefined : x)
            .concat(isAddMode ? Yup.string().required('Ingrese una Contraseña') : null)
            .min(6, 'Password must be at least 6 characters')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // set default form values if in edit mode
    if (!isAddMode) {
        formOptions.defaultValues = props.user;
    }

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        return isAddMode
            ? createUser(data)
            : updateUser(user.id, data);
    }

    function createUser(data) {
        return userService.register(data)
            .then(() => {
                alertService.success('Broker registrado', { keepAfterRouteChange: true });
                router.push('.');
            })
            .catch(alertService.error);
    }

    function updateUser(id, data) {
        return userService.update(id, data)
            .then(() => {
                alertService.success('Broker actualizado', { keepAfterRouteChange: true });
                router.push('..');
            })
            .catch(alertService.error);
    }

    return (
        <div className="flex flex-col space-y-4">
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
            <div className="form-row">
                <div className="form-group col">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nombre</label>
                    <input id="grid-first-name" name="firstName" type="text" {...register('firstName')} className={`appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 form-control ${errors.firstName ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback text-red-500 text-xs italic">{errors.firstName?.message}</div>
                </div>
                <div className="form-group col">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Apellido</label>
                    <input id="grid-last-name" name="firstName" type="text" {...register('lastName')} className={`appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 form-control ${errors.lastName ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback text-red-500 text-xs italic">{errors.lastName?.message}</div>
                </div>   
                <div className="form-group col">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Username</label>
                    <input id="grid-email" name="email" type="text" {...register('username')} className={`appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 form-control ${errors.email ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback text-red-500 text-xs italic">{errors.username?.message}</div>
                </div>
                <div className="form-group col">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Contraseña
                        {!isAddMode && <em className="ml-1">(Leave blank to keep the same password)</em>}
                    </label>
                    <input id="grid-password" name="password" type="password" {...register('password')} className={`appearance-none block w-full s text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 form-control ${errors.password ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback text-red-500 text-xs italic">{errors.password?.message}</div>
                </div>
            </div>
            <div className="mt-5 form-row">
                <div className="form-group col">
                    <button type="submit" disabled={formState.isSubmitting} className="bg-sky-600 hovser:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Save
                    </button>
                    <button onClick={() => reset(formOptions.defaultValues)} type="button" disabled={formState.isSubmitting} className="ml-2 bg-sky-400 hovser:bg-red-700 text-white font-bold py-2 px-4 rounded">Reset</button>
                    <Link href="/users" className="ml-2 bg-red-500 hovser:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancel</Link>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
}