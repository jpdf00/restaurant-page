(()=>{"use strict";const t=document.querySelector("#content"),e=(()=>{const t=document.createElement("nav");t.setAttribute("class","position-fixed top-0 bg-primary w-100 p-2");const e=document.createElement("a");e.setAttribute("class","text-decoration-none mx-2 text-white m-3"),e.setAttribute("id","linkHome"),e.setAttribute("href","#"),e.textContent="Home";const n=document.createElement("a");n.setAttribute("class","text-decoration-none mx-2 text-white m-3"),n.setAttribute("id","linkMenu"),n.setAttribute("href","#"),n.textContent="Menu";const i=document.createElement("a");i.setAttribute("class","text-decoration-none mx-2 text-white m-3"),i.setAttribute("id","linkContact"),i.setAttribute("href","#"),i.textContent="Contact";const s=[e,n,i];for(let e=0;e<s.length;e+=1)t.appendChild(s[e]);return t})(),n=(()=>{const t=document.createElement("div");t.setAttribute("class","container mt-5");const e=document.createElement("h1");e.setAttribute("class","m-2"),e.textContent="My Restaurant";const n=document.createElement("img");n.setAttribute("class","m-2"),n.setAttribute("src","../assets/img/restaurant-photo.jpg"),n.setAttribute("alt","Restaurant Photo");const i=document.createElement("p");i.setAttribute("class","m-2"),i.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit ligula quis ligula tristique egestas. Maecenas in lobortis odio. Praesent vitae suscipit lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin mollis in neque eu ultricies. Quisque sit amet bibendum purus. Vestibulum dignissim ligula sed lacus eleifend imperdiet. Mauris condimentum pulvinar enim, nec scelerisque sapien. Pellentesque sit amet magna tincidunt, ultricies elit eget, sodales sem. Sed venenatis risus a elit imperdiet, sed dictum lectus bibendum. ";const s=[e,n,i];for(let e=0;e<s.length;e+=1)t.appendChild(s[e]);return t})();t.appendChild(e),t.appendChild(n),document.querySelector("#linkHome").addEventListener("click",(()=>{t.removeChild(t.childNodes[1]),t.appendChild(n)})),document.querySelector("#linkMenu").addEventListener("click",(()=>{const e=(()=>{const t=document.createElement("div");t.setAttribute("class","container mt-5");const e=document.createElement("ul");e.setAttribute("class","container");const n=(t,e,n,i)=>{const s=document.createElement("li");s.setAttribute("class","d-flex flex-column");const c=document.createElement("h2"),o=document.createElement("div");o.setAttribute("class","d-flex justify-content-between");const r=document.createElement("p"),l=document.createElement("p");return c.textContent=t,r.textContent=e,l.textContent=n,o.appendChild(r),o.appendChild(l),s.appendChild(c),s.appendChild(o),{dish:s}},i=n("Executive Dish","01 to 02 people.","$ 10.00"),s=n("Family Dish","02 to 04 people.","$ 20.00"),c=n("Banquete Dish","04 to 08 people.","$ 30.00"),o=[i.dish,s.dish,c.dish];for(let t=0;t<o.length;t+=1)e.appendChild(o[t]);return t.appendChild(e),t})();t.removeChild(t.childNodes[1]),t.appendChild(e)})),document.querySelector("#linkContact").addEventListener("click",(()=>{const e=(()=>{const t=document.createElement("div");t.setAttribute("class","container mt-5");const e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("class","form-control m-3"),e.setAttribute("placeholder","Name");const n=document.createElement("input");n.setAttribute("type","email"),n.setAttribute("class","form-control m-3"),n.setAttribute("placeholder","Email");const i=document.createElement("textarea");i.setAttribute("name","message"),i.setAttribute("class","form-control m-3"),i.setAttribute("rows","8"),i.setAttribute("cols","80"),i.setAttribute("placeholder","Message");const s=document.createElement("button");s.setAttribute("type","submit"),s.setAttribute("class","btn btn-primary m-3"),s.textContent="Send";const c=[e,n,i,s];for(let e=0;e<c.length;e+=1)t.appendChild(c[e]);return t})();t.removeChild(t.childNodes[1]),t.appendChild(e)}))})();