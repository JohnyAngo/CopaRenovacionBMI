import { userService } from 'services';
import { Link,Nav } from 'components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// export default Home;

// function Home() {
//     return (
//         <div className='flex h-full flex-col justify-center items-center'>
//             <div className="container">
//                 <h1>¡Hola {userService.userValue?.firstName} Renovador!</h1>
//                 <p>Bienvenido/a a la COPA RENUEVA. Donde ganas, renovando.</p>
//                 <p><Link href="/users">Manage Users</Link></p>
//                 <span className='text-7xl'>🏡</span>
//             </div>
//         </div>
//     );
// }

export default function Home() {
  const percentage = 2;
  const percentagea = 10;
  return (
    <div>
      <div className='m-10 flex h-full flex-col items-left'>
            <h1 className="font-semibold text-xl tracking-tight">¡Hola, Renovador!</h1>
            <p className='text-slate-500'>{userService.userValue?.firstName} Bienvenido/a a la COPA RENUEVA. Donde ganas, renovando.</p>
            {/* <p><Link href="/users">Manage Users</Link></p> */}
      </div>

      <div className="items-center inline-block">
        <div className="ml-20 bg-sky-900 inline-block items-center mt-8 max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="text-white mb-2 text-1xl font-bold tracking-tight dark:text-white">Grupo Objetivo</h5>
            <p className="text-white mb-3 font-normal text-gray-700 dark:text-gray-400">Polizas a renovar</p>
            <h1 className="text-white mb-2 text-7xl font-bold tracking-tight dark:text-white">560</h1>
            {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Descargar Base
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a> */}
        </div>

        <div className="p-8 ml-20 inline-block items-center mt-8 max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Renovada</h5>
            <h1 className="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">560</h1>
        </div>

        <div className="p-8 ml-20 inline-block items-center mt-8 max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Canceladas</h5>
            <h1 className="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">230</h1>
        </div>

        <div className="p-8 ml-20 inline-block items-center mt-8 max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Persistencia</h5>
            <h1 className="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">560</h1>
        </div>
      </div>

      <div className="items-center inline-block">
       
        <div className="ml-20 inline-block items-center mt-8 max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Nivel de incentivo</h5>
          <CircularProgressbar className="h-20" value={percentage} text={`${percentage}k`} />
        </div> 

        <div className="ml-20 inline-block items-center mt-8 max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Valor aproximado de incentivo</h5>
          <CircularProgressbar className="h-20" value={percentagea} text={`${percentagea}k`} />
        </div> 

        <div className="ml-20 bg-sky-900 inline-block items-center mt-8 max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-white dark:text-white">Fecha cierre</h5>
            <h1 className="mb-2 text-6xl font-bold tracking-tight text-white dark:text-white">8 Octubre</h1>
        </div>
      </div>

    </div>
  );
}

