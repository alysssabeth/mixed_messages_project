function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }
  
  const collectiveWisdom = {
    animal: ['aardvark', 'hippo', 'shark', 'orca', 'cougar'],
    research: ['habitat', 'weird facts', 'preferred food', 'common facts', 'numbers in the wild today'],
    advice: ['go find them in the wild', 'visit an animal sanctuary', 'become an expert', 'find a new favorite animal']
  }
  
 
  let personalWisdom = []
  
  
  for(let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)
  
      
    switch(prop) {
      case 'animal':
        personalWisdom.push(`Your new favorite animal should be the "${collectiveWisdom[prop][optionIdx]}".`)
        break
      case 'research':
        personalWisdom.push(`You should research their: "${collectiveWisdom[prop][optionIdx]}".`)
        break
      case 'advice':
        personalWisdom.push(`After finding your new favorite animal and doing some research, you should: "${collectiveWisdom[prop][optionIdx]}".`)
        break
      default:
        personalWisdom.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(personalWisdom);