
export default function LinePatternBackground() {
  return (
    <div className="scale-110">
      <svg
        className="w-full h-full stroke-pal"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="pattern"
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y="0" x2="0" y2="10" stroke="#4e9a8d" strokeWidth="1" />
          </pattern>
        </defs>
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          fill="url(#pattern)"
        />
      </svg>
    </div>
  )
}
