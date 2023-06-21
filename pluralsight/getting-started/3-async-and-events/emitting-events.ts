import { EventEmitter } from "events";

enum MyEmitterEvents {
  TEST_EVENT = "TEST_EVENT",
  INVOCATION = "INVOCATION",
  END = "END"
}

class MyEmitter extends EventEmitter {
  on(eventName: MyEmitterEvents, listener: (...args: any[]) => void): this {
    return super.on(eventName, listener);
  }

  emit(eventName: MyEmitterEvents, ...args: any[]): boolean {
    return super.emit(eventName, ...args);
  }
}

const myEmitter: MyEmitter = new EventEmitter();

setImmediate(() => myEmitter.emit(MyEmitterEvents.INVOCATION));

myEmitter.on(MyEmitterEvents.INVOCATION, args => console.log(`invocation happened ${args ? `with args ${args}` : "with no args"}`));

myEmitter.emit(MyEmitterEvents.INVOCATION, MyEmitterEvents.INVOCATION);
