import esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/index.js'],
  loader: { '.js': 'jsx' },
  bundle: true,
  minify: true,
  outfile: 'build/javascript/index.js',
});