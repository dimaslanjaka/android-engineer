function appendAd(a){const t=adList.shift();if(t){const e=document.createElement("div");e.innerHTML=t;const l=a.parentNode;l&&l.insertBefore(e,a.nextElementSibling)}}function shuffleArray(a){for(let t=a.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[a[t],a[e]]=[a[e],a[t]]}return a}const adList=["<ins class=adsbygoogle data-ad-client=ca-pub-2188063137129806 data-ad-format=auto data-ad-slot=3295872825 data-full-width-responsive=true style=display:block></ins>","<ins class=adsbygoogle data-ad-client=ca-pub-2188063137129806 data-ad-format=auto data-ad-slot=4695444437 data-full-width-responsive=true style=display:block></ins>","<ins class=adsbygoogle data-ad-client=ca-pub-2188063137129806 data-ad-format=fluid data-ad-layout=in-article data-ad-slot=5634823028 style=display:block;text-align:center></ins>","<ins class=adsbygoogle data-ad-client=ca-pub-2188063137129806 data-ad-format=fluid data-ad-layout=in-article data-ad-slot=8481296455 style=display:block;text-align:center></ins>"],isDev="4000"==location.port,wrapper=document.getElementById("content-wrapper"),elements=shuffleArray(Array.from(wrapper.querySelectorAll("pre,h1,h2,h3,h4,h5")));elements.forEach(appendAd),document.querySelectorAll("ins.adsbygoogle").forEach((a,t)=>{if(0==a.children.length){const e=`#${a.id}.${a.className}[${t}]`;console.log("apply",e),isDev&&(a.style.border="1px solid red",a.setAttribute("data-adtest","on")),(adsbygoogle=window.adsbygoogle||[]).push({})}});