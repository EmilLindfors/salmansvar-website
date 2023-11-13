import Head from 'next/head'

const citations = [
  "Barton, J., Roman, A., Rehner, J. (2019). Responsible research and innovation (RRI) in Chile: from a neostructural productivist imperative to sustainable regional development? European Planning Studies, 27 (12) 2510-2532.",
  "Coenen, L. & Morgan, K. (2020) Evolving geographies of innovation: existing paradigms, critiques and possible alternatives. Norsk Geografisk Tidsskrift - Norwegian Journal of Geography, 74(1), 13-24.",
  "Jakobsen, S.E., Fløysand, A., Overton, J. (2019). Expanding the field of Responsible Research and Innovation (RRI) – from responsible research to responsible innovation. European Planning Studies, 27 (12) 2329-2343.",
  "Fløysand, A., Jakobsen, S.E., Lindfors, E, Coenen, L. (2021). Place-Based Directionality of innovations: Tasmanian Salman Farming and Responsible Innovation. Sustainability, 13 (62).",
  "Coffay,M.,  Coenen, L., Tveterås, R. (2022). Effectuated sustainability: Responsible Innovation Labs for impact forecasting and assessment Journal of Cleaner Production, Volume 376.",
  "Lindfors, E. (2022). Radical path transformation of the Norwegian and Tasmanian salmon farming industries. Regional Studies, Regional Science, 9, (1), 757–775.",
  "Sjøtun, G., Fløysand, A., Wiig, H. Zenteno, J. (2022) Multi-level agency and transformative capacity for environmental risk reduction in the Norwegian salmon farming industry. Front. Hum. Dyn., Volume 4.",
  "Aarstad, J., Jakobsen, S.E., Fløysand, A. (2023). Norwegian Aquaculture Firms’ Emphasis on Environmental and Social Sustainability Compared to Firms in Other Industries. fishes, 8(2), 115.",
  "Aarstad, J., Jakobsen, S-E., Fløysand, A. and Kvitastein, O. (2023): (2023) How Norwegian aquaculture firms across the value chain were affected by and responded to COVID-19, Aquaculture Economics & Management",
  "Barton, J., Baeza-González, S., Román, Á. (2023). Unravelling sustainable salmon aquaculture: an historical political ecology of a business responsibility discourse, 1970–2020. Maritime Studies.",
  "Barton, J., Baeza-González, S., Zenteno, J., Román, Á. (2023). Neostructural innovation and directionality in Chilean salmon aquaculture, Marine Policy, 150",
  "Sjøtun, S.G. & Solheim, M. (2023) Exploring the geographies of responsible innovation. Norsk Geografisk Tidsskrift - Norwegian Journal of Geography, 77:1, 1-9.",
  "Zenteno Hopp, J. Coffay, M. and Lindfors, E. (2023). Inclusion in the Global Innovation System for CRISPR Salmon in Norway. Norwegian Journal of Geography.",
  "Frank Jenssen, Ragnar Tveterås, Rasmus Nielsen (2023).The Traffic Light System. Is it a Solution to a Nonpoint Pollution Problem? Accepted for publication in Aquaculture Economics & Management"
];

const articles = [
  "Fløysand, A., Jakobsen, S-E., Lindfors, E. (2020) «Mer-differensiert-regulering-vil-styrke-norsk-lakseoppdrettsnæring», Sysla,27.01.2020 https://e24.no/naeringsliv/i/kJjy1Q/mer-differensiert-regulering-vil-styrke-norsk-lakseoppdrettsnaering",
  "Atle G. Guttormsen , Ragnar Tveterås og Bård Misund (2023). «En stor ryddejobb må til med lakseskatten», Dagens Næringsliv, 18.01.2023  https://www.dn.no/innlegg/skatt/havbruk/oppdrett/en-stor-ryddejobb-ma-til-med-lakseskatten/2-1-1386421 ",
"Atle G. Guttormsen , Ragnar Tveterås og Bård Misund (2023). «En stor ryddejobb må til med lakseskatten», Dagens Næringsliv, 18.01.2023  https://www.dn.no/innlegg/skatt/havbruk/oppdrett/en-stor-ryddejobb-ma-til-med-lakseskatten/2-1-1386421 ",
"Aarstad, J., Fløysand, A., Jakobsen, S-E. (2023) «Havbruksnæringen er opptatt av bærekraft og samfunnsansvar», Kyst.no, 14.03.2023 https://www.kyst.no/forsking-kommentar-leserinnlegg/havbruksnaeringen-er-opptatt-av-baerekraft-og-samfunnsansvar/1499504"
]

export default function Publications() {
  return (
    <div>
      <Head>
        <title>Publications – Salmansvar </title>
      </Head>
      <div className="flex flex-col place-content-center">
        <div class="mt-12 prose lg:prose-md">
          <h1 className="my-6 font-semibold tracking-tighter title-font text-quartenary">
            Publications from Salmansvar
          </h1>
          <ol>
            {citations.map((p) => (
              <li className="my-4">{p}</li>
            ))}
          </ol>
        </div>
        <div class="mt-6 prose lg:prose-md">
          <h1 className="my-6 font-semibold tracking-tighter title-font text-quartenary">
            Featured Articles
          </h1>
          <ol>
            {articles.map((p) => (
              <li className="my-4">{p}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
