import Head from 'next/head'
import {
  jarle,
  johannes,
  stig,
  marte,
  lars,
  runef,
  jonathan,
  svein,
  emil,
  sebastian,
  heidi,
  joaquin,
  rune,
  ragnar,
  arnt,
  elvira,
  ingerbeate,
  matthew,
  alvaro,
  oystein,
  marit,
  oyvind,
} from '@/authors'

const workPackages = [
  {
    wpKey: 'WP1: Theory',
    title: 'Theory development',
    leader: elvira,
    participants: [arnt, johannes],
    text:
      'Through a comprehensive literature review this WP will provide an advanced discussion of the what’s, how’s, why’s and when’s of responsible innovation (Whetten 1989). We draw upon the CSR, RRI and GIN literatures in order to fine-tune the concept of responsible innovation theoretically and analytically. This will result in a state-of-the-art review article to be submitted to a high-quality, international peer-reviewed, Open Access journal. ',
  },
  {
    wpKey: 'WP2: Mapping',
    title: 'Mapping networking and innovation practices in different contexts',
    leader: stig,
    participants: [runef, ingerbeate, emil],
    text:
      'This WP maps Norwegian salmon farming firms and their networks and innovation practices across geographies. First, we conduct desk research of the 20 largest (in terms of turnover) actors within the Norwegian salmon farming industry. By investigating their web sites and other accessible information we will develop short case descriptions of each firm emphasising their history, economic development, main activities and geographical outreach/presence. Second, we conduct a survey of firms in the Norwegian salmon farming industry. Our sample will comprise all firms with at least 3 employees, and we will include both salmon production firms and suppliers. In the survey we intend to map their ‘networkness’, ‘globalness’ and ‘innovativeness’, the key dimensions of GINs (Barnard and Chaminade 2011)',
  },
  {
    wpKey: 'WP3: Interplay',
    title:
      'Analysing the interplay between economic, environmental and social dimensions of innovation in the salmon farming industry',
    leader: heidi,
    participants: [rune, jonathan, svein, sebastian, joaquin],
    text:
      'In-depth case studies of selected salmon farming firms and the geographies in which they operate will be used as an exploratory and analytical tool to identify patterns of responsible innovation in Norwegian salmon farming firms. We assume that these patterns are not random and that through cross-case analyses we will be able to generate explanations about, for example, different innovation and responsibility repertoires in different geographical contexts. Moreover, as firms implement various Sustainable Development Goals, conflicts between economic, environmental and social dimensions of innovation arise. These conflicts differ between geographical contexts and therefore require in-depth case studies.',
  },
  {
    wpKey: 'WP4: Effects',
    title: 'Investigate the effects of innovations on the economic performance of firm',
    leader: ragnar,
    participants: [jarle, marte],
    text:
      'We will provide new quantitative evidence on the relationship between economic performance of salmon firms, environmental practices and innovations (Abate, Nielsen and Tveterås, 2016). The causality will be estimated both ways, and we will also control for other firm characteristics, such as firms’ human capital and investments in research and innovation. Furthermore, we investigate the determinants of salmon firms’ innovation rates, including green and social innovations (Bergesen and Tveterås, 2019). Finally, we estimate the relationships between firms’ productivity performance, environmental and biological status indicators and firms’ measures to mitigate environmental and biological problems (Asche, Roll and Tveterås, 2016). ',
  },
  {
    wpKey: 'WP5: Learning',
    title:
      'Developing a Responsible Innovation Lab for improved innovation practices in the industry',
    leader: lars,
    participants: [oyvind, marit, oystein, alvaro, matthew],
    rq: 'Oversight of the development of the work packages',
    text:
      'To test, trial and improve the procedures of responsible innovation in practice, the project will set up a Responsible Innovation Lab enabling co-creation of knowledge between participating researchers, firms, suppliers and customers, NGOs and regulating authorities. We will mobilize key players in the industry, at least 8 firms, central regulatory bodies (e.g. The Directorate of Fisheries), R&D institutions and relevant NGOs (e.g. Zero). In its design, the Responsible Innovation Lab is informed by the notion of living labs (Bulkeley et al., 2017) understood as sites devised to design, test and learn from innovation in real time in order to respond to particular societal, economic and environmental issues. Living Labs emphasize experimentation understood as collective search and exploration processes in which a broad suite of stakeholders like firms, universities and actors from government and civil society are navigating, negotiating (and ideally) reducing uncertainty about innovations through real-world experiments, gaining knowledge and experience along the way in an iterative learning-by-doing and doing-by-learning process. ',
  },
]

export default function WorkPackages({ data }) {
  return (
    <>
      <Head>
        <title>Work Packages – RegReSir </title>
      </Head>

      <section>
        <h1 className="my-12 text-xl leading-9 font-extrabold text-center text-quarenary tracking-tight sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
          Work Packages
        </h1>
        <ul className="divide-y divide-gray-200">
          {workPackages.map((d) => (
            <WorkPackage
              key={d.wpKey}
              wpKey={d.wpKey}
              title={d.title}
              text={d.text}
              leader={d.leader}
              participants={d.participants}
            />
          ))}
        </ul>
      </section>
    </>
  )
}

function Person({ name, avatar, twitter, email, leader }) {
  return (
    <div className="flex flex-row">
      <img
        alt={name}
        className={`inline-block object-cover object-center ${
          leader ? 'w-16 h-16' : 'w-12 h-12'
        } mb-4 rounded-full bg-4gray-100`}
        width="100%"
        height="100%"
        src={avatar}
      />
      <div className="m-2">
        <h4 className="font-bold tracking-tighter text-quartenary">{name}</h4>
        <div className="flex space-x-2">
          {email && (
            <a
              href={`mailto:${email}`}
              className="flex flex-row text-primary hover:text-secondary text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
              </svg>
            </a>
          )}
          {twitter && (
            <a
              href={`https://twitter.com/${twitter}`}
              className="flex flex-row text-primary hover:text-secondary text-sm"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function WorkPackage({ wpKey, title, text, leader, participants }) {
  return (
    <li
      key={wpKey}
      className="container flex flex-col items-start py-4 mx-auto lg:pb-8 md:flex-row"
    >
      <div className="flex flex-col justify-center lg:max-w-sm lg:w-full  pl-4 md:pl-12 lg:pl-24">
        <span className="mb-1 text-sm font-bold font-medium text-secondary title-font">
          WP Leader
        </span>
        <Person
          leader
          name={leader.name}
          avatar={leader.avatar}
          twitter={leader.twitter}
          email={leader.email}
        />
        {participants && (
          <span className="mt-4 mb-1 text-sm font-bold font-medium text-secondary title-font">
            Participants
          </span>
        )}
        {participants &&
          participants.map((p) => (
            <Person name={p.name} avatar={p.avatar} twitter={p.twitter} email={p.email} />
          ))}
      </div>
      <div className="w-full pt-0 mb-4 lg:flex-grow">
        <h3 className="mb-4 text-md font-medium tracking-widest text-secondary title-font">
          <strong>{wpKey}</strong> - {title}
        </h3>
        <p className="prose">{text}</p>
      </div>
    </li>
  )
}
