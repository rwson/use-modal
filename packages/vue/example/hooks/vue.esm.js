import Vue from 'vue';

var ModalActionType;

(function (ModalActionType) {
  ModalActionType[ModalActionType["OpenModal"] = 0] = "OpenModal";
  ModalActionType[ModalActionType["UpdateModal"] = 1] = "UpdateModal";
  ModalActionType[ModalActionType["CloseModal"] = 2] = "CloseModal";
  ModalActionType[ModalActionType["CloseAllModals"] = 3] = "CloseAllModals";
  ModalActionType[ModalActionType["RegisterModal"] = 4] = "RegisterModal";
  ModalActionType[ModalActionType["RemoveModal"] = 5] = "RemoveModal";
})(ModalActionType || (ModalActionType = {}));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var state = /*#__PURE__*/Vue.observable({});
var mutation = function mutation(value) {
  var _state$payload$id$pro;

  var type = value.type,
      payload = value.payload;

  switch (type) {
    case ModalActionType.OpenModal:
      if (!state[payload == null ? void 0 : payload.id]) {
        throw new Error("modal '" + (payload == null ? void 0 : payload.id) + "' not exist, please register it before your use");
      }

      state[payload == null ? void 0 : payload.id].visible = true;
      state[payload == null ? void 0 : payload.id].props = payload == null ? void 0 : payload.props;
      break;

    case ModalActionType.CloseModal:
      state[payload == null ? void 0 : payload.id].visible = false;
      break;

    case ModalActionType.UpdateModal:
      if (!state[payload == null ? void 0 : payload.id]) {
        throw new Error("modal '" + (payload == null ? void 0 : payload.id) + "' not exist, please register it before your use");
      }

      var originProps = (_state$payload$id$pro = state[payload == null ? void 0 : payload.id].props) != null ? _state$payload$id$pro : {};
      state[payload == null ? void 0 : payload.id].props = payload != null && payload.merge ? _extends({}, originProps, payload == null ? void 0 : payload.props) : payload == null ? void 0 : payload.props;
      break;

    case ModalActionType.CloseAllModals:
      Object.keys(state).forEach(function (key) {
        state[key].visible = false;
      });
      break;

    case ModalActionType.RegisterModal:
      Vue.set(state, payload == null ? void 0 : payload.id, {
        visible: false,
        props: {}
      });
      break;

    case ModalActionType.RemoveModal:
      delete state[payload == null ? void 0 : payload.id];
      break;
  }
};

var injectMethods = function injectMethods(vm) {
  vm.prototype.__registerModal__ = function (id) {
    return mutation({
      type: ModalActionType.RegisterModal,
      payload: {
        id: id
      }
    });
  };

  vm.prototype.__removeModal__ = function (id) {
    return mutation({
      type: ModalActionType.RemoveModal,
      payload: {
        id: id
      }
    });
  };

  vm.prototype.openModal = function (id, props) {
    return mutation({
      type: ModalActionType.OpenModal,
      payload: {
        id: id,
        props: props
      }
    });
  };

  vm.prototype.updateModal = function (id, props, merge) {
    return mutation({
      type: ModalActionType.UpdateModal,
      payload: {
        id: id,
        props: props,
        merge: merge
      }
    });
  };

  vm.prototype.closeModal = function (id) {
    return mutation({
      type: ModalActionType.CloseModal,
      payload: {
        id: id
      }
    });
  };

  vm.prototype.closeAllModals = function () {
    return mutation({
      type: ModalActionType.CloseAllModals
    });
  };
};

var installComponent = function installComponent(vm) {
  vm.component('UseModal', {
    props: {
      modalId: {
        type: String,
        required: true
      },
      isGlobal: {
        type: Boolean,
        required: false,
        "default": function _default() {
          return false;
        }
      }
    },
    created: function created() {
      if (!state[this.modalId]) {
        this.__registerModal__(this.modalId);
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (!this.isGlobal) {
        this.__removeModal__(this.modalId);
      }
    },
    computed: {
      modalState: function modalState() {
        var _currentState$props;

        var currentState = state[this.modalId];
        return {
          visible: currentState == null ? void 0 : currentState.visible,
          props: (_currentState$props = currentState == null ? void 0 : currentState.props) != null ? _currentState$props : {}
        };
      }
    },
    render: function render() {
      return this.$scopedSlots["default"](this.modalState);
    }
  });
};

var install = function install(vm) {
  injectMethods(vm);
  installComponent(vm);
};

export default install;
//# sourceMappingURL=vue.esm.js.map
