
function downloadVideo() {
    const url = document.getElementById('videoUrl').value;
    if (!url) {
        alert('Please paste a valid URL');
        return;
    }
    alert('Your download will start shortly for: ' + url);
}
