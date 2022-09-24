//
//  CustomModule.swift
//  MyTestApp
//
//  Created by Yash Patni on 23/09/22.
//

import Foundation

@objc(CustomModule)
class CustomModule: NSObject {
  
  @objc
  func getDeviceId(_ resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) {
    let id = UIDevice.current.identifierForVendor?.uuidString
    
    if (id != nil) {
      resolve(id);
    } else {
      let error = NSError(domain: "", code: 200, userInfo: nil);
      reject("ID_NOT_FOUND", "Could not fetch device id", error);
    }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true;
  }
}
