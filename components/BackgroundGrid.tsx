interface BackgroundGridProps {
  cellsCount?: number
  rowsClass?: string
  className?: string
}

export const BackgroundGrid = ({
  cellsCount = 96,
  rowsClass = "grid-rows-8",
  className = "",
}: BackgroundGridProps) => {
  const cells = Array.from({ length: cellsCount }, (_, index) => index)

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 grid grid-cols-4 ${rowsClass} border-t border-l border-primary-foreground/15 sm:grid-cols-6 lg:grid-cols-12 ${className}`}
    >
      {cells.map((cellIndex) => (
        <div
          key={cellIndex}
          className="border-r border-b border-primary-foreground/15"
        />
      ))}
    </div>
  )
}

export default BackgroundGrid
