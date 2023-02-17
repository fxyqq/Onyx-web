// Add an event listener to the currency selector
document.addEventListener('DOMContentLoaded', function() {
    // Get the necessary elements
    const currencySelector = document.getElementById('currency-selector');
    const currencyIcon = document.getElementById('currency-icon');
  
    // Add an event listener to the currency selector
    currencySelector.addEventListener('change', function() {
      // Get the selected currency
      const selectedCurrency = this.value;
  
      // Update the icon based on the selected currency
      if (selectedCurrency === 'usd') {
        currencyIcon.className = 'fas fa-dollar-sign';
      } else if (selectedCurrency === 'eur') {
        currencyIcon.className = 'fas fa-euro-sign';
      }
    });
  });