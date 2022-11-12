
let emailValue = '';
let passwordValue = ''






const emailHandler = (e) => {
    emailValue = e
}

const passwordHandler = (e) => {
    passwordValue = e
}

const submitHandler = () => {
    // validation starts here

    console.log("email", emailValue)
    console.log("password", passwordValue)

    const emailInput = document.getElementById('email')
    const passInput = document.getElementById('pass')




    if (emailValue.length > 0 && passwordValue.length > 0 && emailValue.includes('@')) {
        const el = document.getElementById('alertMsgId');
        el.classList.add('animateMsg');
        el.innerHTML = 'Login Success';
        el.style.border = '3px solid #16a34a'
        el.style.borderRadius = '6px'
        el.style.color = '#16a34a'
        el.style.backgroundColor = '#bbf7d0'
        emailInput.value = '';
        passInput.value = ''
        setTimeout(() => {
            window.location.reload()
        }, 2500)

    } else if (emailValue.length > 0 && passwordValue.length > 0) {
        const el = document.getElementById('alertMsgId');
        el.classList.add('animateMsg');
        el.innerHTML = 'email is not recognised'
        el.style.border = '3px solid #dc2626'
        el.style.borderRadius = '6px'
        el.style.color = '#dc2626'
        el.style.backgroundColor = '#fca5a5'
        emailInput.value = '';
        passInput.value = ''
        setTimeout(() => {
            window.location.reload()
        }, 2500)
    } else if (emailValue.length > 0) {
        const el = document.getElementById('alertMsgId');
        el.classList.add('animateMsg');
        el.innerHTML = 'password should be filled'
        el.style.border = '3px solid #dc2626'
        el.style.borderRadius = '6px'
        el.style.color = '#dc2626'
        el.style.backgroundColor = '#fca5a5'
        emailInput.value = '';
        passInput.value = ''
        setTimeout(() => {
            window.location.reload()
        }, 2500)
    } else if (passwordValue.length > 0) {
        const el = document.getElementById('alertMsgId');
        el.classList.add('animateMsg');
        el.innerHTML = 'email should be filled'
        el.style.border = '3px solid #dc2626'
        el.style.borderRadius = '6px'
        el.style.color = '#dc2626'
        el.style.backgroundColor = '#fca5a5'
        emailInput.value = '';
        passInput.value = ''
        setTimeout(() => {
            window.location.reload()
        }, 2500)
    } else if (emailValue.length === 0 && passwordValue.length === 0) {
        const el = document.getElementById('alertMsgId');
        el.classList.add('animateMsg');
        el.innerHTML = 'email and password should be filled'
        el.style.border = '3px solid #dc2626'
        el.style.borderRadius = '6px'
        el.style.color = '#dc2626'
        el.style.backgroundColor = '#fca5a5'
        emailInput.value = '';
        passInput.value = ''
        setTimeout(() => {
            window.location.reload()
        }, 2500)
    }

}



/**
 * non empty field
 * email should contain '@' and length of  password must be greater than or equal to 7
 */


// about javaScript
/**
 * Single Threaded Asynchronous Language
 * executes line by line
 * we can make javaScript to pause the execution on particular line 
 */

