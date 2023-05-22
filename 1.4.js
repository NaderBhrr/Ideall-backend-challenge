const _object = {
  name: "John",
  age: 30,
};

const proxyHandler = {
  get: function (_target, _trap) {
    return "404";
  },
};

const proxy = new Proxy(_object, proxyHandler);

console.log(proxy.name); // Output: 404
console.log(proxy.age); // Output: 404
