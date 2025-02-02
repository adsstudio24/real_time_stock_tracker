async function getStockPrices() {
    const response = await fetch('http://localhost:5000/stocks');
    const stocks = await response.json();
    document.getElementById("stocks").innerHTML = stocks.map(s => 
        `<li>${s.symbol}: $${s.price}</li>`).join("");
}
