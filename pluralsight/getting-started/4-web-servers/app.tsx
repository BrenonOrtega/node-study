import React, { ButtonHTMLAttributes } from "react";
import * as ReactDOM from "react-dom";

const MyInput: any = () => (
    <button className="my-input">
        Click Here!
    </button>
);

const initialApp: any = (
    <html lang="en">
    <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        {MyInput()}
    </body>
    </html>
);

ReactDOM.render(initialApp, document.getElementById("root"));
