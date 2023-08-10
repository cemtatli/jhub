import CareerItem from './CareerItem'

const Career = () => {
  return (
    <section className="py-24 bg-gray-100 overflow-hidden rounded-lg">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl text-center mx-auto mb-16">
          <h3 className="mb-5 text-6xl tracking-tighter">Open Positions</h3>
          <p className="text-xl text-gray-600 tracking-tight">Use and re-use tons of responsive sections too a main create the perfect layout. Sections are ready.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap -m-1">
            <CareerItem job='React Native & Flutter' description='Global' company='Marks - Schiller' />
            <CareerItem job='Designer' description='Corporate' company='Johns LLC' />
            <CareerItem job='Specialist' description='Forward' company='Hane and Sons' />
            <CareerItem job='Associate' description='Forward' company='Jakubowski' />
            <CareerItem job='Analyst' description='Corporate' company='Welch Inc' />
          </div>
        </div>
      </div >
    </section >
  )

}

export { Career }