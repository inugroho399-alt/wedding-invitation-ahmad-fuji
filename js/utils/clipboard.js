export function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else {
        // Fallback untuk HTTP/Localhost
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return Promise.resolve();
        } catch (err) {
            console.error('Fallback copy failed', err);
            document.body.removeChild(textArea);
            return Promise.reject(err);
        }
    }
}

export function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}