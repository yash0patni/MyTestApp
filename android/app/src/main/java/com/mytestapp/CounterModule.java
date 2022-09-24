package com.mytestapp;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CounterModule extends ReactContextBaseJavaModule {

    private int count = 0;

    @ReactMethod
    public void increment(Callback callback) {
        count += 1;
        String message = "Value from android side: " + count + " using callback";
        callback.invoke(message);
    }

    @ReactMethod
    public void decrement(Promise promise) {
        if (count == 0) {
            promise.reject(new Error("Count cannot be negative"));
        } else {
            count -= 1;
            String message = "Value from android side: " + count + " using promise";
            promise.resolve(message);
        }
    }

    @NonNull
    @Override
    public String getName() {
        return "CounterModule";
    }
}
