import ContactMeButton from './ContactMeButton'
import ProfilePhoto from './ProfilePhoto'



export default function Hero() {
  return (
    <div className='bg-gradient-to-tr from-palette-3 to-palette-1 h-[80dvh] flex justify-center items-center'>
      <div className='flex gap-8'>
        <ProfilePhoto />
        <div className='flex flex-col gap-8 justify-center'>
          <h1>
            <p className='text-white text-2xl'>Hola, <span className='text-palette-4'>soy</span></p>
            <p className='text-palette-4 text-7xl font-bold'>David Rosado Valerio</p>
            <p className='text-white text-3xl pt-5'>Desarrollador Web Full Stack</p>
          </h1>
          <div>
            <ContactMeButton />
          </div>
        </div>
      </div>
    </div>
  )
}
