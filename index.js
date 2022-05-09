const NUM_MAX_SCHOLARSHIP = 5
const IS_ADULT = 18
const userNameInput = document.getElementById('input-name')
const userAgeInput = document.getElementById('input-age')
const userUnivTitleInput = document.getElementById('input-title')
const userUnemployedInput = document.getElementById('input-paro')

const arrayUserWithScholShip = []

function addScholarshipUser(user){
    alert('Beca consedida')
    arrayUserWithScholShip.push(user)
    let finalUserList = `Alumnos con beca:\n `

    arrayUserWithScholShip.forEach(function(user){
        finalUserList +=` ||${user}|| `
    })

    const scholshipResult = document.getElementById('scholship-result')
    scholshipResult.innerHTML = finalUserList
    
}

function notScholarshipUser(user){
    alert(`${user} beca no consedida. No cumple con los requisitos`)
}

function checkScholarship(){
    let userName = userNameInput.value
    let userAge = userAgeInput.value
    let userUnivTitle = userUnivTitleInput.checked
    let userUnemployed = userUnemployedInput.checked

    const emptyField = userName == '' || userAge == ''

    if(emptyField){
        alert('Complete datos obligatrios')
        return
    }

    const hasScholarship = userAge >= IS_ADULT && userUnivTitle || userUnemployed
    hasScholarship ? addScholarshipUser(userName) : notScholarshipUser(userName)
}

function cleanForm(){
    userNameInput.value = ''
    userAgeInput.value = ''
    userUnivTitleInput.checked = false
    userUnemployedInput.checked = false
}

function sendUserForm(){
    const getScholship = arrayUserWithScholShip.length < NUM_MAX_SCHOLARSHIP
    const fullQuotas = arrayUserWithScholShip.length === NUM_MAX_SCHOLARSHIP
   
    if(getScholship){
        checkScholarship()
        cleanForm()
    }
    if(fullQuotas){
        const noVacancies = document.getElementById('full-quotas')
        noVacancies.innerHTML = 'Lo siento, no hay mas becas'
        return
    }

}
