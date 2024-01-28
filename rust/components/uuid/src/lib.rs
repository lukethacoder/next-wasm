use wasm_bindgen::prelude::*;
use uuid::Uuid;

#[wasm_bindgen]
pub fn uuid() -> String {
    Uuid::new_v4().to_string()
}