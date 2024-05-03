function formatAmount() {
    var t = document.getElementById("creditAmount"),
        e = t.value.replace(/\./g, "").replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    t.value = e
}

function tcno_dogrula(t) {
    if ("0" === (t = String(t)).substring(0, 1)) return !1;
    if (11 !== t.length) return !1;
    for (var e = t.substr(0, 10).split(""), n = hane_tek = hane_cift = 0, r = j = 0; r < 9; ++r) j = parseInt(e[r], 10), 1 & r ? hane_cift += j : hane_tek += j, n += j;
    return (7 * hane_tek - hane_cift) % 10 === parseInt(t.substr(-2, 1), 10) && (n += parseInt(e[9], 10)) % 10 === parseInt(t.substr(-1), 10)
}

function validateTC() {
    var t = document.getElementById("txtTckn"),
        e = t.value;
    11 === e.length ? tcno_dogrula(e) ? t.classList.remove("error") : t.classList.add("error") : t.classList.remove("error")
}
document.addEventListener("DOMContentLoaded", (function () {
    const t = document.getElementById("creditAmount"),
        e = document.getElementById("term"),
        n = document.getElementById("vald"),
        r = document.getElementById("monthlyPayment"),
        a = document.getElementById("totalPayment");

    function o() {
        const o = t.value.replace(/[^\d.]/g, "").replace('.', ''),
            l = e.value;
        if ("" === o || "" === l) return r.textContent = "", void(a.textContent = "");
        const s = parseFloat(o),
            c = parseFloat(l);
        if (isNaN(s) || isNaN(c)) return r.textContent = "", void(a.textContent = "");
        const d = (s / c).toFixed(2),
            u = (s + 0 * s).toFixed(2),
            g = i(d),
            m = i(u);
        n.textContent = s.toLocaleString("tr-TR") + " TL için başvuruya başlayın", r.textContent = g + " TL", a.textContent = m + " TL"
    }

    function i(t) {
        const e = t.split(".");
        return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), e.join(".")
    }
    t.addEventListener("input", o), e.addEventListener("input", o)
}));

document.getElementById("txtBirthDate").addEventListener("input", (function (t) {
    var e = t.target.value.replace(/\D/g, ""),
        n = "";
    e.length > 0 && (n += e.slice(0, 2)), e.length > 2 && (n += "." + e.slice(2, 4)), e.length > 4 && (n += "." + e.slice(4, 8));
    var r = (new Date).getFullYear().toString(),
        a = parseInt(e.slice(4, 8)),
        o = parseInt(e.slice(2, 4)),
        i = parseInt(e.slice(0, 2));
    a > parseInt(r) || a < 0 || o > 12 || o < 1 || i > 31 || i < 1 ? t.target.classList.add("error") : t.target.classList.remove("error"), t.target.value = n
})), document.getElementById("txtPhoneNumber").addEventListener("input", (function (t) {
    for (var e = t.target.value.replace(/\D/g, ""), n = "", r = 0; r < e.length; r++)
        if (0 !== r || "0" !== e[r]) {
            if (3 !== r && 6 !== r || (n += " "), r >= 10) break;
            n += e[r]
        }
    t.target.value = n
}));