use std::ffi::CString;

#[no_mangle]
extern "C" fn rust_hello_world() -> *mut i8 {
    let c_string = CString::new("HELLO FROM RUST").expect("failed to convert str to CString");
    c_string.into_raw()
}

#[no_mangle]
extern "C" fn rust_add(left: i32, right: i32) -> i32 {
    left + right
}
