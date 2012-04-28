/* http://keith-wood.name/svg.html
   SVG plotting extension for jQuery v1.3.1.
   Written by Keith Wood (kbwood@virginbroadband.com.au) December 2008.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses.
   Please attribute the author if you use it. */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(r($){$.1T.2t(\'2e\',1U);r 1U(a){4.w=a;4.1i=1j;4.O={14:\'\',1k:25,1z:{\'Z-1l\':\'1A\'}};4.16=[0.1,0.1,0.8,0.9];4.1B={1C:\'2f\',M:\'1V\'};4.11=[];4.1D=19;4.17=[];4.1m=E;4.1W=1n 2u().2v();4.u=4.w.1T(0,0,0,0,{\'1a\':\'1T-2e\'});4.I=1n 1E(4);4.I.1o(\'X\',20);4.P=1n 1E(4);4.P.1o(\'Y\',20);4.V=1n 1X(4);4.1i=19}$.U(1U.1F,{X:0,Y:1,W:2,H:3,L:0,T:1,R:2,B:3,2w:r(a){q(F.D==0){6 4.u}4.u=a;6 4},2g:r(a,b,c,d){q(F.D==0){6 4.16}4.16=(1G(a)?a:[a,b,c,d]);4.G();6 4},1H:r(a,b,c){q(F.D==0){6 4.1B}q(N b==\'1p\'){c=b;b=E}4.1B=$.U({1C:a},(b?{M:b}:{}),c||{});4.G();6 4},2x:r(a,b){q(F.D==0){6 4.11}4.11=[(N a==\'1q\'?{M:a}:a),(N b==\'1q\'?{M:b}:b)];q(4.11[0]==E&&4.11[1]==E){4.11=[]}4.G();6 4},2y:r(a){q(F.D==0){6 4.1D}4.1D=a;6 4},1o:r(a,b,c){q(F.D==0){6 4.O}q(N b==\'1p\'){c=b;b=E}4.O={14:a,1k:b||4.O.1k,1z:$.U({\'Z-1l\':\'1A\'},c||{})};4.G();6 4},2z:r(a,b,c,d,e,f,g){4.17.2A(1n 1Y(4,a,b,c,d,e,f,g));4.G();6 4},2B:r(i){6(F.D>0?4.17[i]:E)||4.17},2C:r(){4.1i=1j;6 4},2D:r(){4.1i=19;4.G();6 4},2E:r(a){4.1m=a;6 4},G:r(){q(!4.1i){6}1Z(4.u.2h){4.u.2F(4.u.2h)}q(!4.u.21){4.w.2G.2H(4.u)}q(!4.u.K){4.u.2i(\'K\',22(4.u.23(\'K\'))||4.w.24())}1r q(4.u.K.18){4.u.K.18.14=4.u.K.18.14||4.w.24()}1r{4.u.K=4.u.K||4.w.24()}q(!4.u.12){4.u.2i(\'12\',22(4.u.23(\'12\'))||4.w.26())}1r q(4.u.12.18){4.u.12.18.14=4.u.12.18.14||4.w.26()}1r{4.u.12=4.u.12||4.w.26()}4.2j();7 a=4.1b();7 b=4.w.2I(4.u,\'2J\',{2K:\'27\'+4.1W});4.w.1I(b,a[4.X],a[4.Y],a[4.W],a[4.H]);4.A=4.w.1f(4.u,{\'1a\':\'2L\',\'27-2k\':\'2M(#27\'+4.1W+\')\'});4.28(19);4.28(1j);29(7 i=0;i<4.17.D;i++){4.2l(4.17[i],i)}4.2m();4.2n()},1J:r(a,b){6(!a[b]?22(a.23(b)):(a[b].18?a[b].18.14:a[b]))},1b:r(a){7 b=(a!=E);a=a||4.16;7 c=4.1J(4.u,\'K\');7 d=4.1J(4.u,\'12\');7 e=(a[4.L]>1?a[4.L]:c*a[4.L]);7 f=(a[4.T]>1?a[4.T]:d*a[4.T]);7 g=(a[4.R]>1?a[4.R]:c*a[4.R])-e;7 h=(a[4.B]>1?a[4.B]:d*a[4.B])-f;q(4.1D&&!b){7 i=1s.C(g/(4.I.t.J-4.I.t.C),h/(4.P.t.J-4.P.t.C));g=i*(4.I.t.J-4.I.t.C);h=i*(4.P.t.J-4.P.t.C)}6[e,f,g,h]},1K:r(){7 a=4.1b();6[a[4.W]/(4.I.t.J-4.I.t.C),a[4.H]/(4.P.t.J-4.P.t.C)]},2j:r(a,b){7 c=4.w.1f(4.u,{\'1a\':\'2N\'});7 d=4.1b();4.w.1I(c,d[4.X],d[4.Y],d[4.W],d[4.H],4.1B);q(4.11[0]&&4.P.z.Q&&!b){4.2a(c,19,4.11[0],d)}q(4.11[1]&&4.I.z.Q&&!a){4.2a(c,1j,4.11[1],d)}6 c},2a:r(a,b,c,d){7 g=4.w.1f(a,c);7 e=(b?4.P:4.I);7 f=4.1K();7 h=1s.2b(e.t.C/e.z.Q)*e.z.Q;h+=(h<=e.t.C?e.z.Q:0);1Z(h<e.t.J){7 v=(b?e.t.J-h:h-e.t.C)*f[b?1:0]+(b?d[4.Y]:d[4.X]);4.w.1t(g,(b?d[4.X]:v),(b?v:d[4.Y]),(b?d[4.X]+d[4.W]:v),(b?v:d[4.Y]+d[4.H]));h+=e.z.Q}},28:r(a){7 b=(a?\'x\':\'y\')+\'2O\';7 c=(a?4.I:4.P);7 d=(a?4.P:4.I);7 e=4.1b();7 f=4.1K();7 g=4.w.1f(4.A,$.U({\'1a\':b},c.1u));7 h=4.w.1f(4.A,$.U({\'1a\':b+\'2P\',\'Z-1l\':(a?\'1A\':\'1v\')},c.1L));7 i=(a?d.t.J:-d.t.C)*f[a?1:0]+(a?e[4.Y]:e[4.X]);4.w.1t(g,(a?e[4.X]:i),(a?i:e[4.Y]),(a?e[4.X]+e[4.W]:i),(a?i:e[4.Y]+e[4.H]));q(c.z.Q){7 j=c.z.1M;7 k=1s.2b(c.t.C/c.z.Q)*c.z.Q;k=(k<c.t.C?k+c.z.Q:k);7 l=(!c.z.1c?c.t.J+1:1s.2b(c.t.C/c.z.1c)*c.z.1c);l=(l<c.t.C?l+c.z.1c:l);7 m=[(c.z.1d==\'2Q\'||c.z.1d==\'2c\'?-1:0),(c.z.1d==\'2R\'||c.z.1d==\'2c\'?+1:0)];1Z(k<=c.t.J||l<=c.t.J){7 n=1s.C(k,l);7 o=(n==k?j:j/2);7 p=(a?n-c.t.C:c.t.J-n)*f[a?0:1]+(a?e[4.X]:e[4.Y]);4.w.1t(g,(a?p:i+o*m[0]),(a?i+o*m[0]:p),(a?p:i+o*m[1]),(a?i+o*m[1]:p));q(n==k&&n!=0){4.w.Z(h,(a?p:i-j),(a?i-j:p),\'\'+n)}k+=(n==k?c.z.Q:0);l+=(n==l?c.z.1c:0)}}q(c.O){q(a){4.w.Z(4.u,e[4.X]-c.1g,i,c.O,{\'Z-1l\':\'1v\'})}1r{4.w.Z(4.u,i,e[4.Y]+e[4.H]+c.1g,c.O,{\'Z-1l\':\'1A\'})}}},2l:r(a,b){7 c=4.1b();7 d=4.1K();7 e=4.w.2S();7 f=a.1N||[4.I.t.C,4.I.t.J];7 g=(f[1]-f[0])/a.1w;7 h=19;29(7 i=0;i<=a.1w;i++){7 x=f[0]+i*g;q(x>4.I.t.J+g){2T}q(x<4.I.t.C-g){2U}7 j=(x-4.I.t.C)*d[0]+c[4.X];7 k=c[4.H]-((a.1O(x)-4.P.t.C)*d[1])+c[4.Y];e[(h?\'2V\':\'1t\')+\'2W\'](j,k);h=1j}4.w.2k(4.A,e,$.U({\'1a\':\'2o\'+b,1C:\'2f\',M:a.1h,\'M-K\':a.1x},4.2p(a.1e),a.1P||{}))},2m:r(){4.w.Z(4.u,4.1J(4.u,\'K\')/2,4.O.1k,4.O.14,4.O.1z)},2n:r(){q(!4.V.1Q){6}7 g=4.w.1f(4.u,{\'1a\':\'V\'});7 a=4.1b(4.V.16);4.w.1I(g,a[4.X],a[4.Y],a[4.W],a[4.H],4.V.1R);7 b=a[4.W]>a[4.H];7 c=4.17.D;7 d=(b?a[4.W]:a[4.H])/c;7 e=a[4.X]+5;7 f=a[4.Y]+((b?a[4.H]:d)+4.V.13)/2;29(7 i=0;i<c;i++){7 h=4.17[i];4.w.1I(g,e+(b?i*d:0),f+(b?0:i*d)-4.V.13,4.V.13,4.V.13,{1C:h.1h});4.w.Z(g,e+(b?i*d:0)+4.V.13+5,f+(b?0:i*d),h.1e,4.V.1y)}},2p:r(a){7 b=(!4.1m?\'\':4.1m.2X().2Y(/r (.*)\\([\\s\\S]*/m,\'$1\'));6(!4.1m?{}:{2Z:\'2q.21.\'+b+\'(\\\'\'+a+\'\\\');\',30:\'2q.21.\'+b+\'(\\\'\\\');\'})}});r 1Y(a,b,c,d,e,f,g,h){q(N b!=\'1q\'){h=g;g=f;f=e;e=d;d=c;c=b;b=E}q(!1G(d)){h=g;g=f;f=e;e=d;d=E}q(N e!=\'2d\'){h=g;g=f;f=e;e=E}q(N f!=\'1q\'){h=g;g=f;f=E}q(N g!=\'2d\'){h=g;g=E}4.A=a;4.1e=b||\'\';4.1O=c||2r;4.1N=d;4.1w=e||2s;4.1h=f||\'1V\';4.1x=g||1;4.1P=h||{}}$.U(1Y.1F,{31:r(a){q(F.D==0){6 4.1e}4.1e=a;4.A.G();6 4},2o:r(a,b){q(F.D==0){6 4.1O}q(N a==\'r\'){b=a;a=E}4.1e=a||4.1e;4.1O=b;4.A.G();6 4},32:r(a,b){q(F.D==0){6 4.1N}4.1N=(a==E?E:[a,b]);4.A.G();6 4},33:r(a){q(F.D==0){6 4.1w}4.1w=a;4.A.G();6 4},1H:r(a,b,c){q(F.D==0){6 $.U({M:4.1h,\'M-K\':4.1x},4.1P)}q(N b!=\'2d\'){c=b;b=E}4.1h=a||4.1h;4.1x=b||4.1x;$.U(4.1P,c||{});4.A.G();6 4},1v:r(){6 4.A}});r 2r(x){6 x}r 1E(a,b,c,d,e,f){4.A=a;4.O=b||\'\';4.1S={};4.1g=0;4.1L={};4.1u={M:\'1V\',\'M-K\':1};4.z={Q:e||10,1c:f||0,1M:10,1d:\'2c\'};4.t={C:c||0,J:d||2s};4.34=0}$.U(1E.1F,{35:r(a,b){q(F.D==0){6 4.t}4.t.C=a;4.t.J=b;4.A.G();6 4},36:r(a,b,c,d){q(F.D==0){6 4.z}q(N c==\'1q\'){d=c;c=E}4.z.Q=a;4.z.1c=b;4.z.1M=c||4.z.1M;4.z.1d=d||4.z.1d;4.A.G();6 4},1o:r(a,b,c){q(F.D==0){6{1o:4.O,1k:4.1g,1H:4.1S}}q(N b==\'1p\'){c=b;b=E}4.O=a;4.1g=(b!=E?b:4.1g);4.1S=c||4.1S;4.A.G();6 4},1H:r(a){q(F.D==0){6 4.1L}4.1L=a;4.A.G();6 4},1t:r(a,b,c){q(F.D==0){6 4.1u}q(N b==\'1p\'){c=b;b=E}$.U(4.1u,{M:a,\'M-K\':b||4.1u[\'M-K\']},c||{});4.A.G();6 4},1v:r(){6 4.A}});r 1X(a,b,c){4.A=a;4.1Q=19;4.16=[0.9,0.1,1.0,0.9];4.13=15;4.1R=b||{M:\'37\'};4.1y=c||{}}$.U(1X.1F,{38:r(a){q(F.D==0){6 4.1Q}4.1Q=a;4.A.G();6 4},2g:r(a,b,c,d){q(F.D==0){6 4.16}4.16=(1G(a)?a:[a,b,c,d]);4.A.G();6 4},1z:r(a,b,c){q(F.D==0){6{39:4.13,3a:4.1R,3b:4.1y}}q(N a==\'1p\'){c=b;b=a;a=E}4.13=a||4.13;4.1R=b;4.1y=c||4.1y;4.A.G();6 4},1v:r(){6 4.A}});r 1G(a){6(a&&a.3c==3d)}})(3e)',62,201,'||||this||return|var|||||||||||||||||||if|function||_scale|_plotCont||_wrapper|||_ticks|_plot||min|length|null|arguments|_drawPlot||xAxis|max|width||stroke|typeof|_title|yAxis|major||||extend|legend||||text||_gridlines|height|_sampleSize|value||_area|_functions|baseVal|true|class|_getDims|minor|position|_name|group|_titleOffset|_stroke|_drawNow|false|offset|anchor|_onstatus|new|title|object|string|else|Math|line|_lineFormat|end|_points|_strokeWidth|_textSettings|settings|middle|_areaFormat|fill|_equalXY|SVGPlotAxis|prototype|isArray|format|rect|_getValue|_getScales|_labelFormat|size|_range|_fn|_settings|_show|_bgSettings|_titleFormat|svg|SVGPlot|black|_uuid|SVGPlotLegend|SVGPlotFunction|while||parent|parseInt|getAttribute|_width||_height|clip|_drawAxis|for|_drawGridlines|floor|both|number|plot|none|area|firstChild|setAttribute|_drawChartBackground|path|_plotFunction|_drawTitle|_drawLegend|fn|_showStatus|window|identity|100|addExtension|Date|getTime|container|gridlines|equalXY|addFunction|push|functions|noDraw|redraw|status|removeChild|_svg|appendChild|other|clipPath|id|foreground|url|background|Axis|Labels|nw|se|createPath|break|continue|move|To|toString|replace|onmouseover|onmouseout|name|range|points|_crossAt|scale|ticks|gray|show|sampleSize|bgSettings|textSettings|constructor|Array|jQuery'.split('|'),0,{}))