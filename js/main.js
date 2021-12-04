const targetMoney = 100000;
let totalBackers = 5007;
let currentMoney = 89914;
let currentProgress = (currentMoney * 100) / targetMoney;

const progressBar = document.querySelector(".statusProgress");

function upgradeProgress(money) {
    if(currentMoney < targetMoney){
        currentMoney+= money;
        currentProgress = (currentMoney * 100) / targetMoney;
        if(currentProgress > 100)
            currentProgress = 100;
        progressBar.style.width = `${currentProgress}%`;

        const textMoney = document.querySelector("#currentMoney");
        textMoney.innerHTML = currentMoney;
        
        const backers = document.querySelector("#totalBackers");
        totalBackers++;
        backers.innerHTML = totalBackers;
    }
}

const support = document.getElementById("support");
const supportMenu = document.querySelector(".supportMenu");
const supportClose = document.querySelector(".supportClose");

support.addEventListener("click", () => {
    supportMenu.classList.add("supportMenuShow");
    window.scrollTo(0, 0);
});

supportClose.addEventListener("click", () => {
    supportMenu.classList.remove("supportMenuShow");
    window.scrollTo(0,0);
});

const radioOptions = document.querySelectorAll(".radioBtn");
var lastOption;
var lastBlock;

function addBorder(newElement, lastElement) {
    if (lastElement != undefined)
        lastElement.classList.toggle("supportBorder");
    newElement.classList.toggle("supportBorder");
    return newElement;
}

radioOptions.forEach((radio) => {
    radio.addEventListener("click", (event) => {
        //Add style a block Support
        if (event.target.tabIndex == 1)
            lastBlock = addBorder(event.path[4], lastBlock);
        else
            lastBlock = addBorder(event.path[4], lastBlock);

        if (event.target.tabIndex != 1) {
            
            let newOptions = event.path[4].children[1];

            if (lastOption != undefined) {
                lastOption.classList.toggle("supportOptionShow");
            }

            newOptions.classList.toggle("supportOptionShow");
            lastOption = newOptions;
        }
        else {
            if (lastOption) {
                if (lastOption.classList.contains("supportOptionShow")) {
                    lastOption.classList.toggle("supportOptionShow");
                    lastOption = undefined;
                }
            }
        }
    });
});

const bookmark = document.querySelector(".bookmark");
const bookmarkText = document.querySelector(".save");

function changeColor() {
    const circleSvg = document.querySelector("#svgC");
    circleSvg.classList.toggle("bookmarkCircle");
    const pathSvg = document.querySelector("#svgP");
    pathSvg.classList.toggle("bookmarkSvg");
}

bookmark.addEventListener("click", () => {
    bookmarkText.classList.toggle("saveColor");
    if (bookmarkText.innerHTML === "Bookmark") {
        bookmarkText.innerHTML = "Bookmarked";
    } else {
        bookmarkText.innerHTML = "Bookmark";
    }
    changeColor();
});

const thanks = document.querySelector(".thanks");
const continueOptions = document.querySelectorAll(".continue");
const finish = document.querySelector(".btnThanks");
continueOptions.forEach((btnMenu) => {
    btnMenu.addEventListener("click", (event) => {
        window.scrollTo(0, 0);
        $(".supportWindow").hide();
        thanks.classList.toggle("thanksShow");

        const inputValue = event.path[1].children[0].children[1].value;
        upgradeProgress(parseInt(inputValue,10));
    });
});

finish.addEventListener("click", () => {
    supportMenu.classList.toggle("supportMenuShow");
});



