import React from "react";
import marciaFilz from "/public/images/marciaFilz.png";
import lorenaSamponi from "/public/images/lorenaSamponi.png";
import Image from "next/image";
import Cam from "@/app/components/svg/Cam";
import Educadora from "@/app/components/svg/Educadora";
import Artist from "@/app/components/svg/Artist";
import LaptopXs from "@/app/components/svg/LaptopXs";
import { lexend } from "@/app/asesoriadeimagen/components/joinUs/JoinUs";
import Carousel from "@/app/components/carousel/Carousel";
import { FoundersElements } from "./FoundersItem";
import { Divider } from "@/app/asesoriadeimagen/components/modality/Modality";

const Founders = () => {
  return (
    <>
      <section
        className={`${lexend.className} lg:py-24 lg:px-32 bg-primary text-white sm:flex flex-col lg:gap-32 sm:p-8 sm:gap-8 hidden`}
        id="conocenos"
      >
        <div className=" flex flex-col lg:gap-8 sm:gap-4 ">
          <p className="lg:text-2xl sm:text-xl font-medium">NUESTRA HISTORIA</p>
          <div className="w-full h-[2px] bg-white"></div>
        </div>
        <div className="grid grid-flow-col grid-cols-8 lg:gap-20">
          <div className="sm:col-span-2  md:col-span-3  flex flex-col justify-start  items-start lg:gap-14 sm:gap-8 ">
            <Image
              src={marciaFilz}
              alt="foto de marcia filz"
              className=" lg:w-80 sm:w-40 aspect-square self-start"
            ></Image>
            <div className="flex flex-col items-start gap-4 ">
              <p className="text-yellow font-black xl:text-5xl lg:text-3xl sm:text-2xl pb-6">
                MARCIA FILZ
              </p>
              <div className=" flex justify-start gap-5 items-start xl:w-96 lg:w-72 px-4">
                <div className="">
                  {" "}
                  <Cam />{" "}
                </div>
                <p className="lg:text-2xl">Fotógrafa.</p>
              </div>
              <div className="sm:w-11/12 h-px bg-white"></div>
              <div className=" flex justify-start gap-5 items-start xl:w-96 lg:w-72 px-4">
                <div className="">
                  <Educadora />
                </div>{" "}
                <p className="lg:text-2xl">Educadora.</p>
              </div>
              <div className="sm:w-11/12 h-px bg-white"></div>
              <div className=" flex justify-start gap-5 items-start xl:w-96 lg:w-72 px-4">
                <div className="">
                  {" "}
                  <Artist />
                </div>{" "}
                <p className="lg:text-2xl">Artista visual.</p>
              </div>
              <div className="sm:w-11/12 h-px bg-white"></div>
            </div>
          </div>
          <div className="md:col-span-6 sm:col-span-6 sm:col-start-4 2xl:w-8/12 flex flex-col gap-6 mx-auto">
            <p className="text-md xl:text-xl  font-light">
              <span className="font-bold">
                Soy diseñadora gráfica, fotógrafa y educadora.
              </span>{" "}
              Tengo amplios intereses como el arte, el marketing y la moda que
              fui explorando y desarrollando a lo largo de mi recorrido
              profesional. Pienso que la comunicación y la estética es lo que
              conecta todo lo que hago.
            </p>
            <p className="text-md xl:text-xl font-light">
              Empecé a formarme como fotógrafa desde temprana edad realizando el
              primer taller cuando aún estaba en la secundaria. Al finalizar la
              escuela, me inscribí en la carrera de artes plásticas. Durante los
              primeros años me enfoqué principalmente en la pintura y la
              historia del arte. <br />
              Cuando me encontraba en tercer año de la carrera comencé a usar la
              fotografía como complemento de la pintura. Esa experiencia fue
              reveladora, reviviendo mi temprano interés por la disciplina. Me
              capacité a través de múltiples cursos, clínicas y seminarios hasta
              que finalmente decidí dedicarme exclusivamente a la fotografía. A
              nivel profesional, comencé a trabajar como fotógrafa, retocadora y
              directora creativa en fotografía para distintos estudios,
              productoras y clientes particulares, trabajo que ejerzo hasta el
              día de hoy. En paralelo seguí desarrollando proyectos relacionados
              con las artes visuales logrando que mi obra fuera seleccionada
              para distintas publicaciones y exhibiciones a nivel nacional e
              internacional. Después de varios años de ejercicio profesional me
              invitaron a dictar un taller de fotografía en un centro cultural
              en el que participaba. Encontré en la educación un lugar donde
              compartir desde experiencias hasta saberes teóricos y prácticos
              que permitan a los estudiantes desarrollar proyectos. Actualmente
              llevo dictados más de 200 cursos y asesorías.
            </p>
            <p className="font-bold text-md xl:text-xl">
              Co-fundé Péndulo con la idea de ser parte de un equipo humano que
              me ayude a desarrollar y ampliar mi experiencia con la educación y
              donde pueda ayudar a otras personas a ampliar sus posibilidades
              profesionales.
            </p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-white"></div>
        <div className="grid grid-flow-col grid-cols-8 lg:gap-20">
          <div className="sm:col-span-2  md:col-span-3  flex flex-col justify-start  items-start lg:gap-14 sm:gap-8 ">
            <Image
              src={lorenaSamponi}
              alt="foto de marcia filz"
              className="lg:w-80 sm:w-40 aspect-square self-start"
            ></Image>
            <div className="flex flex-col items-start gap-4 ">
              <p className="text-yellow font-black xl:text-5xl lg:text-3xl sm:text-2xl pb-6">
                LORENA SAMPONI
              </p>
              <div className=" flex justify-start gap-5 items-start xl:w-96 lg:w-72 px-4">
                <div className="">
                  <div className="">
                    <LaptopXs />{" "}
                  </div>{" "}
                </div>{" "}
                <p className="lg:text-2xl">Diseñadora gráfica.</p>
              </div>
              <div className="sm:w-11/12 h-px bg-white"></div>
              <div className=" flex justify-start gap-5 items-start xl:w-96 lg:w-72 px-4">
                <div className="">
                  {" "}
                  <Cam />{" "}
                </div>
                <p className="lg:text-2xl">Fotógrafa.</p>
              </div>
              <div className="sm:w-11/12 h-px bg-white"></div>
              <div className=" flex justify-start gap-5 items-start xl:w-96 lg:w-72 px-4">
                <div className="">
                  {" "}
                  <Educadora />
                </div>{" "}
                <p className="lg:text-2xl">Educadora.</p>
              </div>
              <div className="sm:w-11/12 h-px bg-white "></div>
            </div>
          </div>
          <div className="md:col-span-6 sm:col-span-6 sm:col-start-4 2xl:w-8/12 flex flex-col gap-6 mx-auto">
            <p className="text-md xl:text-xl  font-light">
              <span className="font-bold">
                Soy fotógrafa, artista visual y educadora.{" "}
              </span>{" "}
              Mi desarrollo profesional está atravesado por otras disciplinas
              como la escritura, el cine y la música.
            </p>
            <p className="text-md xl:text-xl  font-light">
              Desde los inicios de mi carrera de diseño en la UNLP trabajé como
              diseñadora de forma independiente. <br /> A mitad de la carrera
              realicé un viaje transformador que despertó un gran interés por la
              fotografía, por lo cual decidí capacitarme a nivel profesional.{" "}
              <br /> Mientras estudiaba fotografía, descubrí que mi formación en
              comunicación visual era de gran ayuda para mi producción. Eso me
              impulsó a querer ayudar a fotógrafos que venían de otras
              disciplinas con ese conocimiento. <br /> Me postulé como profesora
              de lenguaje visual en la misma escuela donde estudiaba y desde ese
              momento surgieron muchísimas oportunidades, la enseñanza se
              convirtió en mi principal profesión llegando a tener más de 500
              estudiantes hasta la actualidad. <br /> En paralelo continúe con
              los viajes llevado a recorrer más de 25 países. Estos se
              convirtieron en el entorno ideal para el desarrollo fotográfico,
              llevándome a colaborar con medios de comunicación internacionales
              y agencias de publicidad hasta hoy en día.
            </p>
            <p className="font-bold text-md xl:text-xl ">
              <span className="font-normal">
                Además, viajar me ha permitido desafiar mis propios límites,
                cuestionar y desnaturalizar su sentido común y ampliar mi mirada
                del mundo.
              </span>
              Esto lo relaciono profundamente con el emprendedurismo y la
              creación de Péndulo, una escuela propia alineada con mis valores.
              Desde su fundación, me enfoco principalmente en el área de
              marketing y finanzas, aprendiendo cada día nuevos conocimientos y
              herramientas.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-primary p-8 space-y-8 sm:hidden">
        <Divider
          title="¿QUIENES SOMOS?"
          bgcolor="bg-white"
          color="text-white"
          textPosition="text-left"
        />
        <Carousel color="text-white" fill="fill-white">
          {FoundersElements.map((item, i) => (
            <React.Fragment key={i}>{item.item}</React.Fragment>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default Founders;
