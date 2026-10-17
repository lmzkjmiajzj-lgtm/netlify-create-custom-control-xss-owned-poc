import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'custom',
  nodeVersion: '18',
  installCommand: 'npm install',
  devCommand: 'node server.js --port {PORT} --hostname {HOSTNAME}',
  buildCommand: 'npm run build',
  publishDir: 'dist',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [{
        type: 'page',
        name: 'OpenLinkProof',
        label: 'Visual Editor openLink proof',
        urlPath: '/',
        filePath: 'content/index.json',
        fields: [
          { name: 'title', type: 'string', required: true },
          { name: 'description', type: 'text' }
        ]
      }]
    })
  ]
});
