
export default function ProjectTitle({ title }: { title: string }) {
  return (
    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 line-clamp-1">
      {title}
    </h3>
  )
}
