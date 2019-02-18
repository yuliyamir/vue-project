export default {
  bind(el, bindings, vnode) {
    console.log('bind');
    el.style.color = 'red';
  },

  inserted(el, bindings, vnode) {
    console.log('inserted');
  },

  update(el, bindings, vnode) {
    console.log('update');
  },

  componentUpdated(el, bindings, vnode) {
    console.log('componentUpdated');
  },

  unbind(el, bindings, vnode) {
    console.log('unbind');
  },

}
