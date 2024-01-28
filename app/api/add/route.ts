// import type { AddModuleExports } from '../../../wasm';
// @ts-ignore
// import addWasm from '../../../wasm/add.wasm?module';
import { add_one } from '../../../wasm/components/add/add';

// const module$ = WebAssembly.instantiate(addWasm);

export async function GET(request) {
  // const instance = (await module$) as any;
  // const exports = instance.exports as AddModuleExports;
  // const { add_one: addOne } = exports;
  // const number = addOne(10);
  const number = add_one(10);

  return new Response(`got: ${number}`);
}

export const runtime = 'edge';
