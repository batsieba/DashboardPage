const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.querySelector("#close-btn");

const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click',() =>{
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click',() =>{
    sideMenu.style.display = 'none';
});

//theme changer
themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})


//fill in orders to table
orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td class="${order.shipping === 'declined' ? 'danger': order.shipping === 'pending' ? 'warning' : 'primary'}">${order.paymentStatus}</td>
    <td class="warning">${order.shipping}</td>
    <td class="primary">Details</td>
    `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})

var totalSales, totalIncome, totalExpense = 0;

const totsales = document.getElementById("totSales");
// totSales.innerHTML = "$"+500;
// console.log(totsales);
const expenses = document.getElementById("totExpenses");
const incomes = document.getElementById("totIncome");

salesy.forEach(sale =>{
totalSales += sale.sales;
totalExpense += sale.expense;
totalIncome += sale.income;
});
console.log(totalSales);
totsales.innerHTML = "$" + totalSales;
expenses.innerHTML = "$" + totalExpense;
incomes.innerHTML = "$" + totalIncome;

