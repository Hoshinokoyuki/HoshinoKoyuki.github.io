function percent(){let e=document.documentElement.scrollTop||window.pageYOffset,t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-document.documentElement.clientHeight,o=Math.round(e/t*100),n=document.querySelector("#percent");o<=95?(n.childNodes[0].style.display="none",n.childNodes[1].style.display="block",n.childNodes[1].innerHTML=o):(n.childNodes[1].style.display="none",n.childNodes[0].style.display="block")}window.onscroll=percent;