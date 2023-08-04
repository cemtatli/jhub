import React from 'react'
import Card from './Card'

export const Testimonial = () => {
  return (
    <section className="relative py-24 lg:pb-16 overflow-hidden">
      <div className="container px-4">
        <div className="relative max-w-xl text-center mx-auto mb-16">
          <h2 className="font mb-4 text-6xl tracking-tighter">What our users say</h2>
          <p className="text-xl tracking-tight">Whereby is the super simple way to connect over video of a apps, downloads, or long meeting links enim mi turpis.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-nowrap justify-center -m-3 mb-3">
            <Card comment='Doloribus quasi exercitationem aliquid maxime ex occaecati deserunt eos quod.' name='Colin' title='Chief Web Executive' src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/213.jpg' />
            <Card comment='Dolores voluptate rem enim illo.' name='Jett' title='Administrator' src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/936.jpg' />
            <Card comment='Aspernatur ratione dicta assumenda nihil cumque velit laboriosam.' name='Isai' title='Human Usability Architect' src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1015.jpg' />
            <Card comment='Sunt optio optio in sit occaecati dicta.' name='Abbie' title='Central Solutions Designer' src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/487.jpg' />
            <Card comment='Et sed asperiores.' name='Brionna' title='Forward Creative Developer' src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/417.jpg' />
          </div>
          <div className="flex flex-nowrap justify-center -m-3">
            <Card comment='Quasi est consequatur qui delectus mollitia quia quaerat qui.' name='Carolanne' title='Dynamic Markets Analyst' src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/861.jpg' />
            <Card comment='Distinctio sunt est non quisquam consequatur voluptas commodi.' name='Mertie' title='Legacy Interactions Agent' src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/883.jpg' />
            <Card comment='Enim impedit nam corporis incidunt id possimus.' name='Ericka' title='Regional Response Manager' src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1115.jpg' />
            <Card comment='Consequatur perspiciatis sunt doloribus deleniti.' name='Thea' title='Dynamic Implementation Liaison' src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/793.jpg' />
          </div>
          <div className="flex flex-nowrap justify-center -m-3 mb-3">
            <Card comment='Culpa qui culpa minus voluptas at accusantium.' name='Christop' title='International Tactics Manager' src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/664.jpg' />
            <Card comment='Repudiandae magnam qui quos enim.' name='Alice' title='Human Markets Engineer' src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/537.jpg' />
            <Card comment='Quos accusantium ut.' name='Ashly' title='Future Branding Manager' src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/262.jpg' />
          </div>
        </div>
      </div>
    </section>
  )
}
