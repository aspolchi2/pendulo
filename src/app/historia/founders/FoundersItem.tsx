import Image from "next/image";
import marciaFilz from "/public/images/marciaFilz.png";
import lorenaSamponi from "/public/images/lorenaSamponi.png";
import Cam from "@/app/components/svg/Cam";
import Educadora from "@/app/components/svg/Educadora";
import Artist from "@/app/components/svg/Artist";
import LaptopXs from "@/app/components/svg/LaptopXs";

const marciaFirstText = (
  <p className="text-md xl:text-xl  font-light">
    <span className="font-bold">
      Soy fotógrafa, artista visual y educadora.{" "}
    </span>{" "}
    Mi desarrollo profesional está atravesado por otras disciplinas como la
    escritura, el cine y la música.
  </p>
);

const lorenaSamponiSecondText = (
  <p className="text-md xl:text-xl  font-light">
    Desde los inicios de mi carrera de diseño en la UNLP trabajé como diseñadora
    de forma independiente. <br /> A mitad de la carrera realicé un viaje
    transformador que despertó un gran interés por la fotografía, por lo cual
    decidí capacitarme a nivel profesional. <br /> Mientras estudiaba
    fotografía, descubrí que mi formación en comunicación visual era de gran
    ayuda para mi producción. Eso me impulsó a querer ayudar a fotógrafos que
    venían de otras disciplinas con ese conocimiento. <br /> Me postulé como
    profesora de lenguaje visual en la misma escuela donde estudiaba y desde ese
    momento surgieron muchísimas oportunidades, la enseñanza se convirtió en mi
    principal profesión llegando a tener más de 500 estudiantes hasta la
    actualidad. <br /> En paralelo continúe con los viajes llevado a recorrer
    más de 25 países. Estos se convirtieron en el entorno ideal para el
    desarrollo fotográfico, llevándome a colaborar con medios de comunicación
    internacionales y agencias de publicidad hasta hoy en día.
  </p>
);

const lorenaSamponiThirdText = (
  <p className="font-bold text-md xl:text-xl ">
    <span className="font-normal">
      Además, viajar me ha permitido desafiar mis propios límites, cuestionar y
      desnaturalizar su sentido común y ampliar mi mirada del mundo.
    </span>
    Esto lo relaciono profundamente con el emprendedurismo y la creación de
    Péndulo, una escuela propia alineada con mis valores. Desde su fundación, me
    enfoco principalmente en el área de marketing y finanzas, aprendiendo cada
    día nuevos conocimientos y herramientas.
  </p>
);

const lorenaSamponiFirstText = (
  <p className="text-md xl:text-xl  font-light">
    <span className="font-bold">
      Soy diseñadora gráfica, fotógrafa y educadora.
    </span>{" "}
    Tengo amplios intereses como el arte, el marketing y la moda que fui
    explorando y desarrollando a lo largo de mi recorrido profesional. Pienso
    que la comunicación y la estética es lo que conecta todo lo que hago.
  </p>
);

const marciaSecondText = (
  <p className="text-md xl:text-xl font-light">
    Empecé a formarme como fotógrafa desde temprana edad realizando el primer
    taller cuando aún estaba en la secundaria. Al finalizar la escuela, me
    inscribí en la carrera de artes plásticas. Durante los primeros años me
    enfoqué principalmente en la pintura y la historia del arte. <br />
    Cuando me encontraba en tercer año de la carrera comencé a usar la
    fotografía como complemento de la pintura. Esa experiencia fue reveladora,
    reviviendo mi temprano interés por la disciplina. Me capacité a través de
    múltiples cursos, clínicas y seminarios hasta que finalmente decidí
    dedicarme exclusivamente a la fotografía. A nivel profesional, comencé a
    trabajar como fotógrafa, retocadora y directora creativa en fotografía para
    distintos estudios, productoras y clientes particulares, trabajo que ejerzo
    hasta el día de hoy. En paralelo seguí desarrollando proyectos relacionados
    con las artes visuales logrando que mi obra fuera seleccionada para
    distintas publicaciones y exhibiciones a nivel nacional e internacional.
    Después de varios años de ejercicio profesional me invitaron a dictar un
    taller de fotografía en un centro cultural en el que participaba. Encontré
    en la educación un lugar donde compartir desde experiencias hasta saberes
    teóricos y prácticos que permitan a los estudiantes desarrollar proyectos.
    Actualmente llevo dictados más de 200 cursos y asesorías.
  </p>
);
const marciaThirdText = (
  <p className="font-bold text-md xl:text-xl">
    Co-fundé Péndulo con la idea de ser parte de un equipo humano que me ayude a
    desarrollar y ampliar mi experiencia con la educación y donde pueda ayudar a
    otras personas a ampliar sus posibilidades profesionales.
  </p>
);

const FoundersItems = ({
  img,
  name,
  item1,
  item2,
  item3,
  firstText,
  secondText,
  thirdText,
  logo1,
  logo2,
  logo3,
}: any) => {
  return (
    <div className="">
      <div className="flex gap-4 ">
        <div className="flex flex-col items-start gap-1">
          <Image
            src={img}
            alt="foto de marcia filz"
            className="w-20 h-20"
          ></Image>
          <p className="text-yellow font-bold text-xs">{name}</p>
        </div>
        <div className="text-white  text-xs space-y-2 w-7/12 m-auto">
          <div className="flex gap-4 ">
            <div className="w-3"> {logo1}</div> <p className="">{item1}</p>
          </div>
          <div className="w-full h-px bg-white"></div>
          <div className=" flex gap-4">
            <div className="w-3">{logo2}</div> <p className="">{item2}</p>
          </div>
          <div className="w-full h-px bg-white"></div>
          <div className="flex  gap-4">
            <div className="w-3">{logo3} </div> <p className="">{item3}</p>
          </div>
          <div className="w-full h-px bg-white"></div>
        </div>
      </div>
      <div className="text-white space-y-6 mt-6 text-balance text-xs">
        {firstText}
        {secondText}
        {thirdText}
      </div>
    </div>
  );
};

export const FoundersElements = [
  {
    item: (
      <FoundersItems
        img={marciaFilz}
        name="MARCIA FILZ"
        item1="Fotógrafa."
        item2="Educadora."
        item3="Artista visual."
        firstText={marciaFirstText}
        secondText={marciaSecondText}
        thirdText={marciaThirdText}
        logo1={<Cam />}
        logo2={<Educadora />}
        logo3={<Artist />}
      />
    ),
  },
  {
    item: (
      <FoundersItems
        img={lorenaSamponi}
        name="LORENA SAMPONI"
        item1="Diseñadora gráfica"
        item2="Educadora"
        item3="Fotógrafa"
        firstText={lorenaSamponiFirstText}
        secondText={lorenaSamponiSecondText}
        thirdText={lorenaSamponiThirdText}
        logo1={<LaptopXs />}
        logo2={<Educadora />}
        logo3={<Cam />}
      />
    ),
  },
];
