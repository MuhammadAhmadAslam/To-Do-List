    let btn = document.getElementById('btn')
    let i = 1
    btn.addEventListener('click', () => {
        
        let rowDiv = document.getElementById('row')
    var inputField = document.getElementById('inputField')
    let editBtn = document.createElement('button')
    editBtn.setAttribute('class' , 'button')
    editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
    let newDiv = document.createElement('div')
        newDiv.className = 'col-sm-12 col-lg-3 col-md-4 newDiv'
        newDiv.innerHTML = `${i} <br> ${inputField.value} <br> <span id='buttonwalaSpan'></span>`
        newDiv.appendChild(editBtn)
        rowDiv.appendChild(newDiv)
    inputField.value = ''
    i++
    console.log(editBtn);
    editBtn.addEventListener('click', () => {
           newDiv.remove()
        })
    })