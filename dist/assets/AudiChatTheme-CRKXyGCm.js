const n={name:"AudiChatTheme",version:"1.0.0",description:"Audi chat theme by Arkadiusz",runPathname:"/chat/",executePlugin:()=>{t()}};function t(){const e=document.createElement("style");e.textContent=`
        /* Przykładowe style CSS inspirowane Audi */
        section.chat {
            background: url("https://i0.wp.com/engineswapdepot.com/wp-content/uploads/2021/11/1972-Audi-100-Coupe-S-with-a-turbo-1.8-L-AEB-inline-four-01.jpg?fit=1610%2C1319&ssl=1") no-repeat; /* Ciemne tło */
            color: #fff; /* Biały tekst */
            background-position: center;
            background-size: cover;
            font-family: Arial, sans-serif;
            border: 1px solid #555;
            border-radius: 5px;
            padding: 10px;
        }
    `,document.head.appendChild(e)}export{n as default};
