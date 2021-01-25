import Head from 'next/head'

const publications = [
  'Fløysand, A., Lindfors, E.T., Jakobsen, S.-E., Coenen, L. (2021) Place-Based Directionality of innovations: Tasmanian Salman Farming and Responsible Innovation. Sustainability, 13 (1), 62',
  'Coenen, L. & Morgan, K. (2020) Evolving geographies of innovation: existing paradigms, critiques and possible alternatives. Norsk Geografisk Tidsskrift - Norwegian Journal of Geography, 74(1), 13-24',
  'Jakobsen, S.-E., Fløysand, A., Overton, J. (2019). Expanding the field of Responsible Research and Innovation (RRI) – from responsible research to responsible innovation. European Planning Studies, 27 (12) 2329-2343.',
  'Barton, J., Alvaro, R., Rehner, J. (2019). Responsible research and innovation (RRI) in Chile: from a neostructural productivist imperative to sustainable regional development? European Planning Studies, 27 (12) 2510-2532',
  'Uyarra, E., Ribeiro, B.; Dale-Clough, L. (2019). Exploring the normative turn in regional innovation policy: responsibility and the quest for public value. European Planning Studies, 27 (12) 2359-2375',
]

export default function Publications() {
  return (
    <div>
      <Head>
        <title>Publications – Salmansvar </title>
      </Head>
      <div className="flex justify-center">
        <div class="mt-12 prose lg:prose-xl">
          <h1 className="my-6 font-semibold tracking-tighter title-font text-quartenary">
            Publications from Salmansvar
          </h1>
          <ol>
            {publications.map((p) => (
              <li className="my-4">{p}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
