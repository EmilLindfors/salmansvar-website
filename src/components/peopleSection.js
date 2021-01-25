export default function PeopleSection({people}) {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-8 pb-24 mx-auto pt-12 lg:px-4">
        <div className="flex flex-wrap -m-4">
          {people.map((p) => (
            <Person key={p.name} text={p.text} name={p.name} position={p.position} image={p.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Person({ text, name, position, image }) {
  return (
    <div className="p-8 mx-auto mb-6 lg:w-1/3 lg:mb-0">
      <div className="h-full p-4 text-left border rounded-xl">
        <p className="text-base font-medium leading-relaxed text-gray-700">
          {text}
        </p>
        <a className="flex flex-wrap items-center mt-6">
          <img
            alt="testimonial"
            className="inline-block object-cover object-center w-16 h-16 mb-4 rounded-full bg-4gray-100"
            width="100%"
            height="100%"
            src={image}
          />
        </a>
        <span className="flex flex-col flex-grow ">
          <span className="font-medium text-gray-900 title-font">{name}</span>
          <span className="text-sm text-gray-500 uppercase">{position}</span>
        </span>
      </div>
    </div>
  );
}
