declare module 'browser-crypto' {
  // Add specific types for the functions or objects you use from the module
  // For a quick fix, you can use `any` types
  const createCipheriv: any;
  const createDecipheriv: any;
  export { createCipheriv, createDecipheriv };
}