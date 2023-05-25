// let url ='https://646fbd4d09ff19b12087b806.mockapi.io/cards/'+ window.location.search.substring(1);
// if(window.location.search.substring(1)==''){
//     window.location.href='list.html'
// }
// fetch(url)
// .then(res=>{
//     if(res.ok){
//         return res.json();
//     }
//     else{
//         window.location.href='list.html'
//     }
// }).then(data=>{
//     document.querySelector('#image').value=data.image;
//     document.querySelector('#name').value=data.name;
//     document.querySelector('#date').value=data.date;
//     document.querySelector('#text').value=data.text;
// }).catch(err=>console.log('error'))

// const btn = document.querySelector('button')
// btn.addEventListener('click', function () {
//     fetch(url, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             image: document.querySelector('#image').value,
//             name: document.querySelector('#name').value,
//             date: document.querySelector('#date').value,
//             text: document.querySelector('#text').value,
//         })
//     }).then(res => {
//        if(res.ok){
//         window.location.href='list.html'
//        }
//        else{
//         console.log('error');
//        }
//     })
//         .catch(() => console.log('error'))
// })



// let url ='https://646fbd4d09ff19b12087b806.mockapi.io/cards/'+window.location.search.substring(1)
// if(window.location.search.substring(1)==''){
//     window.location.href = 'list.html'
// }
// fetch (url)
// .then(res=>{
//     if(res.ok){
//         return res.json();
//     }
//     else{
//         window.location.href = 'list.html'
//     }
// }).then(data=>{
//     document.querySelector('#image').value=data.image;
//     document.querySelector('#name').value=data.name;
//     document.querySelector('#date').value=data.date;
//     document.querySelector('#text').value=data.text;
// }).catch(err=>console.log('error'))


// const btn = document.querySelector('button')
// btn.addEventListener('click', function () {
//     fetch(url, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             image: document.querySelector('#image').value,
//             name: document.querySelector('#name').value,
//             date: document.querySelector('#date').value,
//             text: document.querySelector('#text').value,
//         })
//     }).then(res => {
//         if(res.ok){
//             window.location.href='list.html'
//         }
//         else{
//             console.error('error');
//         }
//     })
//         .catch(() => console.error('error'))
// })

let url = 'https://646fbd4d09ff19b12087b806.mockapi.io/cards/'+window.location.search.substring(1);
if(window.location.search.substring(1)==''){
    window.location.href ='list.html'
}
fetch(url)
.then(res=>{
    if(res.ok){
        return res.json();
    }
    else{
        window.location.href ='list.html'
    }
}).then(data=>{
    document.querySelector('#image').value = data.image;
    document.querySelector('#name').value = data.name;
    document.querySelector('#date').value = data.date;
    document.querySelector('#text').value = data.text;
}).catch(err=>console.log('error'))

const btn = document.querySelector('button')
btn.addEventListener('click', function () {
    fetch(url, {
        method: 'PUT',
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
        if(res.ok){
             window.location.href='list.html'
        }
       else{
        console.log('error');
       }
    })
        .catch(() => console.log('error'))
})