# chase-balance-fixer

Run this Chrome extension and never forget how much money you actually have

## Setup

For safety reasons I'm not hosting this as a real extension. You never know what those are doing behind the scenes and we're talking banking info here.

So you have to run it yourself. Here's how 👇

1. Clone repository `$ git clone git@github.com:Swizec/chase-balance-fixer.git`
2. Open `fix-credit.js` and edit `CREDIT_ID` and `CHECKING_ID` constants
3. This is a great chance to look at my code and see it isn't mischievous
4. Open chase.com and right-click inspect your account list
5. Find your IDs in a div like this `<div class="account-tile" id=<YOUR ID>`
6. Open chrome://extensions turn on Developer mode
7. Click Load Unpacked
8. Choose your code

Enjoy ✌️

## Here's how it works

My code is purposefully simple. Written in about 10 minutes.

```javascript
function value(node) {
    return Number(node.textContent.replace("$", "").replace(",", ""));
}
```

Takes a DOM node and returns its numeric value.

```javascript
function getNode(account) {
    return document.querySelector(`#${account} .balance`);
}
```

Takes an account id and uses it to find the balance node. Basic JavaScript DOM stuff so we can avoid dependencies.

```javascript
setTimeout(() => {
    const credit = getNode(CREDIT_ID),
        checking = getNode(CHECKING_ID);

    if (credit && checking) {
        actualMoneys = value(checking) - value(credit);

        checking.textContent = `$${actualMoneys.toLocaleString("en")}`;
    }
}, 3000);
```

Chase web client works as an SPA so we have to give it some time to render everything. 3 seconds looked good enough to me.

Code gets your credit card account's node and your checking account node, then updates your checking balance less your credit balance.

That's how you always know how much money you've got.
