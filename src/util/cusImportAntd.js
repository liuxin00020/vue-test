import Vue from "vue";
import { Button, Input, Menu, Row, Col, Table, Modal, Tag, message, Icon, DatePicker, FormModel, Spin, notification, Result, Layout, Select, Collapse, Popconfirm, Tabs, Empty, Radio, Checkbox, Slider from "ant-design-vue";
const antd = [ Button, Input, Menu, Row, Col, Table, Modal, Tag, Icon, DatePicker, FormModel, Spin, Result, Layout, Select, Collapse, Popconfirm, Tabs, Empty, Radio, Checkbox, Slider;
antd.forEach(component => {
  Vue.use(component);
});
Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
