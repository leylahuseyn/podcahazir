const btn = document.querySelector('.btn')
btn.addEventListener('click', function () {
    fetch('https://646fbd4d09ff19b12087b806.mockapi.io/cards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image: document.querySelector('#image').value,
            name: document.querySelector('#name').value,
            date: document.querySelector('#date').value,
            text: document.querySelector('#text').value,
        })
    }).then(res => {
        console.log('true');
        document.querySelector('#image').value = '';
        document.querySelector('#name').value = '';
        document.querySelector('#date').value = '';
        document.querySelector('#text').value = '';
    })
        .catch(() => console.log('error'))
})




