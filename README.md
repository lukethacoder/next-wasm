<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lukethacoder/word-repo">
    <img src="https://images.unsplash.com/photo-1594921194380-d4d03d481e83?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="photograph of and avocado - because why not" width="420">
  </a>

<h3 align="center">next-wasm</h3>
  <p align="center">
    WASM in NextJS?
  </p>
</div>

## Installation

Make sure you have [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/) installed.

Install Dependencies

```
cargo build
```

## Compile WASM

Rust components can be compiled to WASM using the scripts in `package.json`:

- `pn rust:add` || `wasm-pack build --out-dir ../../../wasm/components/add rust/components/add`
- `pn rust:uuid` || `wasm-pack build --out-dir ../../../wasm/components/uuid rust/components/uuid`