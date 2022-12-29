import Foundation

@objc public class Openinstall: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
