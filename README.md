# node-bounded-context-canvas
A simple node implementation of bounded context canvas from [dddcrew](https://github.com/ddd-crew/bounded-context-canvas)

It consists in builders for each part of the bounded context canvas, and can be found in src/domain

# Example of implementation of the canvas
A dummy example is provided to have an hint on how to implement bounded context canvas in your node implementation. It is dummy and not complete.

# Example of usage in code
[registerDomains.ts](https://github.com/charlespichery/node-bounded-context-canvas/blob/main/src/example/boundedcontext/registerDomains.ts) provides an example on how to register the queries, commands and events and their handlers.

# Json export for display
```yarn export-order``` can be used to export order domain from the example into a json file in export/orderBoundedContext.json

# Display of bounded context canvas
A [side project](https://github.com/charlespichery/node-bounded-context-canvas-display) shows an implementation of display using the previously exported json.
You can view a live demo using the example [here](https://charlespichery.github.io/node-bounded-context-canvas-display/)