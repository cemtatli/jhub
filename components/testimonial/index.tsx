import React from 'react'
import Card from './Card'

export const Testimonial = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:pb-16">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="px-4">
        <div className="relative mx-auto mb-16 max-w-xl text-center">
          <h2 className="font mb-4 text-6xl tracking-tighter">What our users say</h2>
          <p className="text-xl tracking-tight">
            Whereby is the super simple way to connect over video of apps, downloads, or long
            meeting links. It has truly revolutionized our teams communication.
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="-m-3 mb-3 flex flex-nowrap justify-center">
            <Card
              comment="I absolutely love how easy it is to use Whereby. Connecting with others has never been smoother!"
              name="Colin"
              title="Chief Web Executive"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/213.jpg"
            />
            <Card
              comment="Whereby has become an essential tool for my team. It simplifies our communication and makes remote work a breeze."
              name="Jose"
              title="Administrator"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/936.jpg"
            />
            <Card
              comment="I can confidently say that Whereby has transformed the way we collaborate. It's intuitive and effective."
              name="Isai"
              title="Human Usability Architect"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1015.jpg"
            />
            <Card
              comment="Using Whereby for client meetings has been a game changer. It's reliable and professional."
              name="Abbie"
              title="Central Solutions Designer"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/487.jpg"
            />
            <Card
              comment="As a developer, I appreciate how seamless Whereby is for team discussions. It saves us time and frustration."
              name="Brionna"
              title="Forward Creative Developer"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/417.jpg"
            />
          </div>
          <div className="-m-3 flex flex-nowrap justify-center">
            <Card
              comment="Whereby' s simplicity is unmatched. I can focus on my work instead of struggling with complicated video tools."
              name="Carolanne"
              title="Dynamic Markets Analyst"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/861.jpg"
            />
            <Card
              comment="I used to dread virtual meetings, but Whereby has changed that. It' s user-friendly and efficient."
              name="Mertie"
              title="Legacy Interactions Agent"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/883.jpg"
            />
            <Card
              comment="Whereby' s simplicity is unmatched. I can focus on my work instead of struggling with complicated video tools."
              name="Carolanne"
              title="Dynamic Markets Analyst"
              src="/assets/avatars/avatar-1.webp"
            />
            <Card
              comment="I used to dread virtual meetings, but Whereby has changed that. It' s user-friendly and efficient."
              name="Mertie"
              title="Legacy Interactions Agent"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/883.jpg"
            />
            <Card
              comment="Whereby has simplified our company-wide communications. It' s a must-have tool for remote teams."
              name="Ericka"
              title="Regional Response Manager"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1115.jpg"
            />
            <Card
              comment="Whereby has simplified our company-wide communications. It' s a must-have tool for remote teams."
              name="Ericka"
              title="Regional Response Manager"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1115.jpg"
            />
          </div>
          <div className="-m-3 mb-3 flex flex-nowrap justify-center">
            <Card
              comment="Using Whereby for client meetings has been a game changer. It's reliable and professional."
              name="Abbie"
              title="Central Solutions Designer"
              src="/assets/avatars/avatar-5.webp"
            />
            <Card
              comment="As a developer, I appreciate how seamless Whereby is for team discussions. It saves us time and frustration."
              name="Brionna"
              title="Forward Creative Developer"
              src="/assets/avatars/avatar-4.webp"
            />
            <Card
              comment="I absolutely love how easy it is to use Whereby. Connecting with others has never been smoother!"
              name="Colin"
              title="Chief Web Executive"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/213.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
