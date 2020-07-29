const forms = document.querySelectorAll('form');
const close = document.querySelector('.close');
const headerForm = document.querySelector('.header_form');
const modal = document.querySelector('.modal');

close.addEventListener('click', e => {
    e.preventDefault;
    modal.style.display = 'none';              
    confetti.stop(); 
});

forms.forEach(form => {
    form.addEventListener('submit', e => {

        e.preventDefault();

        const email = form.email.value.trim().toLowerCase();
        if (email === "") {
            console.log('Please enter an email');
        } else {
            const emailObj = {
                email: form.email.value.trim()
            }
            db.collection('emails').add(emailObj).then(() => {
                console.log('Successfully added email');
                confetti.start(); 
                modal.style.display = 'flex';
                form.reset();
            }).catch(err => {
                console.log(err);
            })
        }
        return false;
    })
})

db.collection('emails').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data().email);
    });
}).catch(err => {
    console.log(err);
});


