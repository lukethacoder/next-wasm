// import type { AddModuleExports } from "../wasm";
// import dynamic from "next/dynamic";

// interface RustAddProps {
//   number: Number;
// }

// const RustAdd2 = dynamic({
//   loader: async () => {
//     // Import the wasm module
//     // @ts-ignore
//     const exports = (await import("../wasm/components/add/add_bg.wasm")) as AddModuleExports;
//     const { add_one: addOne } = exports;
//     console.log('addOne ', addOne)
//     console.log('addOne(10) ', addOne(10))

//     // Return a React component that calls the add_one method on the wasm module
//     return ({ number }: RustAddProps) => (
//       <div className="text-white">
//         <>{addOne(number)}</>
//       </div>
//     );
//   },
// });

'use client'
 
import { useEffect, useState } from 'react'
// import dynamic from 'next/dynamic'
 
// Client Components:
// const addOne = dynamic(() => import("../wasm/components/add/add_bg.wasm").add_one)
// const ComponentB = dynamic(() => import('../components/B'))
// const ComponentC = dynamic(() => import('../components/C'), { ssr: false })
 
export default function UseEffectLoad({ number }: { number: number } ) {
  const [value, setValue] = useState<number | null>()

  useEffect(() => {
    (async () => {
      const wasm = (await import("../wasm/components/add/add_bg.wasm"))
      // console.log('wasm ', wasm)
      if (wasm) {
        const { add_one } = wasm
        const _number = add_one(number)
        // console.log('add_one ', add_one(number))
        setValue(_number)
      }
    })()
  }, [])

  return (
    <div>
      <p>UseEffectLoad: {value}</p>
    </div>
  )
}