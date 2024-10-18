
document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('text');
    const cursorElement = document.getElementById('cursor');
    const text1 = "Professional Web Designer";
    const text2 = "Web Developer";
    let index = 0;
    let isDeleting = false;
    let isTypingText2 = false;

    function type() {
        if (isTypingText2) {
            if (index < text2.length) {
                textElement.textContent += text2.charAt(index);
                index++;
                setTimeout(type, 100); // speed
            } else {
                cursorElement.style.display = 'none'; // Hide cursor after typing is done
            }
        } else {
            if (!isDeleting) {
                if (index < text1.length) {
                    textElement.textContent += text1.charAt(index);
                    index++;
                    setTimeout(type, 100); // speed
                } else {
                    setTimeout(() => {
                        isDeleting = true;
                        index--;
                        type();
                    }, 1000); // Pause before deleting
                }
            } else {
                if (index >= 13) { // "Professional "
                    textElement.textContent = text1.substring(0, index);
                    index--;
                    setTimeout(type, 50); // speed 
                } else {
                    isDeleting = false;
                    isTypingText2 = true;
                    index = 0;
                    type();
                }
            }
        }
    }

    type();
});
