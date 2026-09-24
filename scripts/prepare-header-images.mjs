import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const images = {
  business: { parts: 5, bytes: 10884 },
  products: { parts: 6, bytes: 12174 },
  resources: { parts: 5, bytes: 10074 },
  'customer-support': { parts: 4, bytes: 8046 },
}

const sourceDir = '.header-images'
const outputDir = 'public/assets/img/sieea'

await mkdir(outputDir, { recursive: true })

for (const [name, config] of Object.entries(images)) {
  let encoded = ''

  for (let index = 0; index < config.parts; index += 1) {
    const suffix = String(index).padStart(3, '0')
    const file = path.join(sourceDir, `${name}.${suffix}.b64`)
    encoded += (await readFile(file, 'utf8')).trim()
  }

  const image = Buffer.from(encoded, 'base64')

  if (image.length !== config.bytes) {
    throw new Error(
      `Invalid ${name} header image: expected ${config.bytes} bytes, got ${image.length}`,
    )
  }

  if (image.subarray(0, 4).toString('ascii') !== 'RIFF' ||
      image.subarray(8, 12).toString('ascii') !== 'WEBP') {
    throw new Error(`Invalid WebP header for ${name}`)
  }

  await writeFile(path.join(outputDir, `header-${name}.webp`), image)
  console.log(`Prepared header-${name}.webp (${image.length} bytes)`)
}
