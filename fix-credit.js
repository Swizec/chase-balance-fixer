const CREDIT_ID = "tile-719933125";
const CHECKING_ID = "tile-671419175";

function value(node) {
    return Number(
        node
            .text()
            .replace("$", "")
            .replace(",", "")
    );
}

function getNode(account) {
    return document.querySelector(`#${account} .balance`);
}

const credit = getNode(CREDIT_ID),
    checking = getNode(CHECKING_ID),
    actualMoneys = value(checking) - value(credit);

checking.text(`$${actualMoneys.toLocaleString("en")}`);
