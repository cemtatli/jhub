import { FC } from 'react'
import CareerItem from './CareerItem'

interface CareerProps {

}

const Career: FC<CareerProps> = ({ }) => {
  return (
    <section className="  py-24 lg:pb-36 bg-gray-100 overflow-hidden rounded-lg">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl text-center mx-auto mb-16">
          <h2 className="font-heading mb-5 text-6xl tracking-tighter">Open Positions</h2>
          <p className="text-xl text-gray-600 tracking-tight">Use and re-use tons of responsive sections too a main create the perfect layout. Sections are ready.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap -m-1">
            <CareerItem job='Executive' description='Planner' company='Marks - Schiller' />
            <CareerItem job='Designer' description='Agent' company='Johns LLC' />
            <CareerItem job='Specialist' description='Assistant' company='Hane and Sons' />
            <CareerItem job='Associate' description='Strategist' company='Jakubowski - Gutkowski' />
            <CareerItem job='Analyst' description='Assistant' company='Welch Inc' />
          </div>
        </div>
      </div >
    </section >
  )

}

export { Career }