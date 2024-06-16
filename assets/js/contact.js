https://formsubmit.co/nigussiepaul@gmail.com
function submitForm() {
        
    const form = document.querySelector('.contact-form-conatct-page')
    const formData = new FormData(form)
    const url = 'https://formsubmit.co/nigussiepaul@gmail.com'
    fetch(
      url,
      {
        method: 'POST',
        body: formData
      }
    )
    return false
}