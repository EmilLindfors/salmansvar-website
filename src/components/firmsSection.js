//import Image from "next/img";

export default function FirmsSection({ firms }) {
  return (
    <section className="mx-auto">
      <div className="container px-5 mx-auto lg:px-24 lg:py-4">
      <h3 className="text-lg font-bold text-primary text-center mt-4 mb-8">A collaboration between the following partner institutions</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
   
          {firms &&
            firms.map((f) => <Firm key={f.name} link={f.url} img={f.image} name={f.name} />)}
        </div>
      </div>
    </section>
  )
}

function Firm({ link, img, name }) {
  return(
  <div className="flex items-center justify-center ">
    <a href={link}>
      <img src={img} alt={name} width="100%" height="100%" className="object-contain h-32" />
    </a>
  </div>)
}
