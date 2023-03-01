import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { userService } from 'services';
import { Nav} from 'components';

export { Layout };

function Layout({ children }) {
  
    const router = useRouter();

    const menuItems = [
        {
        href: '/',
        title: 'Resumen',
        },
        {
        href: '/reglasdeljuego',
        title: 'Instrucciones',
        },
        {
        href: '/teams',
        title: 'Mi equipo',
        },
          {
          href: '/casosespeciales',
          title: 'Casos Especiales',
        },
        {
          href: '/termandcond',
          title: 'Términos y Condiciones',
        },
        {
        href: '/users',
        title: 'Usuarios',
        },
    ];
  
  
    useEffect(() => {
        // redirect to home if already logged in
        if (userService.userValue) {
            router.push('/');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
  
  return (
    <div className='min-h-screen flex flex-col'>
        <Head>
            <title>BMI | Copa Renovacion</title>
            
            {/* eslint-disable-next-line @next/next/no-css-tags */}
            {/* <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" /> */}
        </Head>
        {/* <header className='bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase'>
          Next.js sidebar menu
        </header> */}
        {/* <Nav/> */}
        <div className='flex flex-col md:flex-row flex-1'>
        <aside className='bg-blue-900 w-full md:w-60'>
          <a href="/home" className="flex items-center">
            <img src="https://www.bmicos.com/ecuador/wp-content/uploads/sites/9/2020/12/logo-1.png" className="h-6 mr-3 sm:h-9 lg:h-auto max-w-full" />
          </a>
            <nav>
              <ul>
                {menuItems.map(({ href, title }) => (
                  <li className={`m-2 text-slate-300`} key={title}>
                    <Link href={href}>
                      <a
                        className={`flex  p-2 rounded-full hover:bg-zinc-700 cursor-pointer ${
                          router.asPath === href && 'bg-zinc-700 text-white'
                        }`}
                      >
                        {title}
                      </a>
                    </Link>
                  </li>
                ))}
                </ul>
                <div className="border-style: solid;">
                </div>
                {/* <a onClick={logout} className="nav-item nav-link">Logout</a> */}
            </nav>
          </aside>
          <main className='flex-1'>{children}</main>
        </div>
      </div>
    );
  
}
// import { useState,useEffect } from 'react';
// import { useRouter } from 'next/router';

// //export { Layout };

// export default function Layout({ children }) {
//     const router = useRouter();

//     const menuItems = [
//         {
//         href: '/',
//         title: 'Resumen',
//         },
//         {
//         href: '/about',
//         title: 'Instrucciones',
//         },
//         {
//         href: '/contact',
//         title: 'Mi equipo',
//         },
//           {
//           href: '/contact',
//           title: 'Casos Especiales',
//         },
//           {
//           href: '/contact',
//           title: 'Términos y Condiciones',
//           },
//     ];

//     useEffect(() => {
//         // redirect to home if already logged in
//         if (userService.userValue) {
//             router.push('/');
//         }

//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);
  

//     return (
//         <div className="col-md-6 offset-md-3 mt-5">
//             {children}
//         </div>
//     );
//     return (
//     <div className='min-h-screen flex flex-col'>
//       {/* <header className='bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase'>
//         Next.js sidebar menu
//       </header> */}
//       <div className='flex flex-col md:flex-row flex-1'>
//         <aside className='bg-blue-900 w-full md:w-60'>
//           <nav>
//             <ul>
//               {menuItems.map(({ href, title }) => (
//                 <li className={`m-2 text-slate-300`} key={title}>
//                   <Link href={href}>
//                     <a
//                       className={`flex  p-2 rounded-full hover:bg-zinc-700 cursor-pointer ${
//                         router.asPath === href && 'bg-zinc-700 text-white'
//                       }`}
//                     >
//                       {title}
//                     </a>
//                   </Link>
//                 </li>
//               ))}
//               </ul>
//               <div className="border-style: solid;">
//               </div>
//               <a onClick={logout} className="nav-item nav-link">Logout</a>
//           </nav>
//         </aside>
//         <main className='flex-1'>{children}</main>
//       </div>
//     </div>
//   );
// }

