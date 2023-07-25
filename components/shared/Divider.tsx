export function Divider({ label = 'or' }) {
  return (
    <div className="my-1 flex h-px w-full items-center justify-center bg-foreground/20">
      <span className="bg-background px-4 text-sm font-medium uppercase text-foreground/80">
        {label}
      </span>
    </div>
  )
}
