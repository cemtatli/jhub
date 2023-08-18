import CareerItem from './CareerItem'

const Career = () => {
  return (
    <section className="overflow-hidden rounded-lg bg-gray-100 py-24 pb-4 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <h3 className="mb-5 text-6xl tracking-tighter">Open Positions</h3>
          <p className="text-xl tracking-tight text-gray-600">
            Use and re-use tons of responsive sections too a main create the perfect layout.
            Sections are ready.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="-m-1 flex flex-wrap">
            <CareerItem
              job="React Native & Flutter"
              description="Global"
              company="Marks - Schiller"
            />
            <CareerItem job="Designer" description="Corporate" company="Johns LLC" />
            <CareerItem job="Specialist" description="Forward" company="Hane and Sons" />
            <CareerItem job="Associate" description="Forward" company="Jakubowski" />
            <CareerItem job="Analyst" description="Corporate" company="Welch Inc" />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Career }
