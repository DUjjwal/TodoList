let cnt = 10
let but = document.querySelector('#add-button')

// let delButton = null;
but.addEventListener('click',function(e) {
    let button = document.querySelector('.bar')
    let str = button.value
    let date = new Date()
    date=date.toLocaleString()
    populateDiv(str, date)
    button.value=""
})
document.querySelector('.content').addEventListener('click',function(e) {
    if(e.target && e.target.id == 'delete') {
        e.target.closest('.card').remove()
    }
})

document.querySelector('.content').addEventListener('click',function(e) {
    if(e.target && e.target.id == 'edit') {
        let parent = e.target.parentElement.parentElement
        let bar = parent.querySelector('.task')
        bar.removeAttribute('disabled')
        bar.removeAttribute('readonly')
        bar.focus()
        
    }
})



function populateDiv(str, date) {
    const div = document.createElement('div')
    div.setAttribute('class','card')
    div.setAttribute('id',`${cnt}`)
    div.innerHTML = `
                    
                    <div class="text">
                        <div class="date">
                            ${date}
                        </div>
                        <textarea type="text" class="task" readonly disabled >${str}
                        </textarea>
                    </div>
                    <div class="buttons">
                        <i class="fa-solid fa-pen-to-square" id="edit"></i>
                        <i class="fa-solid fa-trash" id="delete"></i>
                    </div>
                
            `
    document.querySelector('.content').appendChild(div)
    cnt++
}


//ToDO - delte button funcitonality



