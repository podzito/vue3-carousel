import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import css from 'rollup-plugin-css-only'
import del from 'rollup-plugin-delete'
import dts from 'rollup-plugin-dts'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'
import typescript from 'rollup-plugin-typescript2'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const pkg = JSON.parse(readFileSync(join(__dirname, 'package.json'), 'utf-8'))

const banner = `/**
 * Vue 3 Carousel ${pkg.version}
 * (c) ${new Date().getFullYear()}
 * @license MIT
 */`

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'umd',
        name: 'VueCarousel',
        banner,
        globals: {
          vue: 'Vue',
        },
      },
      {
        file: pkg.module,
        format: 'es',
        banner,
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      css({ output: 'carousel.css' }),
      typescript({ useTsconfigDeclarationDir: true }),
    ],
  },
  {
    input: 'dist/dts/index.d.ts',
    output: [{ file: 'dist/carousel.d.ts', format: 'es' }],
    external: [/\.css$/],
    plugins: [
      typescriptPaths({ preserveExtensions: true }),
      dts(),
      del({ hook: 'buildEnd', targets: 'dist/dts', runOnce: true }),
    ],
  },
]
