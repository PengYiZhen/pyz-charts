'use strict'
function Descriptor(property, value) {
    return (target, descriptor)=>{
      property || (target[property] = value);
      return descriptor;
    }
}
export default Descriptor;