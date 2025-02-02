import iota from "../iota.js"
import tape from "tape"

tape("iota", function(t) {

  function eq(a,b) {
    t.equals(a.join(), b.join())
  }
  
  eq(iota(0), [])
  eq(iota(1), [0])
  eq(iota(2), [0,1])
  eq(iota(3), [0,1,2])
  
  t.end()
})