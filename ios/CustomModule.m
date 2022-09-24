//
//  CustomModule.m
//  MyTestApp
//
//  Created by Yash Patni on 23/09/22.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(CustomModule, NSObject)
  
RCT_EXTERN_METHOD(getDeviceId:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)

@end
