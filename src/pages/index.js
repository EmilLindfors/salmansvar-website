import tinytime from "tinytime";
import Link from "next/link";
import Head from "next/head";
import getAllPostPreviews from "@/getAllPostPreviews";
import { FirmsSection, HeroSection } from "@/components";
import {partners} from "@/authors"
import heroImg from '@/img/ludovic.jpg'


const posts = getAllPostPreviews();

const postDateTemplate = tinytime("{MMMM} {DD}, {YYYY}");

export default function Home() {


  return (
    <div className="divide-y divide-gray-200">
      <Head>
      <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MohnCentre" />
        <meta name="twitter:creator" content="@MohnCentre" />
        <meta name="twitter:title" content="Salmansvar Project - Mohn Center" />
        <meta name="twitter:description" content="Responsible innovation in the Norwegian salmon farming industry: Grand Societal Challenges, Dilemmas and Improvements." />
        <meta property="og:url" content="https://salmansvar.now.sh" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Salmansvar Project - Mohn Center" />
        <meta property="og:description" content="Responsible innovation in the Norwegian salmon farming industry: Grand Societal Challenges, Dilemmas and Improvements." />
        <title>Salmansvar Project - Mohn Center</title>
        <meta name="description" content="Responsible innovation in the Norwegian salmon farming industry: Grand Societal Challenges, Dilemmas and Improvements." />
      </Head>
      <HeroSection title="Salmansvar" subtitle1="Responsible innovation in the Norwegian salmon farming industry:" subtitle2="Grand Societal Challenges, Dilemmas and Improvements." heroImg={heroImg} />
      <FirmsSection firms={partners}/>

      <div className="divide-y divide-gray-200 text-center">
        <div className="pt-20 pb-4 space-y-2 md:space-y-5">
          <h1 className="text-xl leading-2 font-extrabold text-primary tracking-tight sm:text-2xl sm:leading-2 md:text-4xl md:leading-4">
            Latest News
          </h1>
          <p className="text-md text-secondary">
            See the latest news from the project
          </p>
        </div>
        <ul className="divide-y divide-gray-200 text-left">
          {posts.map(({ link, module: { default: Component, meta } }) => {
            return (
              <li key={link} className="py-12">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base leading-6 font-medium text-gray-500">
                      <time dateTime={meta.date}>
                        {postDateTemplate.render(new Date(meta.date))}
                      </time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <h2 className="text-2xl leading-8 font-bold tracking-tight">
                        <Link href={link}>
                          <a className="text-gray-900">{meta.title}</a>
                        </Link>
                      </h2>
                      <div className="prose max-w-none text-gray-500">
                        <Component />
                      </div>
                    </div>
                    <div className="text-base leading-6 font-medium">
                      <Link href={link}>
                        <a
                          className="text-teal-500 hover:text-teal-600"
                          aria-label={`Read "${meta.title}"`}
                        >
                          Read more &rarr;
                        </a>
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
