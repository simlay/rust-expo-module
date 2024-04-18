// Import the native module. On web, it will be resolved to RustExpoModule.web.ts
// and on native platforms to RustExpoModule.ts
import RustExpoModule from './RustExpoModule';
import RustExpoModuleView from './RustExpoModuleView';

export function rustHelloWorld(): string {
  return RustExpoModule.rustHelloWorld();
}
export function rustAdd(a: number, b: number): number{
  return RustExpoModule.rustAdd(a, b);
}

export { RustExpoModuleView };
