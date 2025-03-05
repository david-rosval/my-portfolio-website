import TechIcon from "./TechIcon";


export default function TechStack({ techStack }: { techStack: string[] }) {

  

  return (
    <div className="grid h-fit gap-3 pt-1">
    
      {techStack.map((tech, index) => (
        <TechIcon key={index} tech={tech} />
      ))}
      
    </div>
  )
}
