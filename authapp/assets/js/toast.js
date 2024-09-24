function showToast(message, type = 'info', duration = 3000) {
    if (!message) return;

    // Create and apply the toast styles dynamically
    const toastStyles = `
        .toast {
            visibility: hidden;
            min-width: 250px;
            margin-left: -125px;
            color: #fff;
            text-align: center;
            border-radius: 2px;
            padding: 16px;
            position: fixed;
            z-index: 1;
            left: 50%;
            bottom: 30px;
            font-size: 17px;
            opacity: 0.9;
        }

        .toast.show {
            visibility: visible;
            -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
            animation: fadein 0.5s, fadeout 0.5s 2.5s;
        }

        .toast.info {
            background-color: #007bff; /* Blue */
        }

        .toast.success {
            background-color: #28a745; /* Green */
        }

        .toast.warning {
            background-color: #ffc107; /* Yellow */
            color: #000;
        }

        .toast.danger {
            background-color: #dc3545; /* Red */
        }

        @-webkit-keyframes fadein {
            from {bottom: 0; opacity: 0;} 
            to {bottom: 30px; opacity: 1;}
        }

        @keyframes fadein {
            from {bottom: 0; opacity: 0;}
            to {bottom: 30px; opacity: 1;}
        }

        @-webkit-keyframes fadeout {
            from {bottom: 30px; opacity: 1;} 
            to {bottom: 0; opacity: 0;}
        }

        @keyframes fadeout {
            from {bottom: 30px; opacity: 1;}
            to {bottom: 0; opacity: 0;}
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = toastStyles;
    document.head.appendChild(styleSheet);

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    document.body.appendChild(toast);

    // Show toast
    toast.classList.add('show');
    
    // Remove toast after the specified duration
    setTimeout(() => {
        toast.classList.remove('show');
        document.body.removeChild(toast);
    }, duration);
}
