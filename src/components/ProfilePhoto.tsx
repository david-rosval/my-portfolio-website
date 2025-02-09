import LinePatternBackground from "./LinePatternBackground";

export default function ProfilePhoto() {
  return (
    <div className="size-80  rounded-full overflow-hidden flex justify-center items-center relative">
      <img className="w-56 h-80 object-cover object-[0%_-120%] z-10 grayscale" src="/profile.png" alt="profile" />
      <div className="absolute size-64 rounded-full p-3 flex justify-center items-center  overflow-hidden">
        <LinePatternBackground />
      </div>
    </div>
  )
}
