export default function About() {
  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <a href="#" className="block w-full p-6 bg-white border border-Slate-50 rounded-lg shadow hover:bg-Slate-50 dark:bg-Slate-50 dark:border-Slate-50 dark:hover:bg-Slate-50">
        <h4 className="mb-2 text-xl font-bold tracking-tight text-Slate-50 dark:text-white">
          Instrucciones del Juego
        </h4>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-Slate-50 dark:text-white">
          Objetivo:
        </h5>
        <p className="font-normal text-Slate-50 dark:text-Slate-50">
          <ul  className="list-disc">
            <li>
              La campaña tiene como objetivo reconocer la gestión de renovación priorizada que los equipos de renovaciones de cada uno de los Agentes participantes realizarán.
            </li>
          </ul>
        </p>

        <h5 className="mb-2 text-xl font-bold tracking-tight text-Slate-50 dark:text-white">
           Grupo objetivo
          </h5>
        <p className="font-normal text-Slate-50 dark:text-Slate-50">
          ¿Qué es?
          <ul className="list-disc">
            <li>
              El grupo objetivo es el conjunto de pólizas a renovar, con base al cual se calculará el valor del incentivo. Solamente las pólizas que estén en el grupo objetivo serán contabilizadas para la Campaña “Copa Renueva”.
            </li>
            <li>
              El listado del grupo objetivo de pólizas a renovar se publicará previo al inicio de la Campaña, en la página web.
            </li>
          </ul>
        </p>

        <h5 className="mb-2 text-xl font-bold tracking-tight text-Slate-50 dark:text-white">
          Equipo de renovadores:
        </h5>
        <p className="font-normal text-Slate-50 dark:text-Slate-50">
          ¿Qué es?
          <ul className="list-disc">
            <li> El equipo de renovadores está conformado por las personas dentro de la estructura del Agente que se encargan de gestionar las renovaciones de los grupos objetivo.</li>
            <li> Cada Agente podrá inscribir a un máximo de 5 personas, en su equipo de renovadores.</li>
            <li> Uno o varios de los renovadores podrán ser reemplazos, siempre que no se altere el número de renovadores.</li>
          </ul>
        </p>

        <h5 className="mb-2 text-xl font-bold tracking-tight text-Slate-50 dark:text-white">
          Duración:
        </h5>
        <p className="font-normal text-Slate-50 dark:text-Slate-50">
          <ul className="list-disc">
            <li>
              La campaña se llevará a cabo durante seis meses del presente año: abril, mayo, junio, julio, agosto y septiembre.
            </li>
          </ul>
        </p>
        
        <h5 className="mb-2 text-xl font-bold tracking-tight text-Slate-50 dark:text-white">
          Seguimiento:
        </h5>
        <p className="font-normal text-Slate-50 dark:text-Slate-50">
          <ul className="list-disc">
            <li>
              El equipo de renovadores y el líder de cada Agente podrá conocer el resultado de la campaña con corte mensual, a través de la página web.
            </li>
            <li>
              En cada corte mensual, se publicará también el valor aproximado del incentivo obtenido por las renovaciones hasta la fecha de corte.
            </li>
          </ul>
        </p>
        
        <h5 className="mb-2 text-xl font-bold tracking-tight text-Slate-50 dark:text-white">
          Resultados:
        </h5>
        <p className="font-normal text-Slate-50 dark:text-Slate-50">
          <ul className="list-disc">
            <li>
              Para el cálculo del valor del incentivo, solo se contabilizarán aquellas pólizas del grupo objetivo que se mantengan activas 100 días después de su renovación.
            </li>
          </ul>
        </p>

        <h5 className="mb-2 text-xl font-bold tracking-tight text-Slate-50 dark:text-white">
          Premiación:
        </h5>
        <p className="font-normal text-Slate-50 dark:text-Slate-50">
          <ul className="list-disc">
            <li>
              Se realizarán dos premiaciones. En la primera, que se llevará a cabo en octubre del 2023; se contabilizarán las pólizas de los tres primeros meses de la campaña (abril, mayo y junio). En la segunda premiación, que se realizará en enero el 2024; se contabilizarán las pólizas de los tres meses restantes (julio, agosto y septiembre).
            </li>
            <li>
              El valor del incentivo se calculará de la siguiente manera: prima total renovada de las pólizas del grupo objetivo por el porcentaje de clientes renovados, según cada nivel.
            </li>
            <li>
              La tabla, con el detalle de los niveles y su respectivo valor de incentivo, serán socializadas con cada Agente, previo al inicio de la campaña. Del mismo modo, estará publicada en la página web
            </li>
            <li>
              El pago del incentivo se realizará a través de Gift Cards a los equipos de renovadores de cada Agente. No se realizará el pago del incentivo a través de ningún otro medio.
            </li>
            <li>
              Previo a la emisión de cada Gift Card, se acordará con el líder de cada Agente el porcentaje del valor del incentivo que se otorgará a cada uno de los renovadores; el mismo, que será entregado a través de una Gift Card.
            </li>
          </ul>
        </p>
        
      </a>
    </div>
  );
}