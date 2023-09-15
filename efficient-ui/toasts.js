function removeToast() {
    const button = event.target;
    el = button;

    // Check for the parent toast, remove it
    while (el && el.parentNode) {
        el = el.parentNode;
        
        if (el && el.parentNode.classList && el.parentNode.classList.contains("toast-container")) {
            el.classList.add("removing")
            el.addEventListener("animationend", () => {
                el.remove();
            });
            break;
        }
    }
}  