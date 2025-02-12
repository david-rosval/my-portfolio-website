import { Smile } from "lucide-react";
import Section from "./Section";
import HighLightedText from "./HighLightedText";

export default function AboutMe() {
  return (
    <Section title="Sobre mí" icon={<Smile className="stroke-palette-4 size-12" />}>
      <div className="flex justify-center">
        <div className="text-white flex flex-col gap-5 max-w-xl">
          <p>
            ¡Hola! Soy un desarrollador full stack especializado en <HighLightedText>React</HighLightedText> y sus frameworks <HighLightedText>Next.js</HighLightedText> y <HighLightedText>Remix</HighLightedText>. Me apasiona <HighLightedText>crear aplicaciones web modernas, optimizadas y escalables, combinando rendimiento y experiencia de usuario.</HighLightedText>
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
