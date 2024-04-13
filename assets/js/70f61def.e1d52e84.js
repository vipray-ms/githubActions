"use strict";(self.webpackChunkapi_wiki=self.webpackChunkapi_wiki||[]).push([[588],{3230:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(4848),s=t(8453);const r={},o="JSON API Spec",a={id:"Json API Contract/json_wiki",title:"JSON API Spec",description:"",source:"@site/docs/Json API Contract/json_wiki.md",sourceDirName:"Json API Contract",slug:"/Json API Contract/json_wiki",permalink:"/githubActions/docs/Json API Contract/json_wiki",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Descriptive API Spec",permalink:"/githubActions/docs/Descriptive API Contract/descriptive_wiki"}},c={},d=[];function p(n){const e={code:"code",h1:"h1",pre:"pre",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"json-api-spec",children:"JSON API Spec"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",metastring:'title="JSON API Spec"',children:'{\n    "endpoints": {\n        "/visitors": {\n            "description": "Endpoint to manage visitor data",\n            "methods": [\n                "GET",\n                "POST",\n                "PUT",\n                "DELETE"\n            ],\n            "requestFormats": {\n                "GET": {\n                    "params": [\n                        "id"\n                    ],\n                    "description": "Retrieve visitor data by ID"\n                },\n                "POST": {\n                    "body": {\n                        "name": "string",\n                        "email": "string",\n                        "password": "string"\n                    },\n                    "description": "Create a new visitor"\n                },\n                "PUT": {\n                    "params": [\n                        "id"\n                    ],\n                    "body": {\n                        "name": "string",\n                        "email": "string",\n                        "password": "string"\n                    },\n                    "description": "Update an existing visitor"\n                },\n                "DELETE": {\n                    "params": [\n                        "id"\n                    ],\n                    "description": "Delete a visitor by ID"\n                }\n            },\n            "responseFormats": {\n                "GET": {\n                    "200": {\n                        "id": "string",\n                        "name": "string",\n                        "email": "string"\n                    },\n                    "404": {\n                        "message": "string"\n                    }\n                },\n                "POST": {\n                    "201": {\n                        "id": "string",\n                        "message": "string"\n                    },\n                    "400": {\n                        "message": "string"\n                    }\n                },\n                "PUT": {\n                    "200": {\n                        "message": "string"\n                    },\n                    "404": {\n                        "message": "string"\n                    }\n                },\n                "DELETE": {\n                    "200": {\n                        "message": "string"\n                    },\n                    "404": {\n                        "message": "string"\n                    }\n                }\n            },\n            "errorHandling": {\n                "400": "Bad request - Missing or invalid parameters",\n                "401": "Unauthorized - Authentication required",\n                "404": "Not found - Resource not found",\n                "500": "Internal server error - Something went wrong on our end"\n            },\n            "authentication": true,\n            "authorization": true,\n            "rateLimiting": {\n                "limit": 100,\n                "interval": "hour",\n                "message": "Rate limit exceeded, please try again later"\n            }\n        }\n    }\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);