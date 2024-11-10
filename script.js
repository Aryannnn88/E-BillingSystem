document.querySelectorAll(".dish-select").forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
      const quantityInput = this.closest(".dish").querySelector(".dish-quantity");
      quantityInput.disabled = !this.checked;
      if (!this.checked) {
          quantityInput.value = 1;
      }
  });
});

function generateReceipt() {
  let receiptHTML = '';
  let total = 0;

  document.querySelectorAll(".dish-select:checked").forEach((checkbox) => {
      const dishName = checkbox.getAttribute("data-name");
      const price = parseFloat(checkbox.getAttribute("data-price"));
      const quantity = parseInt(checkbox.closest(".dish").querySelector(".dish-quantity").value);
      const cost = price * quantity;

      receiptHTML += `<div class="receipt-item"><span>${dishName} x ${quantity}</span><span>₹${cost}</span></div>`;
      total += cost;
  });

  receiptHTML += `<div class="total">Total: ₹${total}</div>`;
  document.getElementById("receipt-output").innerHTML = receiptHTML;
}
