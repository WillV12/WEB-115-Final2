const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const output = document.getElementById('output')
const inputs = document.getElementById('cipherForm')

inputs.addEventListener('submit', (event)=>{
    event.preventDefault()

    let textInput = document.getElementById('text').value.toLowerCase()
    let shiftNum = parseInt(document.getElementById('shift').value)
    let direction = document.getElementById('direction').value
    let mode = document.getElementById('mode').value
    let result = ''

    if ((direction == 'left' && mode == 'encrypt') || (direction == 'right' && mode =='decrypt')){
        shiftNum = shiftNum * -1
    }
    let letter
    let newIndex
    let wrap
    for (let i = 0; i<textInput.length; i++){
        letter = textInput[i]
        if (!alpha.includes(letter)){
            result += letter
        }
        else{
        for (index = 0; index<alpha.length; index++){
            if (letter == alpha[index]){
                newIndex = index+shiftNum 
                if (newIndex > 25 || newIndex < -25){
                    wrap = newIndex % 26
                    letter = alpha.at(wrap)
                    break
                }
                else{
                    letter = alpha.at(newIndex)
                    break
                }
            }
            
        }
        }
        
        result += letter
    }

    output.textContent = result
})