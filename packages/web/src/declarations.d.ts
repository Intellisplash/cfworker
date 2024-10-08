// secure-json-parse's types rely on node's Buffer
type Buffer = never;

interface WorkerGlobalScopeEventMap {
  fetch: FetchEvent;
}

interface ErrorConstructor {
  captureStackTrace(thisArg: any, func: any): void;
}
