import Github from './svg/Github'

export default function GoToGithubButton({ url }: { url: string }) {
  return (
    <a href={url} className=''>
      <button className='flex gap-2 rounded-full px-4 py-2 border border-palette-4 items-center transition-colors ease-in-out hover:bg-palette-1/30 '>
        Go to Github
        <Github className='size-5' />
      </button>
    </a>
  )
}
