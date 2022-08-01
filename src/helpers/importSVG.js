export default async function importSVG (fileName) {
  return await import('../logos/'+ fileName);
};