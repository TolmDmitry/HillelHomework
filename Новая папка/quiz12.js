!!1
!!2
!true
!false
!true === false
1 !== 2
!(1 === 1)
!(1 !== 1)
!0
!!0
2 || 1
2 || 0
2 && 1
1 && 2
0 && 2
0 || 1 || 2
0 && 1 && 2
2 || 1 || 0
2 && 1 && 0
null || 2
undefined && 1
(undefined || 2) && (3 || 0)
(2 && 1) || (null && 0)
(2 > 1) && "greater"
(2 < 1) && null
null && (2 < 1)
("" || 2) && (3 || "3.5") || (4 && 5) // 2 && 3 || 5 -> 3
(-1 + 1) && "zero"
"-1" + 1 && "oups"

(true + "") === "true"
4 && 5 == '5' && ++num || !0
true + false
12 / "6"
"number" + 15 + 3
15 + 3 + "number"
"foo" + + "bar"
'true' == true ?
false == 'false'
null == ''
!!"false" == !!"true"