
export default function LinePatternProject() {
  return (
    <div className="size-full absolute -bottom-3 -right-0 overflow-hidden max-w-[488px]">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-palette-3"
      >
        <defs>
          <pattern
            id="lines"
            patternUnits="userSpaceOnUse"
            width="2"
            height="2"
            patternTransform="rotate(-45)"
          >
            <line
              x1="0"
              y="0"
              x2="0"
              y2="10"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#lines)"
        />
      </svg>
    </div>  
  )
}
