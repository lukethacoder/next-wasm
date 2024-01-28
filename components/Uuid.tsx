'use client'
 
import { useEffect, useState } from 'react'

export default function Uuid() {
  const [value, setValue] = useState<string | null>()

  useEffect(() => {
    (async () => {
      const wasm = (await import("../wasm/components/uuid/uuid"))

      if (wasm) {
        const _uuid = wasm.uuid()
        setValue(_uuid)
      }
    })()
  }, [])

  return (
    <div>
      <p>Uuid: {value}</p>
    </div>
  )
}