document.getElementById('copy-button').addEventListener('click', function() {
    const code = document.getElementById('python-code').innerText;
    navigator.clipboard.writeText(code).then(function() {
        alert('Code copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});
