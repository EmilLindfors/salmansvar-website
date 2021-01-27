import Head from "next/head";
import { FirmsSection } from "@/components";
import {partners} from "@/authors"
import ramonImg from "@/img/ramon.jpg"

export default function Home() {
  return (
    <div>
      <Head>
        <title>About – Salmansvar </title>
      </Head>
      <div className="relative flex flex-wrap w-full px-10 py-24 my-12 bg-primary rounded-lg">
        <img
          className="absolute inset-0 block object-cover object-center w-full h-full border border-gray-200 rounded-lg opacity-50"
          alt="Photo by"
          src={ramonImg}
        />
        <div className="relative z-10 w-full text-left lg:text-center">
          <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-white sm:text-4xl title-font">
            Researching the dilemmas and social concerns 
            <br className="" />
            of the global salman farming industry
          </h1>
          
        </div>
      </div>
      <FirmsSection firms={partners}/>
      <div className="flex justify-center">
      <article className="prose prose-sm sm:prose lg:prose-lg">
      <p className="pt-16 font-bold">
      Norwegian salmon farming firms are highly influential in the increasingly global salmon farming industry. In 2018, the export value of farmed salmon from Norway totalled 68bn NOK. The project studies dilemmas arising between economic, environmental and social concerns in the salmon farming industry in Norway, Canada, Australia and Chile through mapping the global networks of leading Norwegian salmon farming firms. 
        </p>
        <p className="pt-4">
        We intend to study intersections between salmon farming and local/regional/national conditions in the involved countries. In so doing we wish to identify tensions between economic, environmental and social dilemmas, and the solutions to these tensions by firms in different geographical locations. Furthering this, the project aims to facilitate co-creation of knowledge between different stakeholders towards improvement of innovation practices and their sustainability (i.e. responsibility) in different contexts. This is done by setting up Responsible Innovation Labs (in Norway and Chile) involving participating researchers, firms, suppliers and customers, NGOs and regulating authorities. Central topics in the Labs will concern how to implement and adapt the UN?s Sustainable Development Goals and linking solutions to context-specific challenges and solutions, aiming to spur responsible innovation practices in the industry. 
        </p>
        <p className="pt-4">
        The project is led by prof. Arnt Fløysand, Western Norway University of Applied Sciences. Research partners in the project are University of Stavanger and Pontificia Universidad Catolica de Chile. In addition to a strong team of researchers, several PhD students will be recruited. The project is well-embedded among central partners in the salmon farming industry in Norway, and industry partners, together with other stakeholders from e.g. government, NGOs and regulatory bodies, play important roles in co-creating novel knowledge applicable for theoretical, empirical and practical purposes.
        </p>
      </article>
      </div>
    </div>
  );
}
