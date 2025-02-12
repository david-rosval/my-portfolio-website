import React from 'react'

export default function HighLightedText({ children }: { children: React.ReactNode }) {
  return (
    <span className='text-palette-3 font-semibold'>{children}</span>
  )
}
