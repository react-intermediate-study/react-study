interface ValueCardProps {
  title: string
  description: string
}

export default function ValueCard({ title, description }: ValueCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  )
}