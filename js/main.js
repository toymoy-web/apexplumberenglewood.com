(function(){
  var t=document.getElementById("mob-toggle"),d=document.getElementById("mob-drawer"),o=document.getElementById("mob-overlay"),c=document.getElementById("drawer-close");
  function openNav(){d.removeAttribute("hidden");o.classList.add("visible");t.setAttribute("aria-expanded","true");t.setAttribute("aria-label","Close navigation menu");document.documentElement.style.overflow="hidden";}
  function closeNav(){d.setAttribute("hidden","");o.classList.remove("visible");t.setAttribute("aria-expanded","false");t.setAttribute("aria-label","Open navigation menu");document.documentElement.style.overflow="";}
  if(t&&d&&o){
    t.addEventListener("click",function(){if(t.getAttribute("aria-expanded")==="true"){closeNav();}else{openNav();}});
    if(c){c.addEventListener("click",closeNav);}
    o.addEventListener("click",closeNav);
    d.querySelectorAll("a").forEach(function(a){a.addEventListener("click",closeNav);});
    document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeNav();}});
    window.addEventListener("resize",function(){if(window.innerWidth>768&&t.getAttribute("aria-expanded")==="true"){closeNav();}});
  }
  document.querySelectorAll(".faq-q").forEach(function(btn){
    btn.addEventListener("click",function(){
      var item=btn.parentElement,isOpen=item.classList.toggle("open");
      btn.setAttribute("aria-expanded",isOpen?"true":"false");
    });
  });
})();
