(function($) {

    setTimeout(function() {
        function t() {
            q.animate({
                d: "M1010.1,64C1137.4,64,1350,0,1350,0H0C0,0,839.3,64,1010.1,64z"
            }, 8e3, mina.easeinout, n)
        }

        function n() {
            q.animate({
                d: "M287,64C414.3,64,1350,0,1350,0H0C0,0,116.2,64,287,64z"
            }, 8e3, mina.easeinout, t)
        }

        function a() {
            f.animate({
                d: "M1076.6,118.4C1247.4,118.4,1350,0.2,1350,0.2H0C0,0.2,908.6,118.4,1076.6,118.4z"
            }, 12e3, mina.easeinout, o)
        }

        function o() {
            f.animate({
                d: "M307.1,118.4C477.8,118.4,1350,0.2,1350,0.2H0C0,0.2,139.5,118.4,307.1,118.4z"
            }, 12e3, mina.easeinout, a)
        }

        function i() {
            p.animate({
                d: "M317.9,76C467,76,1350,0.2,1350,0.2H0C0,0.2,1,76,317.9,76z"
            }, 9e3, mina.easeinout, c)
        }

        function c() {
            p.animate({
                d: "M954,76c149,0,396-75.8,396-75.8H0C0,0.2,637,76,954,76z"
            }, 9e3, mina.easeinout, i)
        }

        function u() {
            g.animate({
                d: "M474,67c168,0,876-66.8,876-66.8H0C0,0.2,168.1,67,474,67z"
            }, 11e3, mina.easeinout, d)
        }

        function d() {
            g.animate({
                d: "M904,67c168,0,446-66.8,446-66.8H0C0,0.2,598.2,67,904,67z"
            }, 11e3, mina.easeinout, u)
        }

        function l() {
            y.animate({
                d: "M327,38C478.3,38,1350,0.1,1350,0.1H0C0,0.1,0,38,327,38z"
            }, 14e3, mina.easeinout, m)
        }

        function m() {
            y.animate({
                d: "M857,38c151.3,0,493-37.9,493-37.9H0C0,0.1,530,38,857,38z"
            }, 14e3, mina.easeinout, l)
        }

        function r() {
            w.animate({
                d: "M1175,103c169,0,175-102.9,175-102.9H0C0,0.1,1007,103,1175,103z"
            }, 8e3, mina.easeinout, C)
        }

        function C() {
            w.animate({
                d: "M688,103c169,0,662-102.9,662-102.9H0C0,0.1,520,103,688,103z"
            }, 8e3, mina.easeinout, r)
        }


        (svg = document.getElementById("Layer_1")), (s = Snap(svg));
        var q = Snap.select("#line");
        t(), (svg2 = document.getElementById("Layer_2")), (s2 = Snap(svg2));
        var f = Snap.select("#line2");
        a(), (svg3 = document.getElementById("Layer_3")), (s3 = Snap(svg3));
        var p = Snap.select("#line3");
        i(), (svg4 = document.getElementById("Layer_4")), (s4 = Snap(svg4));
        var g = Snap.select("#line4");
        u(), (svg5 = document.getElementById("Layer_5")), (s5 = Snap(svg5));
        var y = Snap.select("#line5");
        l(), (svg6 = document.getElementById("Layer_6")), (s6 = Snap(svg6));
        var w = Snap.select("#line6");
        r();
    }, 150);

})($);
