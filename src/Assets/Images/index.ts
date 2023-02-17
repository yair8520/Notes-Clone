// @index(['./*.{ts,tsx}', './*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}'`)
export * from './LinksIcons';
export * from './NotesIcon';
export * from './PlusIcon';
export * from './Logo';
export const AppLogo = require('./AppLogo.png');
