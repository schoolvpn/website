var p = document.createElement("div");
p.innerHTML = "<div style='z-index:100000' id='owlreporter-preloader'> <div class='wrapper'> <div id='base' class='base'> <div class='base-bottom'> </div> <div style=' width: 100px; height: 100px; z-index: 300; position: relative; bottom: 45px; left: 50px;'> <svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3539.54 3550.84'><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#e73c7e;}</style></defs><title>Logo-SchoolVPN-simple</title><path class='cls-1' d='M3382.68,1687.08' transform='translate(-273.56 -266.29)'/><path class='cls-1' d='M3382.68,2019.83' transform='translate(-273.56 -266.29)'/><path class='cls-2' d='M3224.19,2221.85c-85.82,180-235.43,448.38-499.34,704.89C2482.84,3162,2228.79,3315,2043.94,3409c-212.64-101.78-597-316.94-907.89-704.9C865,2365.86,727.5,1989.5,727.5,1989.5L273.56,1862.24s104.27,576.24,453.94,1027.4c445.44,574.73,1061.51,834.17,1316.44,927.49,252.25-89,803.5-317.38,1225.65-816.19,293.07-346.29,436-793.26,484-1000.06-998.68-272.06-2027.4-434.45-3026.08-706.52V1080a4083.92,4083.92,0,0,0,589-111.08c320.32-85.38,578-196.92,770.18-296.21,119.65,79.84,300.58,182,543.66,259.19,315.68,100.23,596.14,113.88,770.19,111.08,0,222.16-1.61,528-1.61,528l359,97,55.23-883.22s-621.39-100.73-996.94-222.21c-285.5-92.35-527.48-197.23-725-296.28C1839,391,1505.26,529.52,1094.18,636.64,791.66,715.47,514.34,759.8,278.5,784.78V1526' transform='translate(-273.56 -266.29)'/><path class='cls-1' d='M280.7,1529.49' transform='translate(-273.56 -266.29)'/></svg> </div> </div> <div id='base' class='lock-cirlce'> <div  class='lock-circle-inside'> </div> </div> <div id='base' class='lock-box'> </div> </div> <div class='loader-section section-left'></div> <div class='loader-section section-right'></div></div>";
document.body.insertBefore(p, document.body.firstChild);
function pageload() {
    var e = (new Date).getTime(),
        t = (e - before) / 1e3,
        n = document.getElementById("loadingtime");
    n.innerHTML = "Page load: " + t + " seconds."
}
window.onload = function() {
    pageload()
}, setTimeout(function() {
    document.body.className += " loaded"
}, 1500), document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
    document.removeEventListener("DOMContentLoaded", arguments.callee, !1), domReady()
}, !1) : document.attachEvent && document.attachEvent("onreadystatechange", function() {
    "complete" === document.readyState && (document.detachEvent("onreadystatechange", arguments.callee), domReady())
}); // This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}