Итерация  (от латински iterare „повтарям“) 



Интерполиращи стрингове 

```javascript
`${varaible1} ${varaible}`
```





Дебъгване





























## TEST Flowcharts



https://mermaid-js.github.io/mermaid/#/flowchart

~~~gfm
```mermaid
graph LR
A[Hard edge] -->B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
```
~~~

```mermaid
graph LR
A --> B 
B --> C{Decision}
C -->|One| D[Result one]
C -->|Two| E[Result two]
```

test



```mermaid
graph LR
A{A > B} --> B1{B > C} 
A --> B2{B < C}
B1 --> C{провери C към А}
C --> 6[А > C]
6 --> 61[A > B > C]
C --> 7[C > A]
7 --> 71[C > A > B]
B2 --> 8
8 --> 81
B2 --> 9
9 --> 91

```

