// Instructions :
// to create new download link, copy downloadFile func. and replace link in href with github download link*
// * To get github download link, go to github releases right click on file > copy link

// open github repo
function openLink(url) {
    window.open(url, '_blank');
}

document.getElementById('github_repo').addEventListener('click', function() {
    openLink('https://github.com/TaAils1440p/taails-browser');
});

// Download file
function downloadFile() {
    let link = document.createElement("a");
    link.href = "https://github.com/TaAils1440p/taails-browser/releases/download/v1.0.0/com.taails.taailsbrowser.apk";
    link.download = "com.taails.taails-browser.apk";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}