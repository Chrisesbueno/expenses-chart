const data = import('./data.json', {assert: {type: 'json'}});
const days = document.querySelectorAll('.chart');
const charts = [
    document.getElementById('mon'),
    document.getElementById('tue'),
    document.getElementById('wed'),
    document.getElementById('thu'),
    document.getElementById('fri'),
    document.getElementById('sat'),
    document.getElementById('sun')
]

data.then( day => 
    day.default.forEach(day => {
        days.forEach(element => {
            if (element.children[1].innerHTML == day.day) {
                const amount = createAmount(day.amount);
                element.children[0].append(amount);
                chartsHeight(element.children[0], day.amount)
            }
            
        });    
    })
);

function chartsHeight(chart, height) {
    let value = 3 * height
    charts.forEach(element => {
        if (element == chart) {
            element.style.height = `${value}px`
        }
    });
}

function createAmount(amount) {
    let hover = document.createElement('p');
    hover.classList.add('active');
    hover.innerHTML = `$${amount}`;
    return hover;
}
