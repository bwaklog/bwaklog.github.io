function lightScheme() {
    // change the tags
    /*
        :root {
            --color-text: #ffffff;
            --color-background: #0d0d0a;
            --color-primary: #FF4A6A;
            --color-primary-dim: #FF4A6A7f;
            --color-postcard-text: #b4befe5f;
            --color-white-accent: #ffffff35;
            --catppuccino-mocha-dark: #1e1e2d;
        }
    */
    document.documentElement.style.setProperty('--color-text', '##484848');
    document.documentElement.style.setProperty('--color-background', '##f6f5ee');
    document.documentElement.style.setProperty('--color-postcard-text', '#484848');
}

window.addEventListener("load", function() {
    lightScheme();
});
