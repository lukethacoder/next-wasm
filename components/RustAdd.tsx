import type { AddModuleExports } from "../wasm";
import dynamic from "next/dynamic";

interface RustAddProps {
  number: Number;
}

const RustAdd = dynamic({
  loader: async () => {
    // Import the wasm module
    // @ts-ignore
    const exports = (await import("../wasm/components/add/add_bg.wasm")) as AddModuleExports;
    const { add_one: addOne } = exports;
    console.log('addOne ', addOne)
    console.log('addOne(10) ', addOne(10))

    // Return a React component that calls the add_one method on the wasm module
    return ({ number }: RustAddProps) => (
      <div className="text-white">
        <>{addOne(number)}</>
      </div>
    );
  },
});

export default RustAdd;