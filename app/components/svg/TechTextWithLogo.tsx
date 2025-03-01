export default function TechTextWithLogo({ children }: { children: React.ReactNode }) {
  return (
    <span
                
      className="inline-flex items-center gap-2 border border-palette-3 rounded-full px-3 py-1 mx-1"
    >
      {children}
    </span>
  )
}
