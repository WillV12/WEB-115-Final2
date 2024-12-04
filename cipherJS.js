/*Initializing variables including the alpha array for shifting later on */
const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const output = document.getElementById('output')
const inputs = document.getElementById('cipherForm')

/*Event listener on the input form that looks for a submission */
inputs.addEventListener('submit', (event)=>{
    event.preventDefault() // stops webpage from reloading once a form is submitted

    /*Retrieves all inputs from the form and initalizes result as an empty string */
    let textInput = document.getElementById('text').value.toLowerCase() // retrieves and normalizes plaintext
    let shiftNum = parseInt(document.getElementById('shift').value)
    let direction = document.getElementById('direction').value
    let mode = document.getElementById('mode').value
    let result = ''

    /*I check for the two possibilties that would result in a negative shift and flip the sign as needed.*/
    if ((direction == 'left' && mode == 'encrypt') || (direction == 'right' && mode =='decrypt')){
        shiftNum = shiftNum * -1
    }

    let letter
    let newIndex
    let wrap
    for (let i = 0; i<textInput.length; i++){ // Iterates through the input string, selecting each letter 
        letter = textInput[i]
        
        /*This loops finds the corresponding posistion of each letter's index in the alpha array.
        The variable letter will be reassigned at the end of each loop*/
        for (index = 0; index<alpha.length; index++){
            if (letter == alpha[index]){ // Once the index is found, it adds the shift
                newIndex = index+shiftNum 
                if (newIndex > 25 || newIndex < -25){ // checks to see if the shift will be out of range
                    wrap = newIndex % 26 // creates a wrap variable through the use of mod
                    letter = alpha.at(wrap)
                    break
                }
                else{
                    letter = alpha.at(newIndex)
                    break
                }
            }
            
        }
        
        
        result += letter // appends the new text to result
    }

    output.textContent = result // displays the result to a div made in the html file
})