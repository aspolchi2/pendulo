import React from "react";

const Description = () => {
  return (
    <section className="px-32 py-28 flex flex-col gap-16">
      <div className="grid grid-flow-col grid-cols-2">
        <div className="col-span-1">
          <p className="font-bold text-primary text-[28px] lexend w-[512px] m-auto">
            ¿Por qué aprender Marketing Digital en Péndulo?
          </p>
        </div>
        <div className="col-span-2 flex flex-col hepta_slab text-xl gap-10">
          <p className="w-9/12 m-auto">
            En esta capacitación, el participante va a adquirir{" "}
            <span className="text-primary font-bold">
              {" "}
              herramientas sólidas de planificación, estrategia y creatividad
              publicitaria para crear campañas exitosas{" "}
            </span>
            que podrá ir desarrollando y poniendo en práctica durante el año,
            asimilando poco a poco los contenidos.
          </p>
          <p className="w-9/12 m-auto">
            Además, el participante aprenderá a{" "}
            <span className="text-primary font-bold">
              {" "}
              gestionar y administrar las redes sociales de una empresa,
              proyecto o emprendimiento cómo se desarrolla actualmente a nivel
              profesional{" "}
            </span>{" "}
            en las agencias de publicidad. Es decir adquirirá las herramientas
            para poder ejercer como un Community Manager.
          </p>
          <p className="w-9/12 m-auto">
            El contenido de esta capacitación{" "}
            <span className="text-primary font-bold">
              está pensado para ser funcional a lo largo del tiempo con
              independencia de los cambios que realicen las redes sociales en
              sus algoritmos{" "}
            </span>
            las cuales se actualizan constantemente- aportando una sólida base
            para iniciarse en esta disciplina.
          </p>
        </div>
      </div>
      <div className="w-full h-px bg-primary"></div>
      <div className="grid grid-flow-col grid-cols-2">
        <div className="col-span-1">
          <p className="font-bold text-primary text-[28px] lexend w-[512px] m-auto">
            ¿Cómo se va a trabajar en clase?
          </p>
        </div>
        <div className="col-span-2 flex flex-col hepta_slab text-xl gap-10">
          <div className="flex flex-col gap-10">
            <p className="w-9/12 m-auto">
              Durante el primer módulo se irá analizando la marca poco a poco,
              luego el producto o servicio y a lo largo de las clases, en
              conjunto con la profesora,{" "}
              <span className="text-primary font-bold">
                {" "}
                cada participante pondrá en marcha una campaña creativa
                personalizada para redes sociales.{" "}
              </span>{" "}
              Es decir, el contenido teórico abordado en el curso se pondrá en
              práctica a un proyecto real desde la primera clase.
            </p>
            <p className="w-9/12 m-auto">
              En el segundo módulo{" "}
              <span className="text-primary font-bold">
                se aprenderá a desarrollar y ejecutar un plan de redes sociales
                (Social media plan).{" "}
              </span>
              Se proporcionarán distintas herramientas y recursos que permitirán
              llevar a la práctica el plan, abordando temas tales como trazado
              de objetivos, calendario de contenidos, redacción creativa y otros
              conocimientos necesarios para llevar a la práctica una estrategia
              desarrollada en el primer cuatrimestre, ya sea para un empren-
              dimiento propio como para el de un cliente.
            </p>
            <p className="w-9/12 m-auto">
              Cada unidad tiene su trabajo práctico para afianzar los
              conocimientos adquiridos. En las últimas clases se aprenderá a
              <span className="text-primary font-bold">
                {" "}
                medir los resultados{" "}
              </span>{" "}
              para chequear si el plan ejecutado funciona correctamente o es
              necesario realizar algunos ajustes.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-primary"></div>
      <div className="grid grid-flow-col grid-cols-2">
        <div className="col-span-1">
          <p className="font-bold text-primary text-[28px] lexend w-[512px] m-auto">
            ¿El curso sirve para trabajar en esta profesión?
          </p>
        </div>
        <div className="col-span-2 flex flex-col hepta_slab text-xl gap-0">
          <div className="flex flex-col gap-10 ">
            <p className="w-9/12 m-auto">
              Para ejercer esta profesión lo más importante es poder demostrar a
              un potencial cliente o empresa el tipo de trabajo que puedas ser
              capaz de realizar. Para lograr eso es necesario compartir trabajos
              reales que permitan evidenciar tus capacidades.
            </p>
            <p className="w-9/12 m-auto">
              El curso está acompañado de actividades prácticas para ir
              implementando desde las primeras clases el contenido en proyectos
              reales.{" "}
              <span className="text-primary font-bold">
                {" "}
                Si realizás las actividades en tiempo y forma al finalizar el
                curso contarás con un excelente proyecto que podrás mostrar a
                potenciales clientes o empresas que tengan interés en
                contratarte ya sea de Argentina como de cualquier otro país.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
