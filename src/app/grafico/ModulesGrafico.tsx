import React from "react";
import { lexend } from "../layout";
import ArrowDown from "../components/testimonials/ArrowDown";
import { hepta_slab } from "../asesoriadeimagen/components/price/PriceOutside";

const ModulesGrafico = () => {
  return (
    <section
      className={`${lexend.className} bg-primary xl:p-32 p-8 font-medium`}
    >
      <p className="text-right sm:text-xl text-white pb-2 text-base">
        CONTENIDOS
      </p>
      <div className="h-px bg-white"></div>
      <div
        className={` text-yellow  sm:px-10 pt-[98px] sm:text-6xl font-bold sm:pb-16 text-2xl mb-6`}
      >
        <div className={`${hepta_slab.className} flex justify-between w-full `}>
          <p>Módulo</p>
          <p>.01</p>
        </div>
        <p
          className={`${lexend.className} text-white sm:text-3xl text-xs font-medium`}
        >
          HERRAMIENTAS DEL DISEÑO
        </p>
      </div>
      <div className="h-px bg-white"></div>
      <div className="sm:grid grid-cols-2   w-full sm:bg-white bg-primary gap-[1px] flex flex-col ">
        <div className="relative bg-primary flex justify-center items-center text-white sm:h-96 h-52">
          <div className="inset-0 bg-cover bg-center hover:opacity-0 flex items-center gap-2 z-0">
            <p className="lg:w-[25ch] text-center sm:font-bold">
              ADOBE ILLUSTRATOR <br />| Manejo de software
            </p>
            <ArrowDown />
          </div>
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center  text-white font-semibold bg-primary flex-col">
            <ul className="bg-primary xl:text-lg xl:w-[450px] flex flex-col justify-center items-center sm:gap-4 sm:text-xs text-[10px] gap-4 text-center sm:text-left md:text-base">
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0">
                  Introducción al programa:{" "}
                  <span className="font-medium">
                    Uso de interfaz y espacio de trabajo. Atajos del teclado.
                  </span>
                </li>
              </span>
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0">
                  Herramientas:{" "}
                  <span className="font-medium">
                    Selección directa. Creación de formas. Rellenos de color y
                    degradado. Trazo. Texto: carácter y párrafo. Cuentagotas.
                    Alineación y organización de elementos. Rotación y espejado.
                    Líneas guía. Selección indirecta. Uso de nodos. Herramienta
                    pluma. Buscatrazos. Uso de capas y máscaras.
                  </span>
                </li>
              </span>
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0">
                  Preparación de archivo para impresión:{" "}
                  <span className="font-medium">
                    Ajustes de salida. Exportación de archivos.
                  </span>
                </li>
              </span>
            </ul>
          </div>
        </div>
        <div className="h-px bg-white sm:hidden"></div>

        <div className="relative bg-primary flex justify-center items-center text-white sm:h-96 h-52">
          <div className="inset-0 bg-cover bg-center hover:opacity-0 z-0 flex items-center gap-3 justify-between">
            <p className="xl:w-[25ch] text-center sm:font-bold  ">
              ADOBE PHOTOSHOP <br />| Manejo de software
            </p>
            <ArrowDown />
          </div>
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-6xl text-white font-semibold bg-primary flex-col">
            <ul className="bg-primary xl:text-lg xl:w-[450px] flex flex-col sm:gap-8 sm:text-xs text-[10px] gap-4 text-center sm:text-left md:text-base">
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0">
                  Introducción al programa:{" "}
                  <span className="font-medium">
                    Uso de interfaz y espacio de trabajo.
                  </span>
                </li>
              </span>
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0">
                  Herramientas:{" "}
                  <span className="font-medium">
                    Selección: lazos, varita mágica. Uso de capas. Modos de
                    fusión. Ajustes de fotografía: iluminación, color,
                    saturación. Pincel corrector. Tampón de clonar. Máscaras.
                    Ajustes de salida. Exportación.
                  </span>
                </li>
              </span>
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0">
                  Preparación de archivo para impresión:{" "}
                  <span className="font-medium">
                    Ajustes de salida. Exportación de archivos.
                  </span>
                </li>
              </span>
            </ul>
          </div>
        </div>

        <div className="col-span-2 relative bg-primary sm:flex justify-center items-center text-white sm:h-64 hidden ">
          <div className="inset-0 bg-cover bg-center hover:opacity-0 z-0 flex items-center gap-2">
            <p className="w-[25ch] text-center font-bold ">
              INTRODUCCIÓN A LA IMAGEN DIGITAL
            </p>
            <ArrowDown />
          </div>
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-6xl text-white font-semibold bg-primary flex-col">
            <ul className="bg-primary xl:text-lg xl:w-[450px] flex flex-col sm:gap-8 sm:text-xs text-[10px] gap-4 text-center sm:text-left md:text-base ">
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0">
                  Diferencia entre imágenes bitmap e imágenes vectoriales.
                </li>
              </span>
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0">
                  Resolución de imágenes.
                </li>
              </span>
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0">
                  Preparación de archivos para impresión o uso en redes
                  sociales.
                </li>
              </span>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white "></div>
      </div>
      <div
        className={`hepta_slab text-yellow  sm:px-10 pt-[98px] sm:text-6xl font-bold sm:pb-16 text-2xl mb-6`}
      >
        <div className={`${hepta_slab.className} flex justify-between w-full`}>
          <p>Módulo</p>
          <p>.02</p>
        </div>
        <p
          className={`${lexend.className} text-white sm:text-3xl text-xs  font-medium`}
        >
          HERRAMIENTAS DEL DISEÑO
        </p>
      </div>
      <div className="h-px bg-white "></div>
      <div className="sm:grid grid-cols-2   w-full sm:bg-white bg-primary gap-[1px] flex flex-col">
        <div className="relative bg-primary flex justify-center items-center text-white sm:h-96 h-52">
          <div className="inset-0  hover:opacity-0 z-0 flex items-center gap-3 p-3 justify-between">
            <p className="xl:w-[25ch] text-center sm:font-bold  m-auto text-sm ">
              INTRODUCCIÓN AL DISEÑO Y LA COMUNICACIÓN VISUAL
            </p>
            <ArrowDown />
          </div>
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-6xl text-white font-semibold bg-primary flex-col">
            <ul className="bg-primary xl:text-lg xl:w-[450px] flex flex-col sm:gap-8 sm:text-xs text-[10px] gap-4 text-center sm:text-left md:text-base w-11/12 m-auto">
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0">
                  ¿Qué es el diseño?{" "}
                  <span className="font-medium">
                    Diferencia entre arte y diseño. Forma y función. 
                  </span>
                </li>
              </span>
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0">
                  ¿Qué es la comunicación?{" "}
                  <span className="font-medium">
                    Concepto. Brief. Proceso de trabajo.
                  </span>
                </li>
              </span>
            </ul>
          </div>
        </div>
        <div className="h-px bg-white sm:hidden"></div>

        <div className="relative bg-primary flex justify-center items-center text-white sm:h-96 h-52">
          <div className="inset-0 bg-cover bg-center hover:opacity-0 z-0 flex items-center lg:gap-3">
            <p className="xl:w-[25ch] text-center sm:font-bold w-8/12 m-auto text-sm">
              COMPOSICIÓN Y LENGUAJE VISUAL
            </p>
            <ArrowDown />
          </div>
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-6xl text-white font-semibold bg-primary flex-col">
            <ul className="bg-primary xl:text-lg xl:w-[450px] flex flex-col md:gap-8 sm:text-xs text-[10px] gap-4 text-center sm:text-left md:text-base w-11/12 m-auto ">
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0">
                  Teoría del color:{" "}
                  <span className="font-medium">
                    Círculo cromático. Armonías. Psicología del color. Modos de
                    color RGB y CMYK.
                  </span>
                </li>
              </span>
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0">
                  Composición:{" "}
                  <span className="font-medium">
                    Elementos visuales básicos: líneas, texturas, puntos. Leyes
                    de la Gestalt.
                  </span>
                </li>
              </span>
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0 ">
                  Tipografía:{" "}
                  <span className="font-medium">
                    Características de las tipografías. Clasificación. Elección
                    de familias tipográficas. Composición tipográfica.
                  </span>
                </li>
              </span>
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0 ">
                  Organización de la información:{" "}
                  <span className="font-medium">Jerarquías.</span>
                </li>
              </span>
            </ul>
          </div>
        </div>
        <div className="h-px bg-white sm:hidden"></div>

        <div className="col-span-2 relative bg-primary flex justify-center items-center text-white sm:h-72 lg:h-80 h-52 ">
          <div className="inset-0 bg-cover bg-center hover:opacity-0 z-0 flex items-center gap-3">
            <p className="xl:w-[25ch] text-center sm:font-bold w-8/12 m-auto text-sm ">
              IDENTIDAD / BRANDING
            </p>
            <ArrowDown />
          </div>
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center sm:text-6xl text-white font-semibold bg-primary flex-col">
            <ul className="bg-primary xl:text-lg xl:w-[450px] flex flex-col sm:gap-8 sm:text-xs text-[10px] gap-4 text-center sm:text-left md:text-base w-11/12 m-auto ">
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0">
                  Introducción a la identidad de marca.
                </li>
              </span>
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0">
                  Construcción de logo. 
                </li>
              </span>
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <span className="hidden sm:block">·</span>
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0">
                  Creación de un manual de identidad para una marca a elección:{" "}
                  Los/as estudiantes podrán trabajar con un emprendimiento
                  propio o que elijan para desarrollar su propio manual de
                  marca.
                </li>
              </span>
              <span className="flex gap-1 items-start ml-2 w-11/12">
                <li className="sm:leading-4 md:leading-6 m-auto sm:m-0 font-medium -mt-2"></li>
              </span>
            </ul>
          </div>
        </div>
        <div className="h-px bg-white sm:hidden"></div>

        <div className=" flex justify-center items-center   bg-primary col-span-2 pt-8  sm:h-60 ">
          <p
            className={`${hepta_slab.className} text-center text-yellow text-[9px] font-bold text-balance sm:text-sm md:text-base `}
          >
            Al finalizar el curso cada participante habrá desarrollado el diseño
            completo de una marca o emprendimiento a elección desde la
            construcción de la identidad hasta el desarrollo de las piezas
            gráficas necesarias para la materialización de esa identidad tales
            como diseño de feed de Instagram, desarrollo de gráfica para candy
            bar u otro proyecto a elección. Además, se llevará las herramientas
            para cubrir las necesidades de diseño de cualquier otro proyecto en
            el futuro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModulesGrafico;
