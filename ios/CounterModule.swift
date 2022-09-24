//
//  Counter.swift
//  MyTestApp
//
//  Created by Yash Patni on 23/09/22.
//

import Foundation

@objc(CounterModule)
class CounterModule: NSObject{
  
  private var count = 0;
    
  @objc
  func increment(_ callback:RCTResponseSenderBlock) {
    count += 1;
    callback(["Value from iOS side: \(count) using callback"]);
  }
  
  @objc
  func decrement(_ resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) {
    if (count == 0) {
      let error = NSError(domain: "", code: 200, userInfo: nil)
      reject("ERROR_COUNT", "Count cannot be negative", error);
    } else {
      count -= 1;
      resolve("Value from iOS side: \(count) using promise");
    }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true;
  }
  
  @objc
  func constantsToExport() -> [String: Any]! {
    return ["initialCount": 0];
  }
}
