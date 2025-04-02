const t={name:"Chat Suggestions",version:"1.0.0",description:"Display the chat suggestions (turn experimental settings on)",runPathname:"/chat/",executePlugin:()=>{const e=document.createElement("style");e.textContent=`
            .chat .messages .suggestions {
                display: flex;
            }
        `,document.head.appendChild(e)}};export{t as default};
