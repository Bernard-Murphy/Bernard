const projects = document.getElementsByClassName('a-projects');

for (let i = 0; i < projects.length; i++){
    let index = i + 1;
    let a = document.querySelector(`#a-proj-${index}`);
    let h4 = document.querySelector(`#h4-proj-${index}`);
    let p = document.querySelector(`#p-proj-${index}`);
    a.addEventListener('mouseenter', () => {
        h4.style.color = 'whitesmoke';
        p.style.color = 'whitesmoke';
    })
    a.addEventListener('mouseleave', () => {
        h4.style.color = 'mediumslateblue';
        p.style.color = 'mediumslateblue';
    })
}

function contactSubmit(){
    let name = document.querySelector('#input-name').value;
    let email = document.querySelector('#input-email').value;
    let message = document.querySelector('#input-message').value;
    if (checkEmail(email) === false){
        error('Please enter a valid email');
    } else if (name.length > 200){
        error('Please enter a shorter name');
    } else if (message.length > 20000){
        error('Please enter a shorter message');
    } else if (name.length === 0){
        error('Please enter a name');
    } else if (message.length === 0){
        error('Please enter a message');
    } else {
        success('Sending message...');
        axios.post('https://bernardmurphy.net/message', {
            name: name,
            email: email,
            message: message
        }).then(res => {
            if (res.data.success){
                document.querySelector('#input-name').value = '';
                document.querySelector('#input-email').value = '';
                document.querySelector('#input-message').value = '';
                success('Thank you for your message. I will respond as soon as possible.')
            }
        }).catch(err => {
            error('An error occurred. Please try again.')
        })
    }
}

function checkEmail(text){ 
    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return re.test(text);
}

function error(text){
    let msg = document.querySelector('#h4-message');
    let err = document.querySelector('#h4-error');
    if (msg.classList.contains('hide') === false){
        msg.style.display = 'none';
        msg.classList.toggle('hide');
    }
    if (err.classList.contains('hide')){
        err.style.display = 'block';
        err.classList.toggle('hide');
    }
    err.textContent = text;
}

function success(text){
    let msg = document.querySelector('#h4-message');
    let err = document.querySelector('#h4-error');
    if (err.classList.contains('hide') === false){
        err.classList.toggle('hide');
        err.style.display = 'none';
    }
    if (msg.classList.contains('hide')){
        msg.style.display = 'block';
        msg.classList.toggle('hide');
    }
    msg.textContent = text;
}