use crate::hurl_ext;
use crate::hurl_ext::ext::{HurlParseErrorEnum, HurlPos};
use serde::Serialize;


#[derive(Serialize)]
pub struct ParseResponse {
    error: Option<ParseError>,
    result: Option<String>,
}

#[derive(Serialize)]
pub struct ParseError {
    pos: HurlPos,
    error: HurlParseErrorEnum,
    message: String,
}


#[tauri::command]
pub async fn parse(input: String) -> String {
    let result = match hurl_ext::ext::try_parse(&input) {
        Ok(_) => ParseResponse {
            error: None,
            result: Some("File is okay".to_string()),
        },
        Err(err) => ParseResponse {
            error: Some(ParseError {
                pos: err.pos.clone(),
                error: err.inner.clone(),
                message: hurl_ext::ext::parse_err_to_pos_err(&err.inner, err.pos),
            }),
            result: None,
        },
    };
    serde_json::to_string(&result).unwrap_or("Error".to_string())
}