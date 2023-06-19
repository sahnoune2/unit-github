function capi(yes) {
  let first = yes.charAt(0);
  let result = first.toUpperCase() + yes.slice(1);
  return result;
}
capi("idiot");
export { capi };
