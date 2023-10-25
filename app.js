const tD = document.querySelector("#tDoğru")
const tY = document.querySelector("#tYanlış")
const tN = document.querySelector("#tNet")
const sD = document.querySelector("#sDoğru")
const sY = document.querySelector("#sYanlış")
const sN = document.querySelector("#sNet")
const mD = document.querySelector("#mDoğru")
const mY = document.querySelector("#mYanlış")
const mN = document.querySelector("#mNet")
const fD = document.querySelector("#fDoğru")
const fY = document.querySelector("#fYanlış")
const fN = document.querySelector("#fNet")
const dN = document.querySelector("#dNot")
const obp = document.querySelector("#obp")
const tyt = document.querySelector("#tyt")
const tytObp = document.querySelector("#tytObp")
const cardHeader = document.querySelector(".card-header")
const hesaplaTuş = document.querySelector("#hesapla")
let netler = []
let puan = 0
run()
function run() {
    tD.addEventListener("keyup", türkçe)
    tY.addEventListener("keyup", türkçe)
    sD.addEventListener("keyup", sosyal)
    sY.addEventListener("keyup", sosyal)
    mD.addEventListener("keyup", matematik)
    mY.addEventListener("keyup", matematik)
    fD.addEventListener("keyup", fen)
    fY.addEventListener("keyup", fen)
    dN.addEventListener("keyup", diploma)
    hesaplaTuş.addEventListener("click", hesapla)
    tyt.remove()
    tytObp.remove()
}

function türkçe() {
    //türkçe değerleri girildiğince çalışır
    if (Number(tD.value) + Number(tY.value) < 41) {
        tN.innerHTML = Number(tD.value) - (Number(tY.value) * 0.25)
        tN.classList.remove("bg-danger")
    } else {
        tN.classList.add("bg-danger")
    }
}
function sosyal() {
    //sosyal değerleri girildiğince çalışır
    if (Number(sD.value) + Number(sY.value) < 21) {
        sN.innerHTML = Number(sD.value) - (Number(sY.value) * 0.25)
        sN.classList.remove("bg-danger")
    } else {
        sN.classList.add("bg-danger")
    }
}
function matematik() {
    //matematik değerleri girildiğince çalışır
    if (Number(mD.value) + Number(mY.value) < 41) {
        mN.innerHTML = Number(mD.value) - (Number(mY.value) * 0.25)
        mN.classList.remove("bg-danger")
    } else {
        mN.classList.add("bg-danger")
    }
}
function fen() {
    //fen değerleri girildiğince çalışır
    if (Number(fD.value) + Number(fY.value) < 21) {
        fN.innerHTML = Number(fD.value) - (Number(fY.value) * 0.25)
        fN.classList.remove("bg-danger")
    } else {
        fN.classList.add("bg-danger")
    }
}
function diploma() {
    //diploma notu değerleri girildiğince çalışır
    if (50 <= dN.value && dN.value <= 100) {
        obp.textContent = dN.value * 5
    } else {
        obp.textContent = ""
    }
}
function hesapla() {
    //hesapla tuşuna basıldığında çalışır
    //net hesaplamaları
    puan = mN.innerHTML * 3.3 + tN.innerHTML * 3.3 + sN.innerHTML * 3.4 + fN.innerHTML * 3.4 +100
    netler.push(tN.innerHTML, sN.innerHTML, mN.innerHTML, fN.innerHTML)
    if (puan >= 0) {
        //standart sapma 
        let karesiToplanan = 0
        let sapmaToplam = (Number(mN.innerHTML) + Number(tN.innerHTML) + Number(sN.innerHTML) + Number(fN.innerHTML)) / 4
        netler.forEach(function (e) {
            karesiToplanan += ((Number(e) - sapmaToplam) ** 2)
        })
        puan +=  Math.sqrt(karesiToplanan / 3)
        let sonuç = (Number(obp.textContent) * 0.12) + puan
        tyt.classList = "border border-dark py-1 rounded  alert alert-success text-center col-12"
        tyt.textContent = "TYT Puanı: " + puan + " (Okul puanı hariç)"
        cardHeader.appendChild(tyt)
        tytObp.textContent = "TYT Puanı: " + sonuç + " (Okul puanı dahil)"
        cardHeader.appendChild(tytObp)
    } else {
        tyt.classList = "border border-dark py-1 rounded  alert alert-warning text-center col-12"
        tyt.textContent = "Lütfen tüm değerleri giriniz !"
        cardHeader.appendChild(tyt)
        hesaplaTuş.classList.add("disabled")
        setTimeout(() => {
            tyt.remove()
            hesaplaTuş.classList.remove("disabled")
        }, 2000);
    }
}