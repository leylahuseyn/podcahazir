function getDatas() {
    fetch('https://646fbd4d09ff19b12087b806.mockapi.io/cards')
        .then(res => res.json())
        .then(data => {
            const card = document.querySelector('tbody');
            card.innerHTML = '';
            data.forEach(el => {
                card.innerHTML += `
        <tr>
            <td>${el.id}</td>
            <td><img src="${el.image}" width="50"></td>
            <td>${el.name}</td>
            <td>${el.date}</td>
            <td>${el.text}</td>
            <td><a href="edit.html?${el.id}" class="btn btn-success">EDIT</a></td>
            <td><button class="btn btn-danger">DELETE</button></td>
        </tr>
        `
            })
        }).catch(() => console.log('error'))
}
getDatas();


// document.addEventListener('click', function (e) {
//     const deleteBtn = e.target.closest('.btn-danger')
//         if(deleteBtn) {
//             const fName = deleteBtn.parentElement.parentElement.children[2].innerHTML
//             Swal.fire({
//                 title: fName,
//                 text: "silinsin mi?",
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonColor: '#3085d6',
//                 cancelButtonColor: '#d33',
//                 confirmButtonText: 'Beli!',
//                 cancelButtonText: 'Xeyr!'
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     fetch('https://646fbd4d09ff19b12087b806.mockapi.io/cards/' + deleteBtn.parentElement.parentElement.children[0].innerHTML, {
//                         method: 'DELETE'
//                     }).then(res=>{
//                         if (res.ok) {
//                         console.log('silindi');
//                         Swal.fire(
//                             'Deleted!',
//                             'Your file has been deleted.',
//                             'success'
//                         )
//                         getDatas();
//                     }
//                     else {
//                         console.log('silinmedi');
//                         Swal.fire(
//                             'Deleted!',
//                             'Your file has been deleted.',
//                             'error'
//                         )
//                     }
//                     })

//                 }
//             })
//         }
//     }).catch(err => Swal.fire('Deleted!', 'Your file has been deleted.', 'error'))






// document.addEventListener('click', function (e) {
//     const deleteBtn = e.target.closest('.btn-danger')
//     if (deleteBtn) {
//         fName = deleteBtn.parentElement.parentElement.children[2].innerHTML
//         Swal.fire({
//             title: fName,
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'beli!',
//             cancelButtonText: 'xeyr!'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch('https://646fbd4d09ff19b12087b806.mockapi.io/cards/' + deleteBtn.parentElement.parentElement.children[0].innerHTML, {
//                     method: 'DELETE'
//                 }).then(res => {
//                     if (res.ok) {
//                         console.log('silindi');
//                         Swal.fire(
//                             'Deleted!',
//                             'Your file has been deleted.',
//                             'success'
//                         )
//                         getDatas();
//                     }
//                     else{
//                         console.log('silinmedi');
//                         Swal.fire(
//                             'Deleted!',
//                             'Your file has been deleted.',
//                             'error'
//                         )
//                     }
//                 })

//             }
//         })
//     }
// }).catch(err=>Swal.fire('Deleted!','Your file has been deleted.','error'))

document.addEventListener('click', function (e) {
    const deleteBtn = e.target.closest('.btn-danger')
    if (deleteBtn) {
        const fName = deleteBtn.parentElement.parentElement.children[2].innerHTML
        Swal.fire({
            title: fName,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'beli',
            cancelButtonText: 'xeyr'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://646fbd4d09ff19b12087b806.mockapi.io/cards/' + deleteBtn.parentElement.parentElement.children[0].innerHTML,{
                    method: 'DELETE'
                }).then(res => {
                    if (res.ok) {
                        console.log('silindi');
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        getDatas();
                    }
                    else{
                        console.log('silinmedi');
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'error'
                        )
                    }
                })

            }
        }).catch(err=> Swal.fire('Deleted!','Your file has been deleted.','error'))
    }
})
