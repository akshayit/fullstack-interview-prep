export function debounce(fn, delayMs) {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delayMs);
  };
}

const searchProducts = debounce(async (query) => {
  if (!query.trim()) return;

  const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
  const data = await response.json();
  renderResults(data.items);
}, 300);

function renderResults(items) {
  console.log("Render search results", items);
}

document.querySelector("#search")?.addEventListener("input", (event) => {
  searchProducts(event.target.value);
});

