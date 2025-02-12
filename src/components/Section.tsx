import React from 'react'

export default function Section({ children, icon, title }: { children: React.ReactNode, icon: React.ReactNode, title: string }) {
  return (
    <div className="px-5 py-10 pb-16">
      <h2 className="text-6xl text-center uppercase text-palette-4 font-bold">{title}</h2>
      <div className="flex justify-around items-center gap-2 my-5 mx-16">
        <div className="w-full border-t-2  border-palette-4 border-dashed" />
        {icon}
        <div className="w-full border-t-2  border-palette-4 border-dashed" />
      </div>
      {/* Div que ocupa el espacio restante */}
      {children}
    </div>
  )
}
