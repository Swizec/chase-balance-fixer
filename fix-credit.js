const CREDIT_ID = "tile-719933125";
const CHECKING_ID = "tile-671419175";

function value(node) {
    return Number(node.textContent.replace("$", "").replace(",", ""));
}

function getNode(account) {
    return document.querySelector(`#${account} .balance`);
}

setTimeout(() => {
    const credit = getNode(CREDIT_ID),
        checking = getNode(CHECKING_ID);

    if (credit && checking) {
        actualMoneys = value(checking) - value(credit);

        checking.textContent = `$${actualMoneys.toLocaleString("en")}`;
    }
}, 3000);
