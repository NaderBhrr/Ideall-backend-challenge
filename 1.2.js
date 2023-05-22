const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log("0");
fetchPromise.then((response) => {
  console.log(
    "1",
    response.json().then((data) => console.log("3"))
  );
  console.log("2");
});
console.log("4");

/**
 * The order of logs:
 * 1. "0"
 * 2. "4"
 * 3. "1", Promise
 * 4. "2"
 * 5. "3"
 */
