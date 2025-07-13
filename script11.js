// data for the pie chart and expense list
const expenseData = {
    labels: ['Salary','Amazon', 'Transportation', 'Home Loan', 'Entertainment','Card Bills','Rent'],
    data: [70000,7000, 1000, 2000, 1500,3500,5000] // Example amounts
};

// Function to render the pie chart
function renderChart() {
    var ctx = document.getElementById('expense-chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: expenseData.labels,
            datasets: [{
                data: expenseData.data,
                backgroundColor: [
                    '#ff6384',
                    '#36a2eb',
                    '#ffce56',
                    '#4bc0c0',
                    '#e74c3c',
                    '#95a5a6',
                

                ]
            }]
        }
    });
}
// Function to load content when buttons are clicked
function loadContent(buttonId) {
    var content = document.getElementById('content');
    switch (buttonId) {
        case 'stats-btn':
            content.innerHTML = '<h2>Stats Content</h2><p>Loading statistics...</p>';
            break;
        case 'accounts-btn':
            content.innerHTML = '<h2>Accounts Content</h2><p>Loading Accounts...</p>';
            break;
        case 'more-btn':
            content.innerHTML = '<h2>More Content</h2><p>Loading More Options...</p>';
            break;
        default:
            content.innerHTML = '';
    }
}

// Event listeners for button clicks
document.getElementById('stats-btn').addEventListener('click', function() {
    loadContent('stats-btn');
});

document.getElementById('accounts-btn').addEventListener('click', function() {
    loadContent('accounts-btn');
});

document.getElementById('more-btn').addEventListener('click', function() {
    loadContent('more-btn');
});


// Function to render the expense list
function renderExpenseList() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';
    expenseData.labels.forEach((label, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('expense-item');
          listItem.innerHTML = `₹{Bills}: ₹${expenseData.data[index]}`;
        expenseList.appendChild(listItem);
    });
}

// Render the chart and expense list when the page loads
document.addEventListener('DOMContentLoaded', function() {
    renderChart();
    renderExpenseList();
});
