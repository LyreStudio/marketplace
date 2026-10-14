const balanceAmount = document.getElementById('balance-amount');
const transactionList = document.getElementById('transaction-list');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const transactionTypeInput = document.getElementById('transaction-type');
const addButton = document.getElementById('add-button');

let balance = 0;

function updateBalance() {
  balanceAmount.textContent = `$${balance.toFixed(2)}`;
}

function addTransaction(description, amount, type) {
  const transaction = document.createElement('li');
  transaction.classList.add(type);

  const descriptionEl = document.createElement('span');
  descriptionEl.textContent = description;

  const amountEl = document.createElement('span');
  amountEl.textContent = `$${amount.toFixed(2)}`;

  transaction.append(descriptionEl, amountEl);
  transactionList.appendChild(transaction);
  balance += type === 'income' ? amount : -amount;
  updateBalance();
}

addButton.addEventListener('click', () => {
  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);
  const type = transactionTypeInput.value;

  if (description.trim() === '' || !Number.isFinite(amount) || amount <= 0) {
    document.querySelector('.lyre-status').textContent='Enter a description and a positive finite amount.';
    return;
  }

  document.querySelector('.lyre-status').textContent='';
  addTransaction(description, amount, type);
  descriptionInput.value = '';
  amountInput.value = '';
});

// Initialize balance
updateBalance();
