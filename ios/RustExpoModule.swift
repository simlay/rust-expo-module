import ExpoModulesCore

public class RustExpoModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('RustExpoModule')` in JavaScript.
    Name("RustExpoModule")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("rustHelloWorld") { () -> String in
      return String(cString: UnsafePointer<CChar>(rust_hello_world()))
    }

    Function("rustAdd") { (a: Int32, b: Int32) -> Int32 in
      return rust_add(a, b)
    }
  }
}
