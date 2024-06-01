const imageInput = document.getElementById('backgroundImageInput');
imageInput.addEventListener('change', (event) => {
const file = event.target.files[0];
  if (file) {
    const reader = new FileReader(); 
    reader.onload = (e) => { 
      document.body.style.backgroundImage = `url(${e.target.result})`;
    }
    reader.readAsDataURL(file);
  }
});
