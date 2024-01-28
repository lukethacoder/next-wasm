import type { AddModuleExports } from '../../../wasm';
// @ts-ignore
import addWasm from '../../../wasm/components/add/add_bg.wasm?module';

const module$ = WebAssembly.instantiate(addWasm);

export async function GET(request) {
  const instance = (await module$) as any;
  const exports = instance.exports as AddModuleExports;
  const { add_one: addOne } = exports;
  const number = addOne(10);

  return new Response(`got: ${number}`);
}

export const runtime = 'edge';
