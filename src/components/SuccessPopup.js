import React, { useEffect } from 'react';
import "../css/SuccessPopup.css"

function SuccessPopup({ onClose }) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timeout);
    }, [onClose]);

    return (
        <div className="SuccessPopup">
            <h1>Đặt hàng thành công</h1>
        </div>
    );
}

export default SuccessPopup;