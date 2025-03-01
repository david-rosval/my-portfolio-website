import { Smile } from "lucide-react";
import Section from "../projects/Section";
import HighLightedText from "./HighLightedText";
import React from "../svg/React";
import Nextjs from "../svg/Nextjs";
import Remix from "../svg/Remix";
import TechTextWithLogo from "../svg/TechTextWithLogo";

export default function AboutMe() {
  return (
    <Section title="Sobre mí" icon={<Smile className="stroke-palette-4 size-12" />}>
      <div className="flex gap-5 items-center justify-center">
        <div className="text-white flex flex-col gap-5 max-w-xl lg:text-left text-center">
          <p>
            ¡Hola! Soy un desarrollador full stack especializado en {" "}
            <TechTextWithLogo>
              React
              <React />
            </TechTextWithLogo>{" "}
            y sus frameworks {" "}
            <TechTextWithLogo>
              Next.js
              <Nextjs />
            </TechTextWithLogo> y {" "}
            <TechTextWithLogo>
              Remix
              <Remix className="size-3" />
            </TechTextWithLogo>. Me apasiona <HighLightedText>crear aplicaciones web modernas, optimizadas y escalables, combinando rendimiento y experiencia de usuario.</HighLightedText>
          </p>
          <p>
            Actualmente, estoy cursando el 10mo ciclo de Ingeniería de Sistemas y me estoy preparando para obtener la certificación AWS Certified Developer Associate.
          </p>
          <p>
            Cuando no estoy programando, me gusta <HighLightedText>explorar nuevas tecnologías, mejorar mi productividad y disfrutar un buen café con amigos.</HighLightedText>
          </p>
          <p>
            Si tienes un proyecto en mente o simplemente quieres conversar sobre tecnología, <HighLightedText>¡estaré encantado de conectar contigo! 🚀</HighLightedText>
          </p>
        </div>
      </div>
    </Section>
  )
}
