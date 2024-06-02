  let body = document.getElementsByTagName('body')
  body[0].style.backgroundColor = '#0DCAF0'
  let btn = document.getElementById('btn')
    let i = 1
    btn.addEventListener('click', () => {
        
        let rowDiv = document.getElementById('row')
    var inputField = document.getElementById('inputField')
    if (inputField.value != '') {
        let editBtn = document.createElement('button')
        let deleteButton = document.createElement('button')
        editBtn.setAttribute('class' , 'button1')
        deleteButton.setAttribute('class' , 'button')
        editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
        deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
        let newDiv = document.createElement('div')
            newDiv.className = 'col-sm-6 col-lg-3 col-md-4 newDiv'
            // newDiv.innerHTML = `<span class='textSpan'>${inputField}</span> <br>`
        let textSpan = document.createElement('div')
        textSpan.innerText = inputField.value
        textSpan.setAttribute('class', 'textSpan')
            newDiv.appendChild(textSpan)
            newDiv.appendChild(editBtn)
            newDiv.appendChild(deleteButton)
            rowDiv.appendChild(newDiv)
        inputField.value = ''
        i++
        console.log(editBtn);
        editBtn.addEventListener('click', () => {
            let newInput = document.createElement('input')
            newDiv.appendChild(newInput)
            newDiv.removeChild(editBtn)
            newDiv.removeChild(deleteButton)
            let saveBtn = document.createElement('button')
            newDiv.appendChild(saveBtn)
            saveBtn.innerText = 'Save'
            saveBtn.setAttribute('class', 'saveBtn')

            saveBtn.addEventListener('click', () => {
                newDiv.innerText = newInput.value;
                newDiv.appendChild(editBtn)
                newDiv.appendChild(deleteButton)
                console.log(true);
            })
        })
        
        
        deleteButton.addEventListener('click', () => {
            newDiv.remove()
        })    

        }else{
            alert('Write a TO DO in input field')
        }
    })