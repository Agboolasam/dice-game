function diceValue(value) {
    switch (value) {
        case 1:
            return `
            <div id="dieface1">
            <span class="dots"></span>
        </div>
        `;
        case 2:
            return `
            <div id="dieface2">
            <span class="empty" id="empty1"></span>
            <span class="dots" id="dot1"></span>
            <span class="dots" id="dot2"></span>
            <span class="empty" id="empty2"></span>
        </div>
            `;
        case 3:
            return `
            <div id="dieface3">
            <span class="empty" id="empty1"></span>
            <span class="dots" id="dot1"></span>
            <span class="empty" id="empty2"></span>
            <span class="dots" id="dot2"></span>
            <span class="empty" id="empty3"></span>
            <span class="dots" id="dot3"></span>
            <span class="empty" id="empty4"></span>
        </div>
            `;
        case 4:
            return `
            <div id="dieface4">
            <span class="dots" id="dot1"></span>
            <span class="dots" id="dot2"></span>
            <span class="dots" id="dot3"></span>
            <span class="dots" id="dot4"></span>
        </div>
            `;
        case 5:
            return `
            <div id="dieface5">
            <span class="dots" id="dot1"></span>
            <span class="empty" id="empty1"></span>
            <span class="dots" id="dot2"></span>
            <span class="empty" id="empty2"></span>
            <span class="dots" id="dot3"></span>
            <span class="empty" id="empty3"></span>
            <span class="dots" id="dot4"></span>
            <span class="empty" id="empty4"></span>
            <span class="dots" id="dot5"></span>
        </div>
            `;
        case 6:
            return `
                <div id="dieface6">
                    <span class="dots" id="dot1"></span>
                    <span class="dots" id="dot2"></span>
                    <span class="dots" id="dot3"></span>
                    <span class="dots" id="dot4"></span>
                    <span class="dots" id="dot5"></span>
                    <span class="dots" id="dot6"></span>
                    <span class="empty" id="empty6"></span>
                </div>
                `;

        default:
            break;
    }
}
let justFunction = () => {
    console.log("just triggered");
};

export { diceValue, justFunction };