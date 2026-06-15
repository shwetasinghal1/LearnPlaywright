//Test flow is
//Open browser
//navigate to url
//click on login
//enter credentials
//user reached to dashboard

function openBrowser(callback) {
    console.log("Opening the brwoser");
    setTimeout(function () {
        callback();
    }, 1000);
};

function navigateTOURL(callback) {
    console.log("Navigate to url");
    setTimeout(function () {
        callback();
    }, 200);
};

function clickToLogin(callback) {
    console.log("Click on login");
    setTimeout(function () {
        callback();
    }, 200);
};

function enterCredentails(callback) {
    console.log("Enter credentials");
    setTimeout(function () {
        callback();
    }, 200);
};

function dashboardPage(callback) {
    console.log("Reached to dashboard");
    setTimeout(function () {
        callback();
    }, 200);
};

openBrowser(function () {
    navigateTOURL(function () {
        clickToLogin(function () {
            enterCredentails(function () {
                dashboardPage(function () {
                    console.log("Verification is completed");
                })
            })
        })
    })
})