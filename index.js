import * as esbuild from 'esbuild';

try {
    await esbuild.build({
      entryPoints: ['demo/build.js'],
      bundle: true,
      outfile: 'dist/bundle.js',
      minify: false,
      sourcemap: true,
      platform: 'node',
      target: 'node14',
      format: 'esm'
    });
    console.log('Build complete');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }