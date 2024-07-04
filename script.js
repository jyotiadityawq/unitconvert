function convertLength() {
    const input = document.getElementById('input').value;
    const unit = document.getElementById('unit').value;
    let result;

    switch(unit) {
        case 'm':
            result = input * 3.28084;
            break;
        case 'ft':
            result = input / 3.28084;
            break;
        case 'in':
            result = input * 39.3701;
            break;
        case 'cm':
            result = input * 100;
            break;
        default:
            result = 'Invalid unit';
    }

    document.getElementById('result').innerText = `${input} ${unit} is equal to ${result.toFixed(2)} ${unit === 'm' ? 'ft' : unit === 'ft' ? 'm' : unit === 'in' ? 'cm' : 'in'}`;
}
function resetConverter() {
    document.getElementById('input').value = '';
    document.getElementById('result').innerText = '';
}

