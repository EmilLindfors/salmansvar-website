import fs from 'fs'
import RSS from 'rss'
import getAllPostPreviews from '../src/getAllPostPreviews'

const feed = new RSS({
  title: 'RegReSir Website',
  site_url: 'https://regresir.now.sh',
  feed_url: 'https://regresir.now.sh/feed.xml',
})

getAllPostPreviews().forEach(({ link, module: { meta } }) => {
  feed.item({
    title: meta.title,
    guid: link,
    url: `https://regresir.now.sh${link}`,
    date: meta.date,
    description: meta.description,
    //custom_elements: [].concat(meta.author.map((author) => ({ author: [{ name: author.name }] }))),
  })
})

fs.writeFileSync('./out/feed.xml', feed.xml({ indent: true }))