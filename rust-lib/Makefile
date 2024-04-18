cbindgen:
	cbindgen ./src/lib.rs -o ../ios/rust/rust_lib.h --lang c

cargo-build:
	 cargo build --target aarch64-apple-ios-sim

lib: cargo-build cbindgen
	cp ./target/aarch64-apple-ios-sim/debug/librust_lib.a ../ios/rust/

update-example: lib
	make -C ../example update-module

watch:
	cargo watch -w ./src/ -w ./Cargo.toml -s 'make update-example'
