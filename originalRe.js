(async function(){

    document.body.style.display="none";

    let stlVarLen = document.createElement('style');
    document.querySelector('head').appendChild(stlVarLen);
    
    let viewport = ()=>{return parseInt((window.innerWidth/screen.width)*100);}

  
    let view =  {
                  height:Math.floor(parseInt((window.outerHeight/screen.height)*100)),
                  width:Math.floor(parseInt((window.outerWidth/screen.width)*100))
                };
    let  rootStyle = ()=>
    {
        let $vh = (10/((window.outerHeight/screen.height)*100))*(10+((10/((window.outerHeight/screen.height)*5))))
    
        if(Math.floor(parseInt((window.outerWidth/screen.width)*100)) >= 99)
        {
            stlVarLen.innerHTML = `*,:root{--len:calc(1.01vw);font-size:calc(1.01vw);--width:${parseInt((window.outerWidth/screen.width)*10)*10};}`;
        }
  
       else{ stlVarLen.innerHTML = `*,:root{--len:calc(calc(1.4vh) * calc( 1.11 * ${$vh} ));font-size:calc(calc(1.4vh) * calc( 1.11 * ${$vh} ));--width:${parseInt((window.outerWidth/screen.width)*10)*10};}`;}
     
    if(window.navigator.userAgent.match('Mobile')|| window.navigator.userAgent.match('Android'))
    {
      stlVarLen.innerHTML = `@media(orientation:landscape){*,:root{--len:calc(1.5vw);font-size:calc(1.5vw);--width:${parseInt((window.outerWidth/screen.width)*5)*6};}}@media(orientation:portrait){*,:root{--len:calc(3.1vw);font-size:calc(3.1vw);--width:${parseInt((screen.width))}px;}} `;  
    };

};
  

rootStyle();
window.addEventListener('resize',()=>{rootStyle()})

let element = document.createElement("style");
document.querySelectorAll("head")[0].appendChild(element);


function getVarClasses(){
    
    let findIn = document.querySelectorAll("body")
    findIn = findIn[0].querySelectorAll("*");

    
   let classList = [];

   findIn.forEach(f=>{

    
    f.classList.forEach(c=>{
        if(!classList.includes(c))
            classList.push(c)
    })

   });

   classList = classList.filter(c=>{if(c.includes("var")){

    return c

   }});

   let parts = [];

   classList.forEach((c,i)=>{

    let getHook = c.replace("var_","");
    getHook = getHook.split("_")

    parts[i] = getHook;



   });

   
   function resizeViewport(){

    let resizableStyleSheet = "";
    let resizableVar = "";

    parts.forEach(a=>{
        
    resizableVar = "";

    if(viewport()>a[3]&&!navigator.userAgent.includes("Android")){

        resizableVar += `.var_${a[0]}_${a[1]}_${a[2]}_${a[3]}{${a[0]}:${a[1]};}
        `;

    }else{


        resizableVar += `.var_${a[0]}_${a[1]}_${a[2]}_${a[3]}{${a[0]}:${a[2]};}
        `;
    }

    resizableStyleSheet += resizableVar;

    });

        return resizableStyleSheet

   };



   let newStyle = document.createElement("style")
   document.querySelectorAll("head")[0].appendChild(newStyle)

     newStyle.innerText = resizeViewport();
    window.addEventListener("resize",()=>{ newStyle.innerText = resizeViewport()});

   
};

getVarClasses();

///////////////////////////

function findStyle(a){
    
    let findIn = document.querySelectorAll("body")
    findIn = findIn[0].querySelectorAll("*");

    
   let classList = [];

   findIn.forEach(f=>{
    
    f.classList.forEach(c=>{
        if(!classList.includes(c))
            classList.push(c)
    })

   })

   let choose = [];
   let response = "";

   let others = "";
   let references = "";

   classList.forEach(c=>{
    
   for(let int = 0;int<=9;int++){

    a.forEach(all=>{

        
    all.others!=undefined?others = all.others:null
    all.references!=undefined?references = all.references:null

        if(c.includes(all.class)&&c.includes(int)){
            let value = c.replaceAll(all.class,"");
            if(!isNaN(value)){
            let getStyle = `${references}.${all.class}${value}{${all.property}:${all.value.replaceAll("(value)",parseFloat(value/10))};${others}}`;

            if(!choose.includes(getStyle))
                choose.push(getStyle)

            }
            
        }

    })

   }

   });

   choose.forEach(c=>response+=c);

   let newStyle = document.createElement("style")
   document.querySelectorAll("head")[0].appendChild(newStyle)

     newStyle.innerText = response;
   

  };

  var generalClassStyle = {

    preset : [
        {class:"fs",property:"font-size",value:"(value)rem"},
        {class:"w",property:"width",value:"(value)rem"},
        {class:"wvw",property:"width",value:"(value)vw"},
        {class:"h",property:"height",value:"(value)rem"},
        {class:"hvh",property:"height",value:"(value)vh"},
        {class:"bd",property:"border",value:"(value)rem"},
        {class:"br",property:"border-radius",value:"(value)rem"},
        {class:"bw",property:"border-width",value:"(value)rem"},
        {class:"t",property:"top",value:"(value)rem"},
        {class:"l",property:"left",value:"(value)rem"},
        {class:"r",property:"right",value:"(value)rem"},
        {class:"b",property:"bottom",value:"(value)rem"},
        {class:"tvw",property:"top",value:"(value)vw"},
        {class:"lvw",property:"left",value:"(value)vw"},
        {class:"rvw",property:"right",value:"(value)vw"},
        {class:"bvw",property:"bottom",value:"(value)vw"},
        {class:"p",property:"padding",value:"(value)rem"},
        {class:"pl",property:"padding-left",value:"(value)rem"},
        {class:"pr",property:"padding-right",value:"(value)rem"},
        {class:"pt",property:"padding-top",value:"(value)rem"},
        {class:"pb",property:"padding-bottom",value:"(value)rem"},
        {class:"pvw",property:"padding",value:"(value)vw"},
        {class:"plvw",property:"padding-left",value:"(value)vw"},
        {class:"prvw",property:"padding-right",value:"(value)vw"},
        {class:"ptvw",property:"padding-top",value:"(value)vw"},
        {class:"pbvw",property:"padding-bottom",value:"(value)vw"},
        {class:"m",property:"margin",value:"(value)rem"},
        {class:"mt",property:"margin-top",value:"(value)rem"},
        {class:"mb",property:"margin-bottom",value:"(value)rem"},
        {class:"mr",property:"margin-right",value:"(value)rem"},
        {class:"ml",property:"margin-left",value:"(value)rem"},
        {class:"mvw",property:"margin",value:"(value)vw"},
        {class:"mtvw",property:"margin-top",value:"(value)vw"},
        {class:"mbvw",property:"margin-bottom",value:"(value)vw"},
        {class:"mrvw",property:"margin-right",value:"(value)vw"},
        {class:"mlvw",property:"margin-left",value:"(value)vw"}
      ]

  }

  if(generalClassStyle.config!=undefined){

    findStyle(generalClassStyle.config);

  }else{
    findStyle(generalClassStyle.preset)
  };

let style = document.querySelectorAll("link");
let text = [];
let effect = [];
let all = [];
style.forEach(async (style)=>{
    let get = await fetch(style.href);
    let href = await get.text();
    all = href.split("}");
    let widthLength = href.trim().split("}").map(h=>`${h}}`)
    .filter(href=>href.includes("["))
    .map(href=>{
        let declaration = href
            .split(";")
            .map(href=>href.substring(href.indexOf("--")))
                .filter(href=>{
                if(href.includes("["))
                    return href
            })
            .map(txt=>txt.substring(txt.indexOf("--")+2)
            .replaceAll(":["," ")
            .replaceAll("]"," ")
            .replaceAll(", ",",")
            .replaceAll(" ,",",")
            .replaceAll(" , ",",")
            .split(" "))

            .map((style,int)=>{
                return{
                name:style[0],
                before:style[1],
                after:style[2],
                gear:style[3]
            }})
        return{

            selectors:href.substring(0,href.indexOf("{")).replaceAll("/*","").replaceAll("*/",""),
            declaration:declaration
        }
    })
    
    text.push(...widthLength);

});

(function(){setTimeout(async()=>{
    
    function resizeViewport(){
  
        let StyleSheet = "";
        let resizableStyleSheet = "";
        let resizableVar = "";
    
        text.forEach(style=>{

            style.declaration.forEach(rule=>{
            
                resizableVar = "";
            
                if(viewport()>rule.gear&&!navigator.userAgent.includes("Android")||viewport()>rule.gear&&!navigator.userAgent.includes('Mobile')){
            
                    resizableVar += `--${rule.name}:${rule.before};`;
            
                }else{
            
            
                    resizableVar += `--${rule.name}:${rule.after};`;
                }
            
                resizableStyleSheet += resizableVar;
            
                });
            
                    StyleSheet += `${style.selectors}{${resizableStyleSheet}}`;

        });

        return StyleSheet
    
       };
  
  
    
  let resizableStyle = document.createElement("style")
  document.querySelectorAll("head")[0].appendChild(resizableStyle);
 
  resizableStyle.innerText = resizeViewport();
  window.addEventListener("resize",()=>{resizableStyle.innerText = resizeViewport()});
  
  ////////////////////////////////////

  document.body.style.display="flex"; 

},700)})();

})();
