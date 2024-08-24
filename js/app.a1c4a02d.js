(function(){"use strict";var e={8317:function(e,t,o){var n=o(5130),a=o(6768),r=o(4232);function s(e,t,o,n,s,i){const l=(0,a.g2)("NavBar"),c=(0,a.g2)("TitleBlock"),d=(0,a.g2)("ProjectList"),u=(0,a.g2)("AboutMe"),p=(0,a.g2)("ContactMe"),m=(0,a.g2)("MyFooter");return(0,a.uX)(),(0,a.CE)("div",{style:(0,r.Tr)(n.lockBgStyle)},[(0,a.bF)(l),(0,a.bF)(c),(0,a.bF)(d,{onToggleBgLock:n.toggleBgLock},null,8,["onToggleBgLock"]),(0,a.bF)(u),(0,a.bF)(p),(0,a.bF)(m)],4)}var i=o(144);const l={ref:"navBar",class:"fixed lg:static w-full top-0 bg-gray-200 px-8 py-4 md:flex md:justify-between shadow-md"},c={class:"flex justify-between items-center"},d=(0,a.Lk)("h1",{class:"font-light text-3xl text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out"},"LK",-1),u=[d],p={class:"md:hidden flex items-center"},m={class:"md:!flex md:h-8"},g={class:"pt-2 md:p-0 md:!flex md:space-x-8 justify-between"};function f(e,t,o,s,i,d){return(0,a.uX)(),(0,a.CE)("header",l,[(0,a.Lk)("div",c,[(0,a.Lk)("div",null,[(0,a.Lk)("a",{onClick:t[0]||(t[0]=(...e)=>s.menuOff&&s.menuOff(...e)),href:"#"},u)]),(0,a.Lk)("div",p,[(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>s.toggleMenu&&s.toggleMenu(...e)),class:"h-8 w-8 group"},[(0,a.Lk)("span",{class:(0,r.C4)([s.isOpen?"transition-all duration-300 ease-in-out rotate-45         translate-y-2.25 group-hover:bg-red-600":"transition-all duration-300 ease-in-out group-hover:bg-blue-600","block w-8 h-0.5 bg-gray-700 my-1.5"])},null,2),(0,a.Lk)("span",{class:(0,r.C4)([s.isOpen?"transition-all duration-100 ease-in-out w-0":"transition-all duration-300 ease-in-out w-8 group-hover:bg-blue-600","block h-0.5 bg-gray-700 my-1.5"])},null,2),(0,a.Lk)("span",{class:(0,r.C4)([s.isOpen?"transition duration-300 ease-in-out -rotate-45         group-hover:bg-red-600 -translate-y-2.25":"transition duration-300 ease-in-out group-hover:bg-blue-600","block w-8 h-0.5 bg-gray-700 my-1.5"])},null,2)])])]),(0,a.bF)(n.eB,{name:"menuShow",css:s.shouldAnimate},{default:(0,a.k6)((()=>[(0,a.bo)((0,a.Lk)("div",m,[(0,a.Lk)("div",g,[(0,a.Lk)("a",{onClick:t[2]||(t[2]=(...e)=>s.menuOff&&s.menuOff(...e)),class:"inner sm:flex items-center border border-transparent w-full hover:bg-gray-300 md:hover:bg-transparent hover:text-blue-600 cursor-pointer font-light py-2 px-4 block transition-all duration-200 ease-in-out",href:"#projects"}," Projects "),(0,a.Lk)("a",{onClick:t[3]||(t[3]=(...e)=>s.menuOff&&s.menuOff(...e)),class:"inner sm:flex items-center border border-transparent w-full hover:bg-gray-300 md:hover:bg-transparent hover:text-blue-600 cursor-pointer font-light py-2 px-4 block transition-all duration-200 ease-in-out",href:"#aboutMe"}," About Me "),(0,a.Lk)("a",{onClick:t[4]||(t[4]=(...e)=>s.menuOff&&s.menuOff(...e)),class:"inner sm:flex items-center border border-transparent w-full hover:bg-gray-300 md:hover:bg-transparent hover:text-blue-600 cursor-pointer font-light py-2 px-4 block transition-all duration-200 ease-in-out",href:"#contactMe"}," Contact ")])],512),[[n.aG,s.isOpen]])])),_:1},8,["css"])],512)}var h={setup(){const e=(0,i.KR)(!1),t=(0,i.KR)(!1),o=(0,i.KR)(null),n=()=>{e.value=!1},r=()=>{e.value=!e.value,t.value=!0},s=()=>{window.innerWidth>768&&(e.value=!1,t.value=!1)},l=t=>{o.value&&!o.value.contains(t.target)&&(e.value=!1)};(0,a.sV)((()=>{window.addEventListener("resize",s),document.addEventListener("click",l)})),(0,a.xo)((()=>{window.removeEventListener("resize",s),document.removeEventListener("click",l)}));const c=()=>{window.scrollTo(0,0)};return{isOpen:e,menuOff:n,shouldAnimate:t,navBar:o,toggleMenu:r,jump:c}}},v=o(1241);const b=(0,v.A)(h,[["render",f]]);var w=b,x=o.p+"img/pfp.fba43d60.jpg";const k=(0,a.Fv)('<div class="md:w-2/3 mx-auto mt-20 lg:mt-3"><div class="pt-4 px-8 sm:text-center sm:mx-auto"><h1 class="text-4xl sm:text-5xl font-bold inline-block text-transparent bg-clip-text animated-background bg-gradient-to-r from-gradblue via-emerald-400 to-gradblue"> Leonidas Kalpaxis </h1></div><div class="px-8 sm:mx-auto sm:text-center"><span class="text-md sm:text-xl font-normal dark:text-gray-40 text-pretty tracking-normal sm:tracking-wider">Mechanical Engineering Student @ CCNY</span></div></div><div class="w-60 h-60 mx-auto my-4"><img src="'+x+'" class="rounded-lg object-cover"></div><div class="px-8 pb-6 sm:text-center"><p class="text-lg font-normal text-gray-500 dark:text-gray-400 text-pretty"> Welcome to my portfolio site, where you can find some of my recent projects as well as information about me! </p></div>',3);function y(e,t){return k}const j={},L=(0,v.A)(j,[["render",y]]);var C=L;const M={class:"px-8 pt-6 pb-8 scroll-mt-[10vh] lg:scroll-mt-0",id:"aboutMe"},A=(0,a.Fv)('<span class="text-3xl font-bold">About Me</span><div class="block md:inline-block font-normal text-gray-900"><p class="mt-2 text-gray-500 dark:text-gray-400 text-pretty"> I am a <span class="font-semibold text-gray-900 underline dark:text-white decoration-blue-500">curious</span> and <span class="font-semibold text-gray-900 underline dark:text-white decoration-blue-500">efficient</span> individual, studying Mechanical Engineering with a minor in Mathematics at The City College of New York. Originally majoring in Physics, I decided to switch my major to Engineering, desiring a field with a creative aspect — bringing ideas to life via drawing and computer modeling, while still supported by the foundations of science and math.<br><br> After my most recent summer internship at <a href="https://www.bloomenergy.com/" class="font-semibold text-gray-900 underline dark:text-white decoration-green-500">Bloom Energy</a>, I have become more interested in the fields of <span class="font-semibold text-gray-900 underline dark:text-white decoration-red-500">data science</span> and <span class="font-semibold text-gray-900 underline dark:text-white decoration-red-500">automation</span>. I plan to continue my studies at The City College of New York next Spring by applying for the Master&#39;s of Engineering program, while continuing to improve my skills.<br><br> Feel free to contact me with any questions about the projects listed above. </p></div>',2),E=[A];function O(e,t,o,n,r,s){return(0,a.uX)(),(0,a.CE)("div",M,E)}var B={data:function(){return{myPfp:x}}};const _=(0,v.A)(B,[["render",O]]);var F=_;const T=(0,a.Fv)('<h2 class="px-8 text-3xl font-bold" id="contactMe">Contact Info</h2><div class="ml-8 mt-2"><div class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 17" stroke-width="1.5" stroke="currentColor" class="h-5 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path></svg><p class="px-2 text-gray-500">646.705.4527</p></div><div class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 14" stroke-width="1.5" stroke="currentColor" class="h-5 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path></svg><p class="px-2 text-gray-500">leonidas.ny@gmail.com</p></div><div class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 14" stroke-width="1.5" stroke="currentColor" class="h-5 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path></svg><p class="px-2 text-gray-500">lkalpax000@citymail.cuny.edu</p></div><div class="flex"><svg class="h-5 w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 500 370"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path></svg><a class="px-2 text-gray-500 hover:underline" href="https://www.linkedin.com/in/leonidas-kalpaxis/">My LinkedIn</a></div><div class="flex"><svg class="h-5 w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 370"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg><a class="px-2 text-gray-500 hover:underline" href="https://github.com/leondaki/">My Github</a></div></div>',2);function I(e,t){return T}const P={},K=(0,v.A)(P,[["render",I]]);var z=K;const D={class:"bg-gray-100 pb-12 scroll-mt-[10vh] lg:scroll-mt-0",id:"projects"},X=(0,a.Lk)("h2",{class:"px-8 pt-6 text-3xl font-bold"},"Projects",-1),R=(0,a.Lk)("p",{class:"mt-2 px-8 text-gray-500 dark:text-gray-400 text-pretty"}," Listed below are various projects I have worked on from the past few years. Click on any one of the cards below to learn more! ",-1),S={class:"flex flex-wrap justify-center"};function V(e,t,o,n,r,s){const i=(0,a.g2)("ProjectCard"),l=(0,a.g2)("ProjectModal");return(0,a.uX)(),(0,a.CE)("div",D,[X,R,(0,a.Lk)("div",S,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.projects,(e=>((0,a.uX)(),(0,a.Wv)(i,{key:e.id,project:e,onOpenModal:t=>n.openModal(e.id)},null,8,["project","onOpenModal"])))),128))]),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.projects,(e=>((0,a.uX)(),(0,a.Wv)(l,{key:e.id,project:e,modalActive:n.selectedID==e.id,onCloseModal:t[0]||(t[0]=e=>n.closeModal())},null,8,["project","modalActive"])))),128))])}const q={class:"mx-8 bg-white rounded-xl sm:max-w-lg w-5/6 overflow-hidden mt-8 transition ease-in-out duration-300 shadow-md hover:shadow-lg"},W={class:"sm:shrink-0"},N=["src"],G={class:"p-4 w-full"},U={class:"tracking-wide text-md font-semibold inline-block text-transparent bg-clip-text animated-background bg-gradient-to-r from-gradblue via-emerald-400 to-gradblue"},$={class:"text-sm font-light tracking-wide text-black"},H=(0,a.Lk)("br",null,null,-1),Y=(0,a.Lk)("br",null,null,-1),J={class:"mt-2 text-gray-500 text-md text-pretty"};function Q(e,t,o,n,s,i){return(0,a.uX)(),(0,a.CE)("div",q,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=t=>{e.$emit("openModal"),e.$emit("lockBg")}),class:"w-full h-full sm:flex cursor-pointer text-left"},[(0,a.Lk)("div",W,[(0,a.Lk)("img",{class:"sm:h-40 sm:w-44 h-80 w-full object-cover",src:o.project.imageUrls[0],alt:"..."},null,8,N)]),(0,a.Lk)("div",G,[(0,a.Lk)("h3",U,(0,r.v_)(o.project.title),1),(0,a.Lk)("div",$,[(0,a.eW)((0,r.v_)(o.project.date),1),H,Y]),(0,a.Lk)("p",J,(0,r.v_)(o.project.description),1)])])])}o(6573),o(8100),o(7936),o(7467),o(4732),o(9577);var Z={props:{modalToShow:{type:Int32Array},project:{type:Object,required:!0}}};const ee=(0,v.A)(Z,[["render",Q]]);var te=ee;const oe={class:"outer fixed w-full h-full left-0 top-0 bg-gray-800 bg-opacity-70"},ne={key:0,class:"inner bg-white overflow-scroll inset-x-0 inset-y-0 fixed"},ae={class:"flex fixed justify-between py-4 px-8 w-full bg-gray-200 z-10"},re={class:"block"},se={class:"text-xl md:text-3xl font-bold"},ie={class:"text-md md:text-xl font-extralight"},le=(0,a.Lk)("span",{class:"rotate-45 translate-y-2.25 bg-gray-400 transition-all duration-200 ease-in-out group-hover:bg-gray-700 block w-8 h-0.5 my-1.5"},null,-1),ce=(0,a.Lk)("span",{class:"-rotate-45 bg-gray-400 transition-all duration-200 ease-in-out group-hover:bg-gray-700 block w-8 h-0.5 my-1.5"},null,-1),de=[le,ce],ue={class:"md:flex md:px-28 mt-40 mb-36"},pe={class:"mx-4 mt-2 md:mt-0"},me={class:""},ge={class:"sm:w-full px-4"},fe=(0,a.Lk)("h3",{class:"font-semibold md:text-xl"},"Objectives",-1),he={class:"whitespace-pre-line text-gray-500 text-md lg:text-left md:text-lg sm:text-justify"},ve={class:"sm:w-full mt-4 md:mt-8 px-4"},be=(0,a.Lk)("h3",{class:"font-semibold md:text-xl"},"Methods",-1),we={class:"whitespace-pre-line text-gray-500 text-md lg:text-left md:text-lg sm:text-justify"},xe={class:"sm:w-full mt-4 md:mt-8 px-4"},ke=(0,a.Lk)("h3",{class:"font-semibold md:text-xl"},"Results",-1),ye=["innerHTML"],je={class:"flex fixed bottom-0 bg-gray-200 justify-between p-4 w-full"};function Le(e,t,o,s,i,l){const c=(0,a.g2)("ImageCarousel");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(n.eB,{name:"modal-animation"},{default:(0,a.k6)((()=>[(0,a.bo)((0,a.Lk)("div",oe,null,512),[[n.aG,o.modalActive]])])),_:1}),(0,a.bF)(n.eB,{name:"modal-animation-inner"},{default:(0,a.k6)((()=>[o.modalActive?((0,a.uX)(),(0,a.CE)("div",ne,[(0,a.Lk)("div",ae,[(0,a.Lk)("div",re,[(0,a.Lk)("h3",se,(0,r.v_)(o.project.title),1),(0,a.Lk)("h4",ie,(0,r.v_)(o.project.date),1)]),(0,a.Lk)("button",{onClick:t[0]||(t[0]=t=>e.$emit("closeModal")),class:"pb-2 group h-8 w-8"},de)]),(0,a.Lk)("div",ue,[(0,a.bF)(c,{projectImages:o.project.imageUrls,projectCaptions:o.project.imageCaptions},null,8,["projectImages","projectCaptions"]),(0,a.Lk)("div",pe,[(0,a.Lk)("div",me,[(0,a.Lk)("div",ge,[fe,(0,a.Lk)("p",he,(0,r.v_)(o.project.objectives),1)]),(0,a.Lk)("div",ve,[be,(0,a.Lk)("p",we,(0,r.v_)(o.project.methods),1)]),(0,a.Lk)("div",xe,[ke,(0,a.Lk)("p",{innerHTML:o.project.results,class:"whitespace-pre-line text-gray-500 text-md lg:text-left md:text-lg sm:text-justify"},null,8,ye)])])])]),(0,a.Lk)("div",je,[(0,a.Lk)("button",{onClick:t[1]||(t[1]=t=>e.$emit("closeModal")),class:"py-2 px-4 border mx-auto bg-black hover:bg-gray-800 text-white transition ease-in-out duration-200 rounded-md"}," Close ")])])):(0,a.Q3)("",!0)])),_:1})],64)}const Ce={class:"mt-4 md:mt-0"},Me={class:"carousel flex items-center justify-around"},Ae={class:"whitespace-nowrap inline-flex items-center h-80 w-80 md:h-96 md:w-96 overflow-hidden"},Ee={class:"h-80 w-80 md:h-96 md:w-96 flex items-center"},Oe=["src"],Be={class:"h-80 w-80 md:h-96 md:w-96 flex items-center"},_e=["src"],Fe={class:"w-80 md:w-96 h-24 md:h-30 flex items-start justify-around mt-2 mx-auto"},Te=(0,a.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-arrow-left-circle",viewBox:"0 0 16 16"},[(0,a.Lk)("path",{"fill-rule":"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"})],-1),Ie=[Te],Pe={class:"w-5/6 h-full flex items-start"},Ke={key:0,class:"mx-auto px-2 text-pretty text-center text-sm overflow-hidden"},ze={class:"font-light italic text-gray-500"},De=(0,a.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-arrow-right-circle",viewBox:"0 0 16 16"},[(0,a.Lk)("path",{"fill-rule":"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"})],-1),Xe=[De];function Re(e,t,o,s,i,l){const c=(0,a.g2)("CarouselItem");return(0,a.uX)(),(0,a.CE)("div",Ce,[(0,a.Lk)("div",Me,[(0,a.Lk)("div",Ae,[(0,a.Lk)("div",{class:"flex",style:(0,r.Tr)(s.trackStyle),onTransitionend:t[0]||(t[0]=(...e)=>s.handleTransitionEnd&&s.handleTransitionEnd(...e))},[(0,a.Lk)("div",Ee,[(0,a.Lk)("img",{src:o.projectImages[o.projectImages.length-1],class:"object-contain"},null,8,Oe)]),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.projectImages,((e,t)=>((0,a.uX)(),(0,a.Wv)(c,{key:t,picture:e,class:""},null,8,["picture"])))),128)),(0,a.Lk)("div",Be,[(0,a.Lk)("img",{src:o.projectImages[0],class:"object-contain"},null,8,_e)])],36)])]),(0,a.Lk)("div",Fe,[(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>s.prevPic&&s.prevPic(...e)),class:(0,r.C4)(1==s.imageCount?"hidden":"h-8 block w-8  text-gray-400 hover:text-gray-700 rounded-full bg-white transition duration-200 ease-in-out")},Ie,2),(0,a.Lk)("div",Pe,[(0,a.bF)(n.eB,{name:"captionFade",mode:"out-in"},{default:(0,a.k6)((()=>[s.isTransitioning?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",Ke,[(0,a.Lk)("span",{class:(0,r.C4)(1==s.imageCount?"hidden":"")}," Figure "+(0,r.v_)(s.capNum+1)+". ",3),(0,a.Lk)("span",ze,(0,r.v_)(o.projectCaptions[s.capNum]),1)]))])),_:1})]),(0,a.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>s.nextPic&&s.nextPic(...e)),class:(0,r.C4)(1==s.imageCount?"hidden":"h-8 block w-8 text-gray-400 hover:text-gray-700 rounded-full bg-white transition duration-200 ease-in-out")},Xe,2)])])}const Se={class:"h-80 w-80 md:h-96 md:w-96 flex items-center"},Ve=["src"];function qe(e,t,o,n,r,s){return(0,a.uX)(),(0,a.CE)("div",Se,[(0,a.Lk)("img",{class:"object-contain",src:o.picture},null,8,Ve)])}var We={props:{picture:{type:Object,required:!0}}};const Ne=(0,v.A)(We,[["render",qe]]);var Ge=Ne,Ue={setup(e){const t=(0,i.KR)(0),o=(0,i.KR)(0),n=(0,i.KR)(!1),r=(0,a.EW)((()=>e.projectImages.length)),s=(0,a.EW)((()=>({transform:`translateX(-${100*(t.value+1)/(e.projectImages.length+2)}%)`,transition:n.value?"transform 0.5s ease-in-out":"none"}))),l=()=>{n.value||1==r.value||(t.value+1>r.value?t.value=0:(t.value+=1,o.value>r.value-2?o.value=0:o.value=t.value,n.value=!0))},c=()=>{n.value||1==r.value||(t.value<0?t.value=r.value-1:(t.value-=1,o.value<1?o.value=r.value-1:o.value=t.value,n.value=!0))},d=()=>{n.value=!1,t.value===e.projectImages.length?t.value=0:-1===t.value&&(t.value=e.projectImages.length-1)};return{nextPic:l,prevPic:c,imageCount:r,picNum:t,trackStyle:s,handleTransitionEnd:d,isTransitioning:n,capNum:o}},props:{projectImages:{type:Object,required:!0},projectCaptions:{type:Object,required:!0}},components:{CarouselItem:Ge}};const $e=(0,v.A)(Ue,[["render",Re]]);var He=$e,Ye={props:{modalActive:{type:Boolean},project:{type:Object,required:!0}},components:{ImageCarousel:He}};const Je=(0,v.A)(Ye,[["render",Le]]);var Qe=Je,Ze=o.p+"img/bloom_1.a65e2968.jpg",et=o.p+"img/lunar_1.299c931a.png",tt=o.p+"img/lunar_2.37aa2e15.png",ot=o.p+"img/lunar_3.55931444.png",nt=o.p+"img/lunar_4.7ce83b9a.png",at=o.p+"img/lunar_5.976a5c17.png",rt=o.p+"img/scooter_1.2cdf6b9a.png",st=o.p+"img/scooter_2.d8d3f46e.png",it=o.p+"img/scooter_3.e7dad13a.png",lt=o.p+"img/scooter_4.9fb84afa.png",ct=o.p+"img/scooter_5.62aae0c1.png",dt=o.p+"img/scooter_6.d739121b.png",ut=o.p+"img/scooter_7.7d44dcd8.png",pt=o.p+"img/chess_1.ac120beb.jpg",mt=o.p+"img/chess_2.90994dca.png",gt=o.p+"img/chess_3.c952dead.jpg",ft=o.p+"img/chess_4.fce3b23b.jpg",ht=o.p+"img/chess_5.d40a56e0.png",vt=o.p+"img/chess_6.af3d3a4b.png",bt={emits:["toggleBgLock"],setup(e,{emit:t}){const o=(0,i.KR)([{id:1,title:"Power Recovery Process",date:"June 2024 - August 2024",description:"Development of automation process to recover power in Bloom Energy modules.",imageUrls:[Ze],imageCaptions:["This project contains confidential information that is           property of Bloom Energy so pictures are omitted"],objectives:"          • Goal was to more efficiently recover power remotely in Bloom           Energy's power modules upon a drop in power levels \n           • Ensure power modules are kept within operating limits during the process",methods:"           • Process was developed using Python, the Pandas library and OSI PI \n           • Flowcharts were constructed to assist in designing the code ",results:"          • Automation process saves over 100 hours of manual work per year \n           • Process decreases time to recover power fin modules from weeks to a few days \n           • Operators can initiate process by clicking a single button"},{id:2,title:"Free Return Lunar Mission",date:"December 2023",description:"Plotting a free return lunar trajectory for a spacecraft.",imageUrls:[et,tt,ot,nt,at],imageCaptions:["Overview of final trajectory","Burn location and departure path of spacecraft","Table of GMAT differential solver results showing the calculated Δv value","Top view of entire spacecraft path along with orbital path of Moon","Mission timetable highlighting key events"],objectives:"          • Design a free return lunar trajectory mission requiring only one engine burn,           launching a spacecraft in such a way that it will naturally swing around the Moon and return to Earth \n           • Determine the location and direction of the applied burn. \n           • Satisfy mission duration, perilune distance, and fuel use requirement \n           • Tabulate the mission timeline",methods:"          • Simulated theoretical trajectory using NASA's General Mission Analysis Tool (GMAT) \n           • Used real predicted positions of the Earth and Moon during given launch date \n           • Used vary/achieve GMAT functionalty along with its differential solver to iteratively test various           translunar injection burns and trajectories",results:"          •  Calculated the required Δv required to place the spacecraft          on its free return trajectory, as well as the position of the burn \n           • Mission requirements of time, perilune distance, and fuel use were satisfied"},{id:3,title:"Kick Scooter Design",date:"March 2023 - May 2023",description:"Modeling and analysis of a kick scooter with front wheel suspension.",imageUrls:[rt,st,it,lt,ct,dt,ut],imageCaptions:["The completed kick scooter design","2D Drawing of the scooter platform","2D Drawing of the handlebar","2D Drawing of the front wheel connector, for use in the suspension system","FEM anaysis of the handlbar deflection for a given horizontal force","FEM analysis of the platform deflection on application of a given vertical load","Bill of materials for the scooter, with a price $52 under budget limit"],objectives:"          • Design an original kick scooter with front wheel suspension\n           • Satisfy strength requirements, given deflection limits \n           • Complete design within a given budget",methods:"          • Modeled kick scooter (parts, drawings, and assembly) using SolidWorks \n           • Performed FEM analysis to anaylaze how the assembly would deflect under test loading \n           • Tabulated items and prices in a bill of materials to ensure acceptable cost ",results:"          • Final design cost 10% less than  the budget requirement \n           • Observed defelection under test loading was far from failure region"},{id:4,title:"Origami Chess Set",date:"January 2023 - April 2023",description:"Design of a complete standard chess set made out of paper.",imageUrls:[pt,mt,gt,ft,ht,vt],imageCaptions:["A selection of the completed chess pieces","Earliest prototype design","Next prototype design","Further prototype progression","Design progression of the Knight","A view of the completed set"],objectives:"          • Design the complete standard 32 piece chess set to be folded out of paper \n           • Maintain distinct profiles for each of the six piece types to ensure recognizibility,          and ensure the relative piece heights are correct \n           • Create pieces with color accents",methods:"          • Derived each piece design from the traditional origami bird base for consistency \n           • Folded multiple versions of each piece to refine its design and ensure satisfactory aesthetics and reasonable folding time \n           • Compared heights of each piece with real chess pieces to establish correct relative piece heights",results:'          • Folded a complete set of origami chess pieces out of two sided colored paper \n           • Pieces incorporate color accent, contributing to aesthetic \n           • Video showcase of final set <a href="https://www.youtube.com/watch?v=RilnBviIWbY&t=218s" \t\t\t\t  class="text-gray-600 hover:underline font-semibold">here</a>'}]),n=(0,i.KR)(0),r=()=>{n.value=window.scrollY};(0,a.sV)((()=>{window.addEventListener("scroll",r)})),(0,a.xo)((()=>{window.removeEventListener("scroll",r)}));const s=(0,i.KR)(null),l=(0,i.KR)(!1);let c=0;const d=()=>{t("toggleBgLock",c),l.value=!1,s.value=(0,i.KR)(null)},u=e=>{t("toggleBgLock",n.value),c=n.value,s.value=e,l.value=!0};return{projects:o,selectedID:s,openModal:u,closeModal:d,windowTop:n}},components:{ProjectCard:te,ProjectModal:Qe}};const wt=(0,v.A)(bt,[["render",V]]);var xt=wt;const kt={class:"mt-8 bg-gray-200 dark:bg-gray-800"},yt=(0,a.Lk)("div",{class:"w-full mx-auto p-4 md:flex md:items-center md:justify-between"},[(0,a.Lk)("span",{class:"text-sm text-gray-500 sm:text-center dark:text-gray-400"},[(0,a.eW)(" © 2024 Leonidas Kalpaxis - Produced with "),(0,a.Lk)("a",{href:"https://tailwindcss.com/",class:"hover:underline"},"tailwindcss"),(0,a.eW)(" and "),(0,a.Lk)("a",{href:"https://vuejs.org/",class:"hover:underline"},"Vue.js")])],-1),jt=[yt];function Lt(e,t){return(0,a.uX)(),(0,a.CE)("footer",kt,jt)}const Ct={},Mt=(0,v.A)(Ct,[["render",Lt]]);var At=Mt,Et={name:"App",setup(){const e=(0,i.KR)(!1),t=(0,i.KR)(0),o=(0,a.EW)((()=>({position:e.value?"fixed":"",top:e.value?`-${t.value}px`:""}))),n=o=>{t.value=o,e.value=!e.value};return(0,a.$u)((()=>{!e.value&&window.scrollTo(0,t.value)})),{lockBg:e,lockBgStyle:o,toggleBgLock:n,receivedValue:t}},components:{NavBar:w,TitleBlock:C,ProjectList:xt,AboutMe:F,ContactMe:z,MyFooter:At}};const Ot=(0,v.A)(Et,[["render",s]]);var Bt=Ot;(0,n.Ef)(Bt).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,r){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],r=e[d][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(i=!1,r<s&&(s=r));if(i){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,a,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,s=n[0],i=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var d=l(o)}for(t&&t(n);c<s.length;c++)r=s[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},n=self["webpackChunkleondaki_site"]=self["webpackChunkleondaki_site"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(8317)}));n=o.O(n)})();
//# sourceMappingURL=app.a1c4a02d.js.map