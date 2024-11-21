const input = document.getElementById('username');
const saveButton = document.getElementById('saveName');
const displayName = document.getElementById('displayName');

function updateDisplayName() {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
        displayName.textContent = `Привет, ${storedName}`;
    } else {
        displayName.textContent = 'Привет, ';
    }
}
saveButton.addEventListener('click', () => {
    const userName = input.value.trim();
    if (userName) {
        localStorage.setItem('userName', userName);
        updateDisplayName();
        input.value = ''; 
    }
});
updateDisplayName();